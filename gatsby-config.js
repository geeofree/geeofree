const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://geeofree.vercel.app",
    title: "Geeofree",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Geeofree`,
        short_name: `Geeofree`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#172B4D`,
        display: `standalone`,
        icon: path.join(__dirname, 'src', 'images', 'icon.png'),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: path.join(__dirname, "contents"),
      },
      __key: "contents",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Zilla Slab", "Zilla Slab:bold"],
        },
      },
      __key: "pages",
    },
  ],
};
