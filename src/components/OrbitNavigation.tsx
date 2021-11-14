import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";
import type { IconProperties } from "./Icon";

export const OrbitNavigation: WrapperComponent<"nav", IconProperties> = ({
	class: className,
	...properties
}) => (
	<nav
		class={classnames(
			// eslint-disable-next-line max-len
			"rounded-full left-1/2 pointer-events-none absolute top-1/2 overflow-hidden transform-gpu -translate-x-1/2 -translate-y-1/2 h-screen-min w-screen-min origin-center rotate-0 rotate-clockwise-animation",
			className,
		)}
		{...properties}
	/>
);
