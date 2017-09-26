import { GraphQLObjectType, GraphQLString } from "graphql";

/**
 * CV Main data graph.
 * @exports
 */
export const cvMainDataGraph = new GraphQLObjectType({
	description: "CV Main data graph",
	fields: () => ({
		dateEnd: {
			description: "CV Main data date end",
			type: GraphQLString
		},
		dateStart: {
			description: "CV Main data date start",
			type: GraphQLString
		},
		place: {
			description: "CV Main data place",
			type: GraphQLString
		},
		position: {
			description: "CV Main data position",
			type: GraphQLString
		}
	}),
	name: "CVMainDataGraph"
});
