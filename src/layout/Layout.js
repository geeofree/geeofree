import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import "@atlaskit/css-reset";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: #1F1F28;
  }

  html, body, main {
		max-width: 1440px;
    min-height: max(100vh, 600px);
  }

  [aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
  }
`;

const Main = styled.main`
	position: relative;
`;

function HomeLayout(props) {
  const { title, children } = props;
  const pageTitle = title ? `Geeofree | ${title}` : "Geeofree";
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
			<Main>{children}</Main>
    </>
  );
}

export default HomeLayout;
