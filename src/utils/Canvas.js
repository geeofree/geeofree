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
	* @callback DrawCircleFunc
	*
	* Draw a circle in the canvas, positioning it in 
	* the plane at it's center defined by the *x*
	* and *y* parameters a draws it with a radius *r*.
	* 
	* @param {CircleParams} circleParams
	* @returns {CircleParams} Get provided circle configuration
	**/

/**
	* @typedef {object} PathParams
	* @property {Position[]} paths - An array of positions to draw the path into
	* by its center point.
	* @property {string} [fill=] - The fill color of the circle.
	* @property {string} stroke - The stroke or outline color of the circle.
	* @property {boolean} [isPathsShouldClose=] - Defines whether or not the last path 
	* should be joined with the first path.
	**/

/**
	* @callback DrawPathsFunc
	*
	* Draw paths using a list of position values.
	* 
	* @param {PathParams} circleParams
	* @returns {PathParams} Get provided circle configuration
	**/

/**
	* @typedef {object} CanvasPath
	* @property {Pick<CanvasRenderingContext2D, "beginPath">} start
	* @property {Pick<CanvasRenderingContext2D, "closePath">} stop
	* @property {Pick<CanvasRenderingContext2D, "moveTo">} move
	**/

/**
	* Gets a valid radian value from a degree value.
	* @param {number} degrees
	* @returns {number} The radian value from degrees.
	**/
export const deg = degrees => (Math.PI / 180) * degrees

/**
	* @typedef Canvas
	* @property {HTMLCanvasElement} element
	* @property {DrawCircleFunc} drawCircle
	* @property {DrawPathsFunc} drawPaths
	* @property {CanvasPath} path
	**/

/**
 * Canvas utility library
 * @param {HTMLCanvasElement} canvas - Canvas DOM element
 * @returns {Canvas | undefined}
 */
function Canvas(canvas) {
	if (!canvas.getContext) return
	const ctx = canvas.getContext('2d')
	const element = ctx.canvas

	const { width, height } = element.getBoundingClientRect()

	ctx.canvas.width = width
	ctx.canvas.height = height

	/** @type {DrawCircleFunc} */
	function drawCircle(circleParams) {
		const {
			fill,
			radius,
			stroke,
			position
		} = circleParams

		ctx.beginPath()
		ctx.arc(position.x, position.y, radius, 0, deg(360))

		if (stroke) {
			ctx.strokeStyle = stroke
			ctx.stroke()
		}

		if (fill) {
			ctx.fillStyle = fill
			ctx.fill()
		}
		ctx.closePath()

		return circleParams
	}

	/** @type {DrawPathsFunc} */
	function drawPaths(pathsParams) {
		const { fill, stroke, isPathsShouldClose } = pathsParams
		let { paths } = pathsParams

		const startPath = paths[0]
		paths = paths.slice(1)

		if (isPathsShouldClose) {
			paths = paths.concat(startPath)
		}

		ctx.beginPath()
		ctx.moveTo(startPath.x, startPath.y)

		paths.forEach((path) => {
			ctx.lineTo(path.x, path.y)
			ctx.moveTo(path.x, path.y)
			ctx.strokeStyle = stroke
			ctx.stroke()
			ctx.closePath()
		})

		if (fill) {
			ctx.fillStyle = fill
			ctx.fill()
		}

		return pathsParams
	}

	/** @type {CanvasPath} */
	const path = {
		start() {
			ctx.beginPath()
		},
		stop() {
			ctx.closePath()
		},
		move(x, y) {
			ctx.moveTo(x, y)
		}
	}

	return {
		element,
		drawCircle,
		drawPaths,
		path,
	}
}

export default Canvas
