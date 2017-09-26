import { GraphQLObjectType, GraphQLString } from "graphql";

/**
 * Links Graph.
 * @exports
 */
export const linkGraph = new GraphQLObjectType({
	description: "Link graph",
	fields: () => ({
		color: {
			description: "Link color",
			type: GraphQLString
		},
		href: {
			description: "Link href",
			type: GraphQLString
		},
		icon: {
			description: "Link icon",
			type: GraphQLString
		},
		title: {
			description: "Link title",
			type: GraphQLString
		}
	}),
	name: "Link"
});
