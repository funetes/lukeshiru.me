import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export type IconProperties = {
	readonly path?: string;
	readonly size?: number;
};

export const Icon: WrapperComponent<"svg", IconProperties> = ({
	class: className,
	path,
	size = 24,
	...properties
}) => (
	<svg
		class={classnames("fill-current", className)}
		viewBox={`0 0 ${size} ${size}`}
		{...properties}
	>
		<path d={path} />
	</svg>
);
