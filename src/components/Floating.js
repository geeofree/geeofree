import styled from "styled-components"
import { getProp } from "~/utils"

export const Floating = styled.div`
	position: absolute;
	top: ${getProp('top')};
	left: ${getProp('left')};
	bottom: ${getProp('bottom')};
	right: ${getProp('right')};
	transform: ${getProp('transform')};
	width: ${getProp('width')};
	height: ${getProp('height')};
`
