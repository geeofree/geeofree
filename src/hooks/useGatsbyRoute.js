import { useStore } from 'zustand'
import create from 'zustand/vanilla'

export const gatsbyRoute = create(set => ({
	initial: true,
	updating: false,
	delay: 300,
	set,
}))

function useGatsbyRoute() {
	const store = useStore(gatsbyRoute)
	return store
}

export default useGatsbyRoute
