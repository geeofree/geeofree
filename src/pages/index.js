import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components"

import { Layout } from "~/layout"

const getProp = (key, defaultValue) => props => (
	defaultValue === undefined ? props[key] : defaultValue
)

const Floating = styled.div`
	position: absolute;
	top: ${getProp('top')};
	left: ${getProp('left')};
	bottom: ${getProp('bottom')};
	right: ${getProp('right')};
	transform: ${getProp('transform')};
	width: ${getProp('width')};
	height: ${getProp('height')};
`

const Flex = styled.div`
	display: flex;
	justify-content: ${getProp('justify')};
	align-items: ${getProp('align')};
	flex-direction: ${getProp('direction')};
`

const Span = styled.span`
	font-size: ${getProp('fontSize')};
	font-weight: ${getProp('fontWeight')};
`

const Header = styled.h1`
	font-size: ${getProp('fontSize')};
	font-weight: ${getProp('fontWeight')};
`

const Text = styled.p`
	font-size: ${getProp('fontSize')};
	font-weight: ${getProp('fontWeight')};
`

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

		<Floating right="10%" bottom="10%">
			<Header fontSize="48px" fontWeight="normal">
				<Flex direction="column" align="end">
					<span>GEO</span>
					<span>GLGRN.</span>
				</Flex>
			</Header>
		</Floating>

		<Floating top="50%" left="50%" transform="translate(-50%, -50%)">
			<Text fontSize="12px" fontWeight="normal">
				Press <Span fontWeight="bold">Left</Span> or <Span fontWeight="bold">Right</Span> arrow keys to navigate.
			</Text>
		</Floating>
	</Layout>
)

export default IndexPage;
