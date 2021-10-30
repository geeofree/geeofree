import React from "react"
import { Link } from "gatsby"
import { Folder, FileText } from "react-feather"
import styled from "styled-components"
import { HomeLayout } from "../layout"

const List = styled.ul`
list-style: none;
padding: 0;

& > li {
  font-size: 1rem;
}
`

const Container = styled.div`
display: flex;
align-items: center;

& > svg {
  margin-right: 0.5rem;
}
`

function LinkItem(props) {
  const { children, linkPath, ...listItem } = props

  return (
    <li {...listItem}>
      <Link to={linkPath}>
        <Container>{children}</Container>
      </Link>
    </li>
  )
}

function NotesTemplate(props) {
  const { pageContext } = props
  console.log(pageContext)

  const directories = pageContext.directories.map(directory => (
    <LinkItem key={directory.id} linkPath={directory.linkPath}>
      <Folder />
      {directory.name}
    </LinkItem>
  ))

  const notes = pageContext.notes.map(note => (
    <LinkItem key={note.id} linkPath={note.linkPath}>
      <FileText />
      {note.frontmatter.title}
    </LinkItem>
  ))

  return (
    <HomeLayout title="Notes">
      <h1>Notes</h1>
      <List>{directories}</List>
      <List>{notes}</List>
    </HomeLayout>
  )
}

export default NotesTemplate