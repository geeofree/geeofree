/**
  * Get radian value from degrees
  * @param {number} degrees
  * @returns {number} Radian value
  **/
const getRadiansFromDegrees = degrees => (Math.PI / 180) * degrees

/**
  * @typedef DrawCircleOptions
  * @property {number} x
  * @property {number} y
  * @property {number} radius
  * @property {string} fillColor
  * @property {string} strokeColor
  **/

/** 
  * @callback DrawCircleFn
  * @param {DrawCircleOptions} options
  * @returns {void}
  **/

/**
  * @typedef Line
  * @property {number} x
  * @property {number} y
  * @property {string} strokeColor
  **/

/**
  * @typedef DrawLinesOptions
  * @property {string} strokeColor
  * @property {Line[]} lines
  **/

/** 
  * @callback DrawLinesFn
  * @param {DrawLinesOptions} options
  * @returns {void}
  **/

/**
  * @typedef {Object} CanvasHelperObject
  * @property {DOMRect} dimensions
  * @property {DrawCircleFn} drawCircle
  * @property {DrawLinesFn} drawLines
  **/

/**
  * Canvas helper function
  * @param {HTMLCanvasElement} canvas
  * @returns {CanvasHelperObject}
  **/
function getCanvas(canvas) {
  if (!canvas.getContext) return null

  const ctx = canvas.getContext('2d')
  const dimensions = canvas.getBoundingClientRect()

  ctx.canvas.width = dimensions.width
  ctx.canvas.height = dimensions.height

  /** @type DrawCircleFn */
  function drawCircle(options) {
    const { x, y, radius, fillColor, strokeColor } = options
    
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, getRadiansFromDegrees(360))

    if (fillColor) {
      ctx.fillStyle = fillColor
      ctx.fill()
    }

    if (strokeColor) {
      ctx.strokeStyle = strokeColor
      ctx.stroke()
    }

    ctx.closePath()
  }

  /** @type DrawLinesFn */
  function drawLines(options) {
    const { strokeColor, lines } = options
    ctx.beginPath()

    lines.forEach((line, index) => {
      if (index === 0) {
        return ctx.moveTo(line.x, line.y)
      }

      ctx.lineTo(line.x, line.y)
    })

    if (strokeColor) {
      ctx.strokeStyle = strokeColor
    }

    ctx.stroke()
  }

  return { drawCircle, drawLines, dimensions }
}

function drawGraphics() {
  /** @type HTMLCanvasElement */
  const canvasElement = document.querySelector('canvas.home-graphic')
  const canvas = getCanvas(canvasElement)

  const radius = 5
  const color = '#1f1f28'

  canvas.drawLines({
    strokeColor: color,
    lines: [
      {
        x: radius,
        y: (canvas.dimensions.height / 2),
        radius,
      },
      {
        x: canvas.dimensions.width - radius,
        y: radius,
        radius,
      },
      {
        x: (canvas.dimensions.width / 2),
        y: canvas.dimensions.height - radius,
        radius,
      }
    ]
  })

  canvas.drawCircle({
    x: radius,
    y: (canvas.dimensions.height / 2),
    radius,
    fillColor: color
  })
  
  canvas.drawCircle({
    x: canvas.dimensions.width - radius,
    y: radius,
    radius,
    fillColor: color
  })

  canvas.drawCircle({
    x: (canvas.dimensions.width / 2),
    y: canvas.dimensions.height - radius,
    radius,
    fillColor: color
  })
}

drawGraphics()
