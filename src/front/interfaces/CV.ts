/**
 * CV item interface.
 */
interface CVItem {
	place: string;
	position: string;
	dateStart: string;
	dateEnd?: string;
}

/**
 * CV main item interface.
 */
interface CVMainItem {
	title: string;
	list: CVItem[];
}

/**
 * CV sidebar item interface.
 */
interface CVSidebarItem {
	title: string;
	list: string[];
}

/**
 * CV header interface
 */
interface CVHeader {
	name: string;
	position: string;
	fullName: string;
	location: string;
	birthday: string;
	email: string;
	website: string;
}

/**
 * CV Interface.
 */
export interface CV {
	header?: CVHeader;
	sidebar?: CVSidebarItem[];
	main?: CVMainItem[];
}
