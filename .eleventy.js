const path = require('path')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const formatDate = require('date-fns/format')
const maxDate = require('date-fns/max')
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItMathjax = require("markdown-it-mathjax3");

const markdownLibrary = markdownIt({
  html: true,
  linkify: true
})

markdownLibrary.use(markdownItAnchor, {
  permalink: true,
  permalinkClass: "direct-link",
  permalinkSymbol: "#"
});

markdownLibrary.use(markdownItMathjax);

module.exports = (eleventyConfig) => {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)

  // Passthroughs
	eleventyConfig.addPassthroughCopy({ 'src/css': 'css' })
	eleventyConfig.addPassthroughCopy({ 'node_modules/simpledotcss/simple.min.css': 'css/simple.min.css' })
	eleventyConfig.addPassthroughCopy({ 'src/js': 'js' })
	eleventyConfig.addPassthroughCopy({ 'src/images': 'images' })

  // Collections
  eleventyConfig.addCollection('parents', collection => (
    collection
    .getFilteredByTag('parents')
    .slice()
    .sort((a, b) => a.data.order - b.data.order)
  ))

  eleventyConfig.addCollection('notes', collection => (
    collection
    .getFilteredByTag('notes')
    .slice()
    .sort((a, b) => {
      if (a.data.title > b.data.title) return 1;
      if (a.data.title < b.data.title) return -1;
      return 0;
    })
    .map(note => {
      const lastUpdatedDate = maxDate(
        collection
          .getFilteredByTag(note.data.tagID)
          .map(noteCollection => noteCollection.date)
      )
      note.lastUpdatedDate = lastUpdatedDate;
      return note;
    })
  ))

  // Shortcodes
  eleventyConfig.addShortcode('isActiveLink', function (url) {
    if (url === this.page.url) return 'active-link'
    if (url !== '/' && this.page.url.includes(url)) return 'active-link'
    return ''
  })

  // Filters
  eleventyConfig.addFilter('formatDate', date => formatDate(date, 'P KK:mma z'))
  eleventyConfig.addFilter('minusOne', num => num - 1)
  eleventyConfig.addFilter('sortSkillsByDescRate', skills =>
    skills
    .map(skill => ({
      ...skill,
      items: skill.items.slice().sort((skillA, skillB) => skillB.rating - skillA.rating)
    }))
    .filter(skill => skill.items.length > 0)
  )

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
