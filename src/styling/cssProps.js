import { css } from 'styled-components'

export function setCssProp(cssPropName, reactPropName) {
	return props => {
		if (reactPropName in props === false) return null
		return `${cssPropName}: ${props[reactPropName]};`
	}
}

export function adhocCssProp(props) {
	const cssProp = props.css
	if (!cssProp) return null 
	return css`${cssProp}`
}

export const textCssProps = css`
	${setCssProp('font-size', 'fontSize')}
	${setCssProp('font-weight', 'fontWeight')}
	${setCssProp('text-align', 'textAlign')}
`

export const colorCssProps = css`
	${setCssProp('color', 'color')}
	${setCssProp('background-color', 'bgColor')}
	${setCssProp('border', 'border')}
	${setCssProp('border', 'border')}
`

export const borderCssProps = css`
	${setCssProp('border', 'border')}
	${setCssProp('border-radius', 'borderRadius')}
	${setCssProp('outline', 'outline')}
`

export const spacingCssProps = css`
	${setCssProp('margin', 'margin')}
	${setCssProp('margin-left', 'marginLeft')}
	${setCssProp('margin-top', 'marginTop')}
	${setCssProp('margin-right', 'marginRight')}
	${setCssProp('margin-bottom', 'marginBottom')}

	${setCssProp('padding', 'padding')}
	${setCssProp('padding-left', 'paddingLeft')}
	${setCssProp('padding-top', 'paddingTop')}
	${setCssProp('padding-right', 'paddingRight')}
	${setCssProp('padding-bottom', 'paddingBottom')}
`

export const dimensionCssProps = css`
	${setCssProp('width', 'width')}
	${setCssProp('height', 'height')}
	${setCssProp('max-width', 'maxWidth')}
	${setCssProp('min-height', 'minHeight')}
`

export const layoutCssProps = css`
	${setCssProp('display', 'display')}
	${setCssProp('z-index', 'zIndex')}
	${setCssProp('visibility', 'visibility')}
	${setCssProp('opacity', 'opacity')}

	${setCssProp('position', 'position')}
	${setCssProp('transform', 'transform')}
	${setCssProp('top', 'top')}
	${setCssProp('bottom', 'bottom')}
	${setCssProp('left', 'left')}
	${setCssProp('right', 'right')}

	${setCssProp('justify-content', 'justify')}
	${setCssProp('align-items', 'align')}
	${setCssProp('flex-direction', 'direction')}

	${setCssProp('grid-template-columns', 'gridColumns')}
	${setCssProp('grid-template-rows', 'gridRows')}
	${setCssProp('gap', 'gridGap')}
	${setCssProp('row-gap', 'gridRowGap')}
	${setCssProp('column-gap', 'gridColumnGap')}
`

const transitionCssProps = css`
	${setCssProp('transition-duration', 'transitionDuration')}
`

export const allCssProps = css`
	${textCssProps}
	${colorCssProps}
	${borderCssProps}
	${spacingCssProps}
	${dimensionCssProps}
	${layoutCssProps}
	${transitionCssProps}
	${adhocCssProp}
`
