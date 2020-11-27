import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeName: WrapperComponent<"h1"> = ({
	class: className,
	...properties
}) => (
	<h1
		class={classnames("font-bold text-6xl leading-tight", className)}
		{...properties}
	/>
);
