import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

/**
 * CV Main project graph.
 */
export const cvMainProjectGraph = new GraphQLObjectType({
	description: "CV Main project graph",
	fields: () => ({
		description: {
			description: "CV Main project description",
			type: GraphQLString
		},
		teamSize: {
			description: "CV Main project team size",
			type: GraphQLInt
		},
		technologies: {
			description: "CV Main project technologies",
			type: new GraphQLList(GraphQLString)
		},
		title: {
			description: "CV Main project title",
			type: GraphQLString
		},
		vertical: {
			description: "CV Main project vertical",
			type: GraphQLString
		},
		weeks: {
			description: "CV Main project duration in weeks",
			type: GraphQLInt
		}
	}),
	name: "CVMainProjectGraph"
});
