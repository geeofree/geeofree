import React from 'react'
import { designTokens } from '~/styling'
import Container from './Container'

function Notify(props) {
	const { children, ...rest } = props

	const container = {
		position: 'fixed',
		top: designTokens.spacing(4),
		left: '50%',
		transform: 'translateX(-50%)',
		bgColor: designTokens.colors.bright.blue,
		padding: designTokens.spacing(3),
		borderRadius: designTokens.spacing(3),
		color: 'white',
		...rest,
	}

	return <Container {...container}>{children}</Container>
}

export default Notify
