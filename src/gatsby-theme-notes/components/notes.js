import React from "react";
import DirectoryList from "gatsby-theme-notes/src/components/directory-list";
import FileList from "gatsby-theme-notes/src/components/file-list";
import Breadcrumbs from "gatsby-theme-notes/src/components/breadcrumbs";
import { HomeLayout } from "../../layout";

function Notes(props) {
  const { directories, files, breadcrumbs = [] } = props;

  return (
    <HomeLayout title="Notes">
      {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
      <DirectoryList directories={directories} />
      {breadcrumbs.length ? <FileList files={files} /> : null}
    </HomeLayout>
  );
}

export default Notes;
