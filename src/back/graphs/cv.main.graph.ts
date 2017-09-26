import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { cvMainDataGraph } from "./cv.main.data.graph";

/**
 * CV Main graph.
 * @exports
 */
export const cvMainGraph = new GraphQLObjectType({
	description: "CV Main graph",
	fields: () => ({
		list: { type: new GraphQLList(cvMainDataGraph) },
		title: {
			description: "CV Main title",
			type: GraphQLString
		}
	}),
	name: "CVMain"
});
