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

function getRouteNavigation(route) {
	const currentRoute = routeMap[route.location.pathname]

	const prev = () => currentRoute.prev ? navigate(currentRoute.prev) : null
	const next = () => currentRoute.next ? navigate(currentRoute.next) : null

	return { prev, next }
}

export default getRouteNavigation
