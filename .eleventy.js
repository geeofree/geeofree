const path = require('path')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)

  // Passthroughs
	eleventyConfig.addPassthroughCopy({ 'src/css': 'css' })
	eleventyConfig.addPassthroughCopy({ 'src/js': 'js' })
	eleventyConfig.addPassthroughCopy({ 'src/images': 'images' })

  // Collections
  eleventyConfig.addCollection('parents', collection => (
    collection
    .getFilteredByTag('parents')
    .slice()
    .sort((a, b) => a.data.order - b.data.order)
  ))

	return {
		dir: {
			input: path.resolve(__dirname, 'src'),
			output: path.resolve(__dirname, 'dist'),
			includes: 'templates',
		},
	}
}
