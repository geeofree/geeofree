import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout } from "~/layout"
import { Container, Header, Text, Span, Graphics } from '~/components'
import { indexGraphics } from '~/graphics'

function IndexPage(props) {
	return (
		<Layout route={props}>
			<Container position="absolute" top="10%" left="10%">
				<Container display="flex" direction="column" justify="center" align="center">
					<StaticImage
						src="../../images/nagara.jpg"
						alt="Nagara From Sonny Boy"
						height={180}
					/>
					<Text fontSize="18px">ジョフリ</Text>
				</Container>
			</Container>

			<Container position="absolute" left="10%" bottom="10%">
				<Text display="flex" direction="column" fontSize="10px" fontWeight="normal">
					<Span>Image:</Span>
					<Span>Nagara, Sonny Boy</Span>
					<Span>Created By Natsume, Shingo</Span>
					<Span>Licensed By Funimation</Span>
				</Text>
			</Container>

			<Container
				position="absolute"
				zIndex="-1"
				top="50%"
				left="50%"
				transform="translate(-50%, -50%)"
				width="90%"
				height="90%"
				>
				<Graphics 
					width="100%"
					height="100%"
					renderer={indexGraphics}
				/>
			</Container>

			<Container position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
				<Text fontSize="12px" fontWeight="normal">
					Press <Span fontWeight="bold">Left</Span> or <Span fontWeight="bold">Right</Span> arrow keys to navigate.
				</Text>
			</Container>

			<Container position="absolute" right="10%" bottom="10%">
				<Header
					display="flex"
					direction="column"
					align="end"
					fontSize="48px"
					fontWeight="normal"
				>
					<Span>GEO</Span>
					<Span>GLGRN.</Span>
				</Header>
			</Container>
		</Layout>
	)
}

export default IndexPage;
