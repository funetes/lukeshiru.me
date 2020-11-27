import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumePhoto: WrapperComponent<"img"> = ({
	alt = "Profile photo",
	class: className,
	...properties
}) => (
	<img
		class={classnames("rounded-md h-32 w-32", className)}
		{...{ ...properties, alt }}
	/>
);
