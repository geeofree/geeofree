import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { allCssProps } from '~/styling'

const Canvas = styled.canvas`
	${allCssProps}
`

/**
	* @callback RendererCallback
	* @param {HTMLCanvasElement} canvas
	* @returns {void}
	**/

/**
	* @typedef {object} Props
	* @property {RendererCallback} renderer
	**/

/**
 * Component for rendering canvas graphics
 * @param {Props} props
 * @returns {import('react').ReactElement}
 **/
function Graphics(props) {
	const { renderer } = props
	const canvas = useRef()

	useLayoutEffect(() => {
		if (canvas.current) {
			renderer(canvas.current)
		}
	}, [])

	return <Canvas {...props} ref={canvas} />
}

export default Graphics
