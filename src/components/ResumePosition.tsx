import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const ResumePosition: WrapperComponent<"h2"> = ({
	class: className,
	...properties
}) => (
	<h2
		class={classnames("text-3xl leading-none", className)}
		{...properties}
	/>
);
