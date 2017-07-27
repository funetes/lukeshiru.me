import { readFile } from "fs";
import { promisify } from "util";
import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString
} from "graphql";
import { DATA_FILE } from "./settings";

const readFileAsync = promisify(readFile);

const linkGraph = new GraphQLObjectType({
	name: "Link",
	fields: () => ({
		title: {
			description: "Title of the link",
			type: new GraphQLNonNull(GraphQLString)
		},
		href: {
			description: "Location of the link",
			type: new GraphQLNonNull(GraphQLString)
		},
		icon: {
			description: "Icon name of the link",
			type: new GraphQLNonNull(GraphQLString)
		}
	})
});
const linkListGraph = new GraphQLObjectType({
	name: "Links",
	fields: () => ({
		links: {
			type: new GraphQLList(linkGraph),
			resolve: () =>
				readFileAsync(DATA_FILE, { encoding: "utf8" }).then(textFile =>
					JSON.parse(textFile)
				)
		}
	})
});

export const schema = new GraphQLSchema({ query: linkListGraph });
