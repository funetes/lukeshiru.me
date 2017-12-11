/**
 * GraphQL Response type.
 */
export interface GraphQLResponse<DataType> {
	readonly data: DataType;
}
