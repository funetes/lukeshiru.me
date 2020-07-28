import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeMainHeader: WrapperComponent<"hgroup"> = ({
	class: className,
	...properties
}) => <hgroup class={classnames("ml-8", className)} {...properties} />;
