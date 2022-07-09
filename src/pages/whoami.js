import React from 'react'
import { Layout } from '~/layout'
import { Header, Text, Container, Anchor } from '~/components'

function WhoAmI() {
	return (
		<Layout
			display="flex"
			align="center"
			justify="center"
			direction="column"
			padding="16px"
		>
			<Container display="flex" align="center">
				<Header fontSize="48px">WHOAMI</Header>
				<Container direction="column">
					<Text>Geeofree</Text>
					<Text>Software Engineer</Text>
				</Container>
			</Container>

			<Container
				display="grid"
				gridRowGap="16px"
				maxWidth="50%"
				marginTop="16px"
				align="flex-start"
			>
				<Text>
					Hello. I'm a Software Engineer from the Philippines.
					I've been working in the industry since 2017 and I specialize 
					in Web Development.
				</Text>

				<Text>
					I mostly write programs in JS/TS + Bash and use <Anchor href="https://artixlinux.org/">Artix OS </Anchor>{' '}
					with <Anchor href="https://wiki.gentoo.org/wiki/OpenRC">OpenRC</Anchor> and <Anchor href="https://neovim.io/">neovim</Anchor>{' '}
					as my text editor for my development environment.{' '}
					My configs are <Anchor href="https://github.com/geeofree/.dotfiles/tree/master/artix">here</Anchor>{' '}
					and <Anchor href="https://github.com/geeofree/.nvim">here</Anchor> respectively if you're interested.
				</Text>

				<Text>
					The following is an exhaustive list of{' '}
					languages, tools, and technologies that I am familiar with:
				</Text>

				<Container
					display="grid"
					gridColumns="repeat(3, 1fr)"
					gridRowGap="24px"
					gridColumnGap="16px"
					align="flex-start"
				>
					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Languages</Text>
						<Text>HTML</Text>
						<Text>CSS</Text>
						<Text>JavaScript/TypeScript</Text>
						<Text>Lua</Text>
						<Text>Bash</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Frontend Frameworks</Text>
						<Text>React</Text>
						<Text>Gatsby</Text>
						<Text>React Native</Text>
						<Text>Electron</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">State Management</Text>
						<Text>Redux</Text>
						<Text>Zustand</Text>
						<Text>XState</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Styling</Text>
						<Text>SCSS/SASS</Text>
						<Text>CSS Modules</Text>
						<Text>Styled Components</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Build Tools</Text>
						<Text>Webpack</Text>
						<Text>Parcel</Text>
						<Text>Rollup</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Testing</Text>
						<Text>Jest</Text>
						<Text>Playwright (E2E)</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Monorepo Management</Text>
						<Text>Nx</Text>
						<Text>Lerna</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Web Servers</Text>
						<Text>NodeJS/Express</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Database</Text>
						<Text>MySQL</Text>
						<Text>PostgreSQL</Text>
						<Text>SQLite</Text>
						<Text>Redis</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Infrastructure</Text>
						<Text>Docker</Text>
						<Text>Ansible</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Operating Systems</Text>
						<Text>Unix/Linux</Text>
					</Container>

					<Container display="grid" gridRowGap="8px">
						<Text fontWeight="bold">Collaboration</Text>
						<Text>Figma</Text>
						<Text>Excalidraw</Text>
					</Container>
				</Container>
			</Container>
		</Layout>
	)
}

export default WhoAmI
