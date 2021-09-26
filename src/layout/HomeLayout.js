import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "@atlaskit/css-reset";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Zilla Slab', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  html, body {
    min-height: 100vh;
  }

  [aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
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
  font-size: 3.5rem;
`;

const Subtitle = styled.h2`
  margin: 0;
`;

const Main = styled.main`
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 480px;
`;

const LogoContainer = styled.div`
  width: 128px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  font-size: 1rem;

  & > li {
    margin: 0 1rem;
  }
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

function LinkItem(props) {
  const { path, children } = props;

  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
}

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
        <Nav>
          <List>
            <LinkItem path="/">Home</LinkItem>
            <LinkItem path="/notes">Notes</LinkItem>
            <LinkItem path="/blogs">Blog</LinkItem>
          </List>
        </Nav>
        <Main>{children}</Main>
      </Container>
    </>
  );
}

export default HomeLayout;
