import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeMain: WrapperComponent<"main"> = ({
	class: className,
	...properties
}) => (
	<main
		class={classnames("flex w-full items-center mb-8", className)}
		{...properties}
	/>
);
