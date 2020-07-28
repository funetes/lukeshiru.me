import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const Logo: WrapperComponent = ({ class: className, ...properties }) => (
	<div
		class={classnames(
			// eslint-disable-next-line max-len
			"pointer-events-none absolute origin-center left-1/2 top-1/2 w-200 h-200 transform -translate-y-1/2 -translate-x-1/2",
			className
		)}
		{...properties}
	>
		<svg class="overflow-visible" viewBox="0 0 80 80">
			<path
				style={{
					"--animation-duration": "1s"
				}}
				// eslint-disable-next-line max-len
				class="animation animation-ease-in-out animation-fill-both animation-shrink-rotate origin-center transform"
				fill="#000"
				stroke-width="2"
				stroke="#fff"
				d="M40 3.987l31.173 54.02H8.827z"
			/>
			<path
				style={{
					"--animation-delay": "1s",
					"--animation-duration": "0.5s"
				}}
				fill="#fff"
				// eslint-disable-next-line max-len
				class="animation animation-ease-out animation-fill-both animation-fade-in origin-center transform"
				// eslint-disable-next-line max-len
				d="M49 50.981l-1-1h-1v1h2zm-3-4h3l2 2 1-1-1-1-2.5-1-2.5 1zm-13 0h-2l2 2v-2zm3 3h1v-9h-1v9zm12.5-9H43v-3h13v3l-4 2 4 2v5l-3 4h-8l-1-3 1-3-2 2-2-4 7.5-5zm-21.5 6h-3v-3h4v-2h-1v1l-3-1 1-4h2v1h5v3h-1v2h2v-6h7v16h-3V53h-1v.981h-3v-3l-2 2-2-3-3 4-2-3 3-4zm2-11h4v-2h-2v-6h-2v8zm5 0h5v-8h-2v6h-1v-6h-2v8zm6 0h2v-3l1 1v2h2v-3l-1-1 1-1v-3h-2v2l-1 1v-3h-2v8zm6 0h5v-2h-3v-1h3v-2h-3v-1h3v-2h-5v8z"
			/>
		</svg>
	</div>
);
