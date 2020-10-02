import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";
import { Anchor, AnchorProperties } from "./Anchor";

export const OrbitAnchor: WrapperComponent<"a", AnchorProperties> = ({
	class: className,
	...properties
}) => (
	<Anchor
		class={classnames(
			// eslint-disable-next-line max-len
			"w-60 h-60 duration-200 ease-in-out inline-block outline-none p-16 rounded-full text-red transition-colors hover:bg-red hover:text-black focus:bg-red focus:text-black pointer-events-auto",
			className
		)}
		{...properties}
	/>
);
