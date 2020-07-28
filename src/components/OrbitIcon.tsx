import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";
import { Icon, IconProperties } from "./Icon";

export const OrbitIcon: WrapperComponent<"svg", IconProperties> = ({
	class: className,
	...properties
}) => (
	<Icon
		class={classnames("h-full w-full pointer-events-none", className)}
		{...properties}
	/>
);
