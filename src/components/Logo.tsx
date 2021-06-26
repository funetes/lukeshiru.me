import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";

export const Logo: WrapperComponent = ({ class: className, ...properties }) => (
	<div
		class={classnames(
			// eslint-disable-next-line max-len
			"pointer-events-none absolute origin-center left-1/2 top-1/2 w-200 h-200 transform-gpu -translate-y-1/2 -translate-x-1/2 flex rounded-full overflow-hidden text-black dark:text-white",
			className
		)}
		{...properties}
	>
		<svg viewBox="0 0 4 4" class="w-full">
			<circle class="fill-current" cx="2" cy="2" r="2" />
			<path
				class="text-white dark:text-black stroke-current"
				d="M2 1l.865 1.5h-1.73z"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path class="fill-current" d="M2 1l.865 1.5h-1.73z" />
		</svg>
	</div>
);
