import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { animated } from 'react-spring'

import { designTokens } from "~/styling";
import { Main } from '~/components'
import { getRouteNavigation, KEY } from '~/utils'
import { useRouteTransition } from '~/hooks'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: ${designTokens.colors.primary.background};
  }

  html, body {
		max-width: 1440px;
    min-height: max(100vh, 600px);
  }

  [aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
  }
`;

const AnimatedDiv = styled(animated.div)`
	position: relative;
`

const SCROLL_MOVE_VALUE = 256

function HomeLayout(props) {
  const { route, title, children, ...mainProps } = props;

  const pageTitle = title ? `Geeofree | ${title}` : "Geeofree";
	const routePath = route.location.pathname
	const navigate = getRouteNavigation(routePath)

	const { transitions, ...routeTransition } = useRouteTransition(routePath)
	const mainRef = useRef()

	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.focus()
		}
	}, [route.location.pathname])

	const handleKeyBinds = (/** @type {KeyboardEvent} */evt) => {
		evt.persist()
		evt.stopPropagation()

		switch (evt.key) {
			case KEY.H:
			case KEY.ARROW_LEFT:
				routeTransition.animateLeft()
				navigate.prev()
				break

			case KEY.J:
				window.scroll({
					top: window.scrollY + SCROLL_MOVE_VALUE,
					behavior: "smooth"
				})
				break

			case KEY.K:
				const diff = window.scrollY - SCROLL_MOVE_VALUE
				window.scroll({
					top: diff < 0 ? 0 : diff,
					behavior: "smooth"
				})
				break

			case KEY.L:
			case KEY.ARROW_RIGHT:
				routeTransition.animateRight()
				navigate.next()
				break
		}
	}

	const main = transitions((style) => (
		<AnimatedDiv style={style}>
			<Main
				{...mainProps}
				outline="none"
				maxWidth="1440px"
				minHeight="max(100vh, 600px)"
				tabIndex={-1}
				onKeyDown={handleKeyBinds}
				ref={mainRef}
			>
				{children}
			</Main>
		</AnimatedDiv>
	))

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
			{main}
    </>
  );
}

export default HomeLayout;
