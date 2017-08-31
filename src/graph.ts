import { readFile } from "fs";
import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString
} from "graphql";
import { promisify } from "util";
import { DATA_FILE } from "./settings";

const readFileAsync = promisify(readFile);

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
			resolve: () =>
			readFileAsync(DATA_FILE, { encoding: "utf8" }).then(textFile =>
				JSON.parse(textFile)
			),
			type: new GraphQLList(linkGraph)
		}
	}),
	name: "Links"
});

export const schema = new GraphQLSchema({ query: linkListGraph });
