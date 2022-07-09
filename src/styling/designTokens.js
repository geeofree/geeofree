const colors = {
	primary: {
		background: "#1f1f28",
		foreground: "#dcd7ba"
	},
	normal: {
		black: "#090618",
		red: "#c34043",
		green: "#76946a",
		yellow: "#c0a36e",
		blue: "#7e9cd8",
		magenta: "#957fb8",
		cyan: "#6a9589",
		white: "#c8c093"
	},
	bright: {
		black: "#727169",
		red: "#e82424",
		green: "#98bb6c",
		yellow: "#e6c384",
		blue: "#7fb4ca",
		magenta: "#938aa9",
		cyan: "#7aa89f",
		white: "#dcd7ba"
	}
}

// Powers of two as the spacing scale
const spacing = Array(8).fill(null).map((_, i) => Math.pow(2, i))

const tokens = {
	colors,
	spacing,
}

export default tokens
