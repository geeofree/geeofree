const path = require("path")

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
