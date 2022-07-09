import { Canvas } from '~/utils'
import { designTokens } from '~/styling'

/**
	* @type {import("~/components/Graphics").RendererCallback}
	**/
export function indexGraphics(cnvs) {
	const canvas = Canvas(cnvs)
	if (!canvas) return

	const padding = designTokens.spacing[5]
	const { width, height } = canvas.element.getBoundingClientRect()

	const circleRightCenter = {
		position: {
			x: padding,
			y: height / 2,
		},
		radius: 5,
		fill: designTokens.colors.primary.background,
	}

	const circleTopLeft = {
		position: {
			x: width - padding,
			y: padding,
		},
		radius: 5,
		fill: designTokens.colors.primary.background,
	}

	const circleBottomCenter = {
		position: {
			x: width / 2,
			y: height - padding,
		},
		radius: 5,
		fill: designTokens.colors.primary.background,
	}

	canvas.drawPaths({
		stroke: designTokens.colors.primary.foreground,
		paths: [
			circleRightCenter.position,
			circleTopLeft.position,
			circleBottomCenter.position,
		]
	})

	canvas.drawCircle(circleRightCenter)
	canvas.drawCircle(circleTopLeft)
	canvas.drawCircle(circleBottomCenter)
}
