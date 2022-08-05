const path = require('path')

module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({ 'src/css': 'css' })
	eleventyConfig.addPassthroughCopy({ 'src/js': 'js' })
	eleventyConfig.addPassthroughCopy({ 'src/images': 'images' })

  eleventyConfig.addCollection('parents', collection => {
    return collection.getAll().slice().sort((a, b) => a.data.order - b.data.order)
  })

	return {
		dir: {
			input: path.resolve(__dirname, 'src'),
			output: path.resolve(__dirname, 'dist'),
			includes: 'templates',
		},
	}
}
