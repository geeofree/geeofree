import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout } from "~/layout"
import { Floating, Flex, Header, Text, Span, Graphics } from '~/components'
import { indexGraphics } from '~/graphics'

const IndexPage = () => (
	<Layout>
		<Floating top="10%" left="10%">
			<Flex direction="column" justify="center" align="center">
				<StaticImage
					src="../../images/nagara.jpg"
					alt="Nagara From Sonny Boy"
					height={180}
				/>
				<Text fontSize="18px">ジョフリ</Text>
			</Flex>
		</Floating>

		<Floating left="10%" bottom="10%">
			<Text fontSize="10px" fontWeight="normal">
				<Flex direction="column">
					<span>Image:</span>
					<span>Nagara, Sonny Boy</span>
					<span>Created By Natsume, Shingo</span>
					<span>Licensed By Funimation</span>
				</Flex>
			</Text>
		</Floating>

		<Floating
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
		</Floating>

		<Floating top="50%" left="50%" transform="translate(-50%, -50%)">
			<Text fontSize="12px" fontWeight="normal">
				Press <Span fontWeight="bold">Left</Span> or <Span fontWeight="bold">Right</Span> arrow keys to navigate.
			</Text>
		</Floating>

		<Floating right="10%" bottom="10%">
			<Header fontSize="48px" fontWeight="normal">
				<Flex direction="column" align="end">
					<span>GEO</span>
					<span>GLGRN.</span>
				</Flex>
			</Header>
		</Floating>
	</Layout>
)

export default IndexPage;
