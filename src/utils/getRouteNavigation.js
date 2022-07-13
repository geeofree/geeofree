import { navigate } from 'gatsby'

const routeMap = {
	"/": {
		prev: null,
		next: "/whoami"
	},
	"/whoami": {
		prev: "/",
		next: null
	}
}

function getRouteNavigation(routePath) {
	const currentRoute = routeMap[routePath]

	const prev = () => currentRoute.prev ? navigate(currentRoute.prev) : null
	const next = () => currentRoute.next ? navigate(currentRoute.next) : null

	return { prev, next, currentRoute, routeMap }
}

export default getRouteNavigation
