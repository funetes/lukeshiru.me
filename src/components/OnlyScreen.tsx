import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const OnlyScreen: WrapperComponent = ({
	class: className,
	...properties
}) => <div class={classnames("print:hidden", className)} {...properties} />;
