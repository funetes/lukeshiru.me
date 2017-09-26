import {
	GraphQLSchema
} from "graphql";
import { rootGraph } from "./graphs/root.graph";

export const schema = new GraphQLSchema({
	query: rootGraph
});
