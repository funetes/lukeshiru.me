import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";
import { Anchor, AnchorProperties } from "./Anchor";

export const OrbitAnchor: WrapperComponent<"a", AnchorProperties> = ({
	class: className,
	...properties
}) => (
	<Anchor
		class={classnames(
			// eslint-disable-next-line max-len
			"w-60 h-60 duration-200 ease-in-out inline-block outline-none p-16 rounded-full text-pink transition-colors hover:bg-pink hover:text-purple focus:bg-pink focus:text-purple pointer-events-auto",
			className
		)}
		{...properties}
	/>
);
