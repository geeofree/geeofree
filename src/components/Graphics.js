import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { getProp } from '~/utils'

const Canvas = styled.canvas`
	background-color: ${getProp('bgColor')};
	border: ${getProp('border')};
	width: ${getProp('width')};
	height: ${getProp('height')};
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
export function Graphics(props) {
	const { renderer } = props
	const canvas = useRef()

	useLayoutEffect(() => {
		if (canvas.current) {
			renderer(canvas.current)
		}
	}, [])

	return <Canvas {...props} ref={canvas} />
}
