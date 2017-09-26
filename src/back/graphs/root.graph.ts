import { GraphQLList, GraphQLObjectType } from "graphql";
import { cvGraph } from "./cv.graph";
import { linkGraph } from "./link.graph";

/**
 * Data from JSON file.
 */
const data = require("../../../data.json");

/**
 * Root graph.
 * @exports
 */
export const rootGraph = new GraphQLObjectType({
	description: "Root graph",
	fields: () => ({
		cv: {
			resolve: () => data.cv,
			type: cvGraph
		},
		links: {
			resolve: () => data.links,
			type: new GraphQLList(linkGraph)
		}
	}),
	name: "Root"
});
