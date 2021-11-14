import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const ResumeWorkPositionTitle: WrapperComponent<"h4"> = ({
	class: className,
	...properties
}) => (
	<h4
		class={classnames(
			// eslint-disable-next-line max-len
			"text-xl py-2 flex items-center justify-between border-b mb-4 border-black",
			className,
		)}
		{...properties}
	/>
);
