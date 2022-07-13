import { useRef, useEffect } from 'react'

function usePrevious(value) {
	const previous = useRef()

	useEffect(() => {
		previous.current = value
	}, [value])

	return previous.current
}

export default usePrevious
