import metaTags from "../src/data/metaTags.json";

export const metaTagsHTML = Object.entries(metaTags)
	.map(([name, content]) => `<meta name="${name}" content="${content}" />`)
	.join("");
