import { navigate } from 'gatsby'

const routeMap = {
	"/": {
		prev: "/blogs",
		next: "/whoami"
	},
	"/whoami": {
		prev: "/",
		next: "/projects"
	},
	"/projects": {
		prev: "/whoami",
		next: "/blogs",
	},
	"/blogs": {
		prev: "/projects",
		next: "/",
	}
}

function getRouteNavigation(routePath) {
	const currentRoute = routeMap[routePath]

	const prev = () => currentRoute.prev ? navigate(currentRoute.prev) : null
	const next = () => currentRoute.next ? navigate(currentRoute.next) : null

	return { prev, next, currentRoute, routeMap }
}

export default getRouteNavigation
