import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const OnlyPrint: WrapperComponent = ({
	class: className,
	...properties
}) => <div class={classnames("screen:hidden", className)} {...properties} />;
