const { gatsbyRoute } = require("./src/hooks")

let timeout = null;

exports.onClientEntry = () => {
	gatsbyRoute.setState(state => ({ ...state, initial: true }))
}

exports.onPreRouteUpdate = () => {
	const { delay } = gatsbyRoute.getState()
	if (timeout) clearTimeout(timeout)
	timeout = setTimeout(() => {
		gatsbyRoute.setState(state => ({ ...state, initial: false, updating: true }))
	}, delay)
}

exports.onRouteUpdate = () => {
	clearTimeout(timeout)
	gatsbyRoute.setState(state => ({ ...state, initial: false, updating: false }))
}
