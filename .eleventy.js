const path = require('path')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const formatDate = require('date-fns/format')
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

let markdownLibrary = markdownIt({
  html: true,
  linkify: true
}).use(markdownItAnchor, {
  permalink: true,
  permalinkClass: "direct-link",
  permalinkSymbol: "#"
});

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

  // Shortcodes
  eleventyConfig.addShortcode('isActiveLink', function (url) {
    if (url === this.page.url) return 'active-link'
    if (url !== '/' && this.page.url.includes(url)) return 'active-link'
    return ''
  })

  // Filters
  eleventyConfig.addFilter('formatDate', date => formatDate(date, 'P KK:mma z'))

  // Libraries
  eleventyConfig.setLibrary('md', markdownLibrary)

	return {
		dir: {
			input: path.resolve(__dirname, 'src'),
			output: path.resolve(__dirname, 'dist'),
			includes: 'templates',
		},
	}
}
