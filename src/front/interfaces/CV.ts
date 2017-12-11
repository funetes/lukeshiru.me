/**
 * CV item interface.
 */
interface CVItem {
	readonly place: string;
	readonly position: string;
	readonly dateStart: string;
	readonly dateEnd?: string;
}

/**
 * CV main item interface.
 */
interface CVMainItem {
	readonly title: string;
	readonly list: CVItem[];
}

/**
 * CV sidebar item interface.
 */
interface CVSidebarItem {
	readonly title: string;
	readonly list: string[];
}

/**
 * CV header interface
 */
interface CVHeader {
	readonly name: string;
	readonly position: string;
	readonly fullName: string;
	readonly location: string;
	readonly birthday: string;
	readonly email: string;
	readonly website: string;
}

/**
 * CV Interface.
 */
export interface CV {
	readonly header?: CVHeader;
	readonly sidebar?: CVSidebarItem[];
	readonly main?: CVMainItem[];
}
