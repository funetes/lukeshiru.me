module.exports = {
	purge: false,
	theme: {
		extend: {
			fontSize: {
				vmin: "1vmin"
			},
			screens: {
				print: { raw: "print" },
				screen: { raw: "screen" }
			},
			spacing: {
				180: "45rem",
				200: "50rem",
				60: "15rem",
				"9/20": "45%",
				"screen-min": "100vmin"
			},
			transformOrigin: {
				"left-center": "left center"
			}
		},
		inset: {
			0: 0,
			"1/2": "50%",
			auto: "auto"
		}
	},
	variants: {}
};
