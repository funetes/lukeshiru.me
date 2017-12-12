import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { cvMainProjectGraph } from "./cv.main.project.graph";

/**
 * CV Main data graph.
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
		},
		projects: {
			description: "CV Main project graph",
			type: new GraphQLList(cvMainProjectGraph)
		}
	}),
	name: "CVMainDataGraph"
});
