import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { HomeLayout } from "../layout"

const Title = styled.h1`
font-size: 2.3rem;
border-bottom: 3px solid;
`

function MdxPage(props) {
  const { data } = props
  return (
    <HomeLayout title={data.mdx.frontmatter.title}>
      <Title>{data.mdx.frontmatter.title}</Title>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </HomeLayout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
    }
    body
  }
}
`

export default MdxPage