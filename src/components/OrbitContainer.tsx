import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const OrbitContainer: WrapperComponent<"main"> = ({
	class: className,
	...properties
}) => (
	<main
		class={classnames(
			// eslint-disable-next-line max-len
			"flex flex-wrap items-center justify-between min-h-screen min-w-screen px-8",
			className
		)}
		{...properties}
	/>
);
