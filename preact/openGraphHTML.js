import openGraph from "../src/data/openGraph.json";

export const openGraphHTML = Object.entries(openGraph)
	.map(
		([property, content]) =>
			`<meta property="og:${property}" content="${content}" />`
	)
	.join("");
