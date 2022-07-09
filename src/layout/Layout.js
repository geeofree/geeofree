import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import { designTokens } from "~/styling";
import { Main } from '~/components'

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
  const { title, children, ...main } = props;
  const pageTitle = title ? `Geeofree | ${title}` : "Geeofree";
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
			>
				{children}
			</Main>
    </>
  );
}

export default HomeLayout;
