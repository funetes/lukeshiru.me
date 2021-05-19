import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export type OrbitItemContentProperties = {
	readonly rotationAngle?: number;
};

export const OrbitItemContent: WrapperComponent<
	"span",
	OrbitItemContentProperties
> = ({ class: className, rotationAngle = 0, ...properties }) => (
	<span
		class={classnames("inline-block h-full transform-gpu", className)}
		style={{
			["--tw-rotate" as string]: `${rotationAngle}deg`
		}}
		{...properties}
	/>
);
