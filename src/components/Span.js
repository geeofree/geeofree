import styled from "styled-components"
import { getProp } from "~/utils"

export const Span = styled.span`
	font-size: ${getProp('fontSize')};
	font-weight: ${getProp('fontWeight')};
`
