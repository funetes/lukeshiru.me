import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const OnlyPrint: WrapperComponent = ({
	class: className,
	...properties
}) => <div class={classnames("screen:hidden", className)} {...properties} />;
