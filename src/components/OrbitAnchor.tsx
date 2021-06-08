import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";
import type { AnchorProperties } from "./Anchor";
import { Anchor } from "./Anchor";

export const OrbitAnchor: WrapperComponent<"a", AnchorProperties> = ({
	class: className,
	...properties
}) => (
	<Anchor
		class={classnames(
			// eslint-disable-next-line max-len
			"w-60 h-60 duration-200 ease-in-out inline-block outline-none p-16 rounded-full text-black dark:text-white transition-colors hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black pointer-events-auto rotate-counterclockwise-animation",
			className
		)}
		{...properties}
	/>
);
