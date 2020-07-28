import { arrayMap, objectEntries, Tuple } from "@vangware/utils";
import { h, VNode } from "preact";
import { OrbitAnchor } from "../components/OrbitAnchor";
import { OrbitIcon } from "../components/OrbitIcon";
import { OrbitItem } from "../components/OrbitItem";
import { OrbitItemContent } from "../components/OrbitItemContent";
import links from "../data/links.json";

const linksArray = objectEntries(links).map(([key, value], index, array) => [
	key,
	{ ...value, index, length: array.length }
]) as readonly Tuple<
	string,
	typeof links[keyof typeof links] & {
		readonly index: number;
		readonly length: number;
	}
>[];

export const orbitLinks = arrayMap<typeof linksArray[number], VNode>(
	([title, { href, icon, index, length }]) => {
		const angle = (360 / length) * index - 90;
		const duration = 300;

		return (
			<OrbitItem rotationAngle={angle} rotationDuration={duration}>
				<OrbitItemContent
					rotationAngle={-angle}
					rotationDuration={duration}
				>
					<OrbitAnchor aside {...{ href, title }}>
						<OrbitIcon path={icon} />
					</OrbitAnchor>
				</OrbitItemContent>
			</OrbitItem>
		);
	}
)(linksArray);
