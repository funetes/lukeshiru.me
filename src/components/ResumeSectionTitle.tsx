import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeSectionTitle: WrapperComponent<"h3"> = ({
	class: className,
	...properties
}) => (
	<h3
		class={classnames("text-4xl mb-4 leading-tight small-caps", className)}
		{...properties}
	/>
);
