import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const Logo: WrapperComponent = ({ class: className, ...properties }) => (
	<div
		class={classnames(
			// eslint-disable-next-line max-len
			"pointer-events-none absolute origin-center left-1/2 top-1/2 w-200 h-200 transform-gpu -translate-y-1/2 -translate-x-1/2 flex",
			className
		)}
		{...properties}
	>
		<svg class="w-full" viewBox="0 0 64 64">
			<path
				fill="#333"
				// eslint-disable-next-line max-len
				d="M57.995 49v-1.992H6.005V49h51.99zM44.134 23v2H19.866v-2h24.268zM43 39c0 .835-.513 1.551-1.241 1.851L43 41v2h-6v-2l6-4v2zm-5.732-8L39 28v-2l-6 6v2h6v-2l-1.732-1zM23 34v-2h-6.464v2H23zm-4 3v4c0 1.104-.896 2-2 2h-4v-6h6zm28-3h-6v-2h6v2zm-22-3c0 1.656 1.344 3 3 3s3-1.344 3-3v-2h-6v2zm20 9c0 1.656 1.344 3 3 3s3-1.344 3-3v-2h-6v2zm-16 3h6v-6h-6v6zm-4-3h-2l-2 1v2h2v-1h2v1h2v-2l-2-1z"
			/>
			<path
				fill="#fff"
				// eslint-disable-next-line max-len
				d="M19.866 23L32 1.983 44.134 23H19.866zM58 47H6l1.742-3h48.516L58 47zM23 32h-6.464L20 26h2v4h1v2zm24 0h-6v-6h4v2h1v2h1v2zm-22-3c0 1.656 1.344 3 3 3s3-1.344 3-3v-3h-6v3zm12.268 0L39 32h-6v-6h6l-1.732 3zM45 38c0 1.656 1.344 3 3 3s3-1.344 3-3v-3h-6v3zm-16-3v2h1v2h-1v2h6v-2h-1v-2h1v-2h-6zm-2 0h-2v1h-2v-1h-2v6h2v-1h2v1h2v-6zm14 0c1.104 0 2 .896 2 2 0 .835-.513 1.551-1.241 1.851L43 41h-6v-6h4zm-24 6c1.104 0 2-.896 2-2s-.896-2-2-2h2v-2h-4c-1.104 0-2 .896-2 2s.896 2 2 2h-2v2h4z"
			/>
		</svg>
	</div>
);
