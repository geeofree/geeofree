import React from 'react'
import { Layout } from '~/layout'
import { Header, Container } from '~/components'

function Blogs(props) {
	return (
		<Layout
			route={props}
			display="flex"
			align="center"
			justify="center"
			direction="column"
			padding="16px"
		>
			<Container display="flex" align="center">
				<Header fontSize="48px">Blogs</Header>
			</Container>
		</Layout>
	)
}

export default Blogs
