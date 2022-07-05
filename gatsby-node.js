const path = require("path")

function replaceWithDash(string) {
  return string.replace(/( |\.|_)/g, "-")
}

function isParentPath(child, parent) {
  const paths = child.split("/")
  const nextToLastIndex = paths.length - 2
  const nextToLastItem = paths[nextToLastIndex >= 0 ? nextToLastIndex : 0]
  return nextToLastItem === parent
}

async function createPages({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDirectory(sort: {fields: relativePath}) {
        nodes {
          name
          id
          relativeDirectory
          relativePath
        }
      }
      allMdx(sort: {fields: slug}) {
        nodes {
          slug
          id
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const notes = data.allDirectory.nodes.filter(directory => directory.relativePath.includes("notes"))
  const markdowns = data.allMdx.nodes.map(md => ({
    ...md,
    linkPath: `/${replaceWithDash(md.slug).toLowerCase()}`
  }))

  notes.forEach(note => {
    const noteName = replaceWithDash(note.name).toLowerCase()
    const notePath = replaceWithDash(note.relativePath).toLowerCase()
    const directories = notes
      .filter(nt => nt.relativeDirectory === note.relativePath)
      .map(nt => ({
        ...nt,
        linkPath: `/${replaceWithDash(nt.relativePath).toLowerCase()}`
      }))
    const noteResults = markdowns.filter(md => isParentPath(md.linkPath, noteName))

    actions.createPage({
      path: notePath,
      component: path.join(__dirname, 'src', 'templates', 'NotesTemplate.js'),
      context: { directories, notes: noteResults }
    })
  })
}

exports.createPages = createPages

function createWebpackConfig({ actions }) {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "src")
			}
		}
	})
}

exports.onCreateWebpackConfig = createWebpackConfig
