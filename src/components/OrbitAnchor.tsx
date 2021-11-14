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
			"w-60 h-60 duration-200 ease-in-out inline-block outline-none p-16 rounded-full text-lukepink transition-colors hover:bg-lukepink dark:hover:text-black hover:text-white focus:bg-lukepink dark:focus:text-black focus:text-white pointer-events-auto rotate-counterclockwise-animation",
			className,
		)}
		{...properties}
	/>
);
