/**
 * Clean White spaces on queries
 */
const cleanWhiteSpace = (str: TemplateStringsArray) => str[0].replace(/\s/g, "");

/**
 * CV GraphQL query.
 */
export const QUERY_CV = cleanWhiteSpace`{
	cv {
		header {
			birthday,
			email,
			fullName,
			location,
			name,
			position,
			website
		},
		sidebar {
			list,
			title
		},
		main {
			list {
				dateEnd,
				dateStart,
				place,
				position,
				projects {
					description,
					teamSize,
					technologies,
					title,
					vertical
				}
			},
			title
		}
	}
}`;

/**
 * Links GraphQL query.
 */
export const QUERY_LINKS = cleanWhiteSpace`{
	links {
		title,
		href,
		icon,
		color
	}
}`;
