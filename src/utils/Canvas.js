/**
	* @typedef {object} Position
	* @property {number} x - X Position in some coordinate
	* @property {number} y - Y Position in some coordinate
	**/

/**
	* @typedef {object} CircleParams
	* @property {Position} position - The position of the circle in the canvas
	* by its center point.
	* @property {number} radius - The radius of the circle.
	* @property {string} fill - The fill color of the circle.
	* @property {string} stroke - The stroke or outline color of the circle.
	**/

/**
	* @callback DrawCircleFunction
	*
	* Draw a circle in the canvas, positioning it in 
	* the plane at it's center defined by the *x*
	* and *y* parameters a draws it with a radius *r*.
	* 
	* @param {CircleParams} circleParams
	**/

/**
	* @typedef Canvas
	* @property {HTMLCanvasElement} element
	* @property {DrawCircleFunction} drawCircle
	**/

/**
	* Gets a valid radian value from a degree value.
	* @param {number} degrees
	* @returns {number} The radian value from degrees.
	**/
export const deg = degrees => (Math.PI / 180) * degrees

/**
 * Canvas utility library
 * @param {HTMLCanvasElement} canvas - Canvas DOM element
 * @returns {Canvas | undefined}
 */
export function Canvas(canvas) {
	if (!canvas.getContext) return
	const ctx = canvas.getContext('2d')
	const element = ctx.canvas

	const { width, height } = element.getBoundingClientRect()

	ctx.canvas.width = width
	ctx.canvas.height = height

	/** @type {DrawCircleFunction} */
	function drawCircle(circleParams) {
		const {
			fill,
			radius,
			stroke,
			position
		} = circleParams

		ctx.arc(position.x, position.y, radius, 0, deg(360))

		if (stroke) {
			ctx.strokeStyle = stroke
		}

		if (fill) {
			ctx.fillStyle = fill
			ctx.fill()
		}
	}

	return {
		element,
		drawCircle
	}
}
