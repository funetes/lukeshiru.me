import { Link } from "./Link";

/**
 * App state interface.
 * @author Lucas Ciruzzi <hello@lukeshiru.me>
 * @export
 * @interface AppState
 */
export interface AppState {
	links?: Link[];
	cv?: {}; // TODO: Add interface for CV data.
	inverted?: boolean;
}
