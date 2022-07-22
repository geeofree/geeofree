import { useTransition } from 'react-spring'
import create from 'zustand'

const useTransitionConfig = create((setState) => ({
	transition: {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	},

	animateLeft: () => {
		setState(state => ({
			...state,
			transition: {
				...state.transition,
				from: { right: '50%' },
				enter: { right: '0%' },
				leave: { right: '50%' },
			},
		}))
	},

	animateRight: () => {
		setState(state => ({
			...state,
			transition: {
				...state.transition,
				from: { right: '-50%' },
				enter: { right: '0%' },
				leave: { right: '-50%' },
			},
		}))
	}
}))

function useRouteTransition(routePath) {
	const { transition, animateLeft, animateRight } = useTransitionConfig()
	const transitions = useTransition(routePath, transition)
	return { transitions, animateLeft, animateRight }
}

export default useRouteTransition
