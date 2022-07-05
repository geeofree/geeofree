import styled from "styled-components"
import { getProp } from "~/utils"

export const Flex = styled.div`
	display: flex;
	justify-content: ${getProp('justify')};
	align-items: ${getProp('align')};
	flex-direction: ${getProp('direction')};
`
