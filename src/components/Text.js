import styled from "styled-components"
import { getProp } from "~/utils"

export const Text = styled.p`
	font-size: ${getProp('fontSize')};
	font-weight: ${getProp('fontWeight')};
`
