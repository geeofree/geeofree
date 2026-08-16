const path = require('path')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const formatDate = require('date-fns/format')
const maxDate = require('date-fns/max')
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItClass = require("markdown-it-class");
const markdownItKatex = require("markdown-it-katex");
const markdownItAttrs = require("markdown-it-attrs");

const markdownLibrary = markdownIt({
  html: true,
  linkify: true
})

markdownLibrary.use(markdownItAttrs, {
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: ['id', 'class', /^data-\.+=$/]
});

markdownLibrary.use(markdownItAnchor, {
  permalink: true,
  permalinkClass: "direct-link",
  permalinkSymbol: "#"
});

markdownLibrary.use(markdownItKatex);

markdownLibrary.use(markdownItClass, {
  h1: ["text-3xl font-extrabold text-slate-900 mt-12 mb-6 tracking-tight"],
  h2: ["text-2xl font-bold text-slate-900 mt-10 mb-4 tracking-tight"],
  h3: ["text-xl font-bold text-slate-900 mt-8 mb-4"],
  h4: ["text-lg font-bold text-slate-900 mt-6 mb-2"],
  h5: ["text-base font-bold text-slate-900 mt-4 mb-2"],
  a: ["text-indigo-600 hover:text-indigo-700 underline decoration-indigo-200 underline-offset-4 hover:decoration-indigo-500 transition-all"],
  p: ["text-slate-600 leading-relaxed mb-6"],
  code: ["bg-slate-100 text-pink-600 rounded px-1.5 py-0.5 font-mono text-[0.9em] border border-slate-200/50"],
  table: ["w-full my-8 border-collapse"],
  th: ["text-left p-3 border-b-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold text-sm uppercase tracking-wider"],
  td: ["text-left p-3 border-b border-slate-100 text-slate-600"],
  ul: ["pl-6 list-disc text-slate-600 space-y-2 mb-6"],
  ol: ["pl-6 list-decimal text-slate-600 space-y-2 mb-6"],
  li: ["leading-relaxed"],
  blockquote: ["border-l-4 border-indigo-500 bg-indigo-50/50 py-4 px-6 my-8 text-slate-700 italic rounded-r-lg"],
  img: ["mx-auto rounded-xl shadow-md my-10"],
});

module.exports = (eleventyConfig) => {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)

  // Passthroughs
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
    if (url === this.page.url) return true
    if (url !== '/' && this.page.url.includes(url)) return true
    return false
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
