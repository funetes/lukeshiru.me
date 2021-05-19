import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";
import type { IconProperties } from "./Icon";
import { Icon } from "./Icon";

export const OrbitIcon: WrapperComponent<"svg", IconProperties> = ({
	class: className,
	...properties
}) => (
	<Icon
		class={classnames("h-full w-full pointer-events-none", className)}
		{...properties}
	/>
);
