import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import { designTokens } from "~/styling";
import { Main } from '~/components'
import { getRouteNavigation, KEY } from '~/utils'

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

function HomeLayout(props) {
  const { route, title, children, ...main } = props;

	const navigate = getRouteNavigation(route)
  const pageTitle = title ? `Geeofree | ${title}` : "Geeofree";

	const mainRef = useRef()

	const handleKeyBinds = (/** @type {KeyboardEvent} */evt) => {
		evt.persist()
		evt.stopPropagation()

		switch (evt.key) {
			case KEY.H:
			case KEY.ARROW_LEFT:
				navigate.prev()
				break

			case KEY.L:
			case KEY.ARROW_RIGHT:
				navigate.next()
				break

			default:
				// do-nothing
				break
		}
	}

	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.focus()
		}
	}, [route.location.pathname])

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
			<Main
				{...main}
				maxWidth="1440px"
				minHeight="max(100vh, 600px)"
				tabIndex={-1}
				onKeyDown={handleKeyBinds}
				onClick={() => console.log("here")}
				ref={mainRef}
			>
				{children}
			</Main>
    </>
  );
}

export default HomeLayout;
