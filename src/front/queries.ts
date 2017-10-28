/**
 * CV GraphQL query.
 */
export const QUERY_CV = `{
	cv {
		header {
			birthday,
			email,
			fullname,
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
				position
			},
			title
		}
	}
}`;

/**
 * Links GraphQL query.
 */
export const QUERY_LINKS = `{
	links {
		title,
		href,
		icon,
		color
	}
}`;
