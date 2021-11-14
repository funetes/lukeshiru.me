import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export type OrbitItemProperties = {
	readonly rotationAngle?: number;
};

export const OrbitItem: WrapperComponent<"li", OrbitItemProperties> = ({
	class: className,
	rotationAngle = 0,
	...properties
}) => (
	<li
		class={classnames(
			// eslint-disable-next-line max-len
			"block left-1/2 opacity-100 absolute text-right top-1/2 origin-left-center w-180 transform-gpu -translate-y-1/2",
			className,
		)}
		style={{
			["--tw-rotate" as string]: `${rotationAngle}deg`,
		}}
		{...properties}
	/>
);
