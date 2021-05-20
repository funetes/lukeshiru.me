import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const OnlyScreen: WrapperComponent = ({
	class: className,
	...properties
}) => (
	<div
		class={classnames("print:hidden h-stretch", className)}
		{...properties}
	/>
);
