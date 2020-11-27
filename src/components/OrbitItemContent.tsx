import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export type OrbitItemContentProperties = {
	readonly rotationAngle?: number;
	readonly rotationDuration?: number;
};

export const OrbitItemContent: WrapperComponent<
	"span",
	OrbitItemContentProperties
> = ({
	class: className,
	rotationAngle = 0,
	rotationDuration = 0,
	...properties
}) => (
	<span
		class={classnames(
			// eslint-disable-next-line max-len
			"inline-block h-full transform animation animation-rotating animation-infinite animation-linear animation-reverse",
			className
		)}
		style={{
			["--animation-duration" as string]: `${rotationDuration}s`,
			["--transform-rotate" as string]: `${rotationAngle}deg`
		}}
		{...properties}
	/>
);
