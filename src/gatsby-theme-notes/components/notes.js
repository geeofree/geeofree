import React from "react";
import FileList from "gatsby-theme-notes/src/components/file-list";
import Breadcrumbs from "gatsby-theme-notes/src/components/breadcrumbs";
import styled from "styled-components";
import { Folder } from "react-feather";
import { Link } from "gatsby";
import { HomeLayout } from "../../layout";

const FolderLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const FolderItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  &:hover {
    background-color: #f7f7f7;
  }

  & > p {
    margin-top: 0;
    margin-left: 0.5rem;
  }
`;

function FolderItem(props) {
  const { children } = props;
  return (
    <FolderItemContainer>
      <Folder />
      <p>{children}</p>
    </FolderItemContainer>
  );
}

function Folders(props) {
  const { directories } = props;

  if (!directories) {
    return null;
  }

  return Object.entries(directories).map((directory) => {
    const [dirName, paths] = directory;
    const [path] = paths;

    return (
      <FolderLink to={path.pagePath}>
        <FolderItem>{dirName}</FolderItem>
      </FolderLink>
    );
  });
}

function Notes(props) {
  const { directories, files, breadcrumbs = [] } = props;

  return (
    <HomeLayout title="Notes">
      {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
      <Folders directories={directories} />
      {breadcrumbs.length ? <FileList files={files} /> : null}
    </HomeLayout>
  );
}

export default Notes;
