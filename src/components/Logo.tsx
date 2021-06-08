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
		<svg class="w-full" viewBox="0 0 8 8">
			<path
				class="fill-current"
				// eslint-disable-next-line max-len
				d="M3.386 1.064A3.002 3.002 0 001 4c0 .322.052.637.15.936L.536 6h1.23a2.997 2.997 0 004.468 0h1.23L6.85 4.936a2.997 2.997 0 00-.73-3.056 3.002 3.002 0 00-1.506-.816L4 0l-.614 1.064zM0 4c0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4-4-1.792-4-4zm4-3l2.598 4.5H1.402L4 1zm0 2l.87 1.5H3.13L4 3z"
				fill-rule="evenodd"
			/>
		</svg>
	</div>
);
