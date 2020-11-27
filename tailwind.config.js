module.exports = {
	purge: false,
	theme: {
		extend: {
			animation: {
				"fade-in": "fade-in 0.5s ease-out 1s both",
				"shrink-rotate": "shrink-rotate 1s ease-in-out both"
			},
			colors: {
				red: "#F05"
			},
			fontSize: {
				vmin: "1vmin"
			},
			keyframes: {
				"fade-in": {
					from: {
						fill: "transparent"
					}
				},
				"shrink-rotate": {
					from: {
						transform: "rotate(-90deg) scale(10)"
					}
				}
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
	variants: {
		animation: ["motion-safe"]
	}
};
