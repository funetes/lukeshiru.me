import {
	arrayMap,
	numberDivide,
	numberMultiply,
	numberSubtract,
	objectEntries,
} from "@vangware/utils";
import type { VNode } from "preact";
import { OrbitAnchor } from "../components/OrbitAnchor";
import { OrbitIcon } from "../components/OrbitIcon";
import { OrbitItem } from "../components/OrbitItem";
import { OrbitItemContent } from "../components/OrbitItemContent";
import links from "../data/links.json";

// eslint-disable-next-line max-params
const linksArray = objectEntries(links).map(([key, value], index, array) => [
	key,
	{ ...value, index, length: array.length },
]) as ReadonlyArray<
	readonly [
		key: string,
		value: typeof links[keyof typeof links] & {
			readonly index: number;
			readonly length: number;
		},
	]
>;

export const orbitLinks = arrayMap<typeof linksArray[number], VNode>(
	([title, { href, icon, index, length }]) => {
		const angle = numberSubtract(90)(
			numberMultiply(index)(numberDivide(length)(360)),
		);

		return (
			<OrbitItem rotationAngle={angle}>
				<OrbitItemContent rotationAngle={-angle}>
					<OrbitAnchor aside {...{ href, title }}>
						<OrbitIcon path={icon} />
					</OrbitAnchor>
				</OrbitItemContent>
			</OrbitItem>
		);
	},
)(linksArray);
