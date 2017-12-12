import {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString
} from "graphql";

/**
 * CV Sidebar Graph.
 */
export const cvSidebarGraph = new GraphQLObjectType({
	description: "CV Sidebar graph",
	fields: () => ({
		list: {
			description: "CV Sidebar list",
			type: new GraphQLList(GraphQLString)
		},
		title: {
			description: "CV Sidebar title",
			type: GraphQLString
		}
	}),
	name: "CVSidebar"
});
