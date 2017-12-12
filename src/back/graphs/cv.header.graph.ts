import { GraphQLObjectType, GraphQLString } from "graphql";

/**
 * CV Header graph.
 */
export const cvHeaderGraph = new GraphQLObjectType({
	description: "CV Header graph",
	fields: () => ({
		birthday: {
			description: "CV Header birthday",
			type: GraphQLString
		},
		email: {
			description: "CV Header EMail",
			type: GraphQLString
		},
		fullName: {
			description: "CV Header full name",
			type: GraphQLString
		},
		location: {
			description: "CV Header location",
			type: GraphQLString
		},
		name: {
			description: "CV Header name",
			type: GraphQLString
		},
		position: {
			description: "CV Header position",
			type: GraphQLString
		},
		website: {
			description: "CV Header website",
			type: GraphQLString
		}
	}),
	name: "CVHeader"
});
