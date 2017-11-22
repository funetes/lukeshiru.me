import { CV } from "./CV";
import { Link } from "./Link";

/**
 * App state interface.
 */
export interface AppState {
	links: Link[];
	cv: CV;
	inverted: boolean;
}
