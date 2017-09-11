import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString
} from "graphql";

/**
 * Content of data.json file.
 */
const data = require("../../data.json");

const linkGraph = new GraphQLObjectType({
	fields: () => ({
		color: {
			description: "Icon color",
			type: new GraphQLNonNull(GraphQLString)
		},
		href: {
			description: "Location of the link",
			type: new GraphQLNonNull(GraphQLString)
		},
		icon: {
			description: "Icon name of the link",
			type: new GraphQLNonNull(GraphQLString)
		},
		title: {
			description: "Title of the link",
			type: new GraphQLNonNull(GraphQLString)
		}
	}),
	name: "Link"
});
const linkListGraph = new GraphQLObjectType({
	fields: () => ({
		links: {
			resolve: () => data,
			type: new GraphQLList(linkGraph)
		}
	}),
	name: "Links"
});

export const schema = new GraphQLSchema({ query: linkListGraph });
