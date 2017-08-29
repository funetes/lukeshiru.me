/**
 * GraphQL Response type.
 * @author Lucas Ciruzzi <hello@lukeshiru.me>
 * @export
 * @interface GraphQLResponse
 * @template DataType
 */
export interface GraphQLResponse<DataType> {
	data: DataType;
}
