import { Canvas } from '~/utils'

/**
	* @type {import("~/components/Graphics").RendererCallback}
	**/
export function graphicsIndex(cnvs) {
	const canvas = Canvas(cnvs)
	if (!canvas) return

	const padding = 36
	const { width } = canvas.element.getBoundingClientRect()

	const x = width - 36
	const y = padding

	canvas.drawCircle({
		position: { x, y },
		radius: 5,
		fill: "red"
	})
}
