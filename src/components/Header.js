import styled from "styled-components"
import { getProp } from "~/utils"

export const Header = styled.h1`
	font-size: ${getProp('fontSize')};
	font-weight: ${getProp('fontWeight')};
`
