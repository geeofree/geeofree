export const getProp = (key, defaultValue) => props => (
	defaultValue === undefined ? props[key] : defaultValue
)
