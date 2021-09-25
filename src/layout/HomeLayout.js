import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import "@atlaskit/css-reset";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Zilla Slab', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  html, body {
    min-width: 100vw;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  margin-top: 5rem;
  display: flex;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Subtitle = styled.h2`
  margin: 0;
`;

const Main = styled.main`
  margin-top: 3rem;
`;

const LogoContainer = styled.div`
  width: 128px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
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
      <Container>
        <Header>
          <LogoContainer>
            <StaticImage alt="My Logo" src="../images/logo.png" />
          </LogoContainer>

          <TitleContainer>
            <Title>Geeofree</Title>
            <Subtitle>Web Developer</Subtitle>
          </TitleContainer>
        </Header>
        <Main>{children}</Main>
      </Container>
    </>
  );
}

export default HomeLayout;
