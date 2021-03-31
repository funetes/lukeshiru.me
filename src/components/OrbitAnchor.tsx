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
			"w-60 h-60 duration-200 ease-in-out inline-block outline-none p-16 rounded-full text-white transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black pointer-events-auto",
			className
		)}
		{...properties}
	/>
);
