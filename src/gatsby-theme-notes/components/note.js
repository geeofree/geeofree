import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { HomeLayout } from "../../layout";

const Header = styled.h1``;

function Note(props) {
  const { data, pageContext } = props;
  const { title } = pageContext;
  const body = data.note.body;

  return (
    <HomeLayout title={title}>
      <Header>{title}</Header>
      <MDXRenderer>{body}</MDXRenderer>
    </HomeLayout>
  );
}

export default Note;
