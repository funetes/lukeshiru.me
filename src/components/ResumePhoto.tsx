import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const ResumePhoto: WrapperComponent<"img"> = ({
	alt = "Profile photo",
	class: className,
	...properties
}) => (
	<img
		class={classnames("rounded-md h-32 w-32", className)}
		height={128}
		width={128}
		{...{ ...properties, alt }}
	/>
);
