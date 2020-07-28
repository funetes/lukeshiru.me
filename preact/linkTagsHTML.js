import linkTags from "../src/data/linkTags.json";

export const linkTagsHTML = Object.entries(linkTags)
	.map(([rel, items]) =>
		(Array.isArray(items) ? items : [items])
			.map(hrefOrAttributes =>
				typeof hrefOrAttributes === "string"
					? { href: hrefOrAttributes }
					: hrefOrAttributes
			)
			.map(attributes =>
				Object.entries(attributes)
					.map(([attribute, value]) => `${attribute}="${value}"`)
					.join(" ")
			)
			.map(attributes => `<link rel="${rel}" ${attributes} />`)
			.join("")
	)
	.join("");
