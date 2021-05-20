import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const OrbitContainer: WrapperComponent<"main"> = ({
	class: className,
	...properties
}) => (
	<main
		class={classnames(
			// eslint-disable-next-line max-len
			"flex flex-wrap items-center justify-between h-stretch min-w-screen px-8",
			className
		)}
		{...properties}
	/>
);
