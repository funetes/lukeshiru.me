import { GraphQLList, GraphQLObjectType } from "graphql";
import { cvHeaderGraph } from "./cv.header.graph";
import { cvMainGraph } from "./cv.main.graph";
import { cvSidebarGraph } from "./cv.sidebar.graph";

/**
 * CV graph.
 * @exports
 */
export const cvGraph = new GraphQLObjectType({
	description: "CV graph",
	fields: () => ({
		header: { type: cvHeaderGraph },
		main: { type: new GraphQLList(cvMainGraph) },
		sidebar: { type: new GraphQLList(cvSidebarGraph) }
	}),
	name: "CV"
});
