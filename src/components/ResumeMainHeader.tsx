import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const ResumeMainHeader: WrapperComponent<"hgroup"> = ({
	class: className,
	...properties
}) => <hgroup class={classnames("ml-8", className)} {...properties} />;
