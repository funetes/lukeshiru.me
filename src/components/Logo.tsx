import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const Logo: WrapperComponent = ({ class: className, ...properties }) => (
	<div
		class={classnames(
			// eslint-disable-next-line max-len
			"pointer-events-none absolute origin-center left-1/2 top-1/2 w-200 h-200 transform-gpu -translate-y-1/2 -translate-x-1/2 flex rounded-full overflow-hidden",
			className
		)}
		{...properties}
	>
		<svg class="w-full" viewBox="0 0 64 64">
			<path fill="#e79" d="m0 0v64h64v-64" />
			<path
				fill="#546"
				// eslint-disable-next-line max-len
				d="m0 64v-1h1v-1h1v-1h1v-1h1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-3h-1v-3h-1v-2h-3v-11h1v-5h-1v-4h-1v-6h1v-3h1v-5h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v-1h1v-1h1v-1h10v1h1v-1h1v2h2v1h2v1h1v1h1v1h1v1h1v2h-1v1h1v2h1v2h1v2h1v13h-1v3h1v11h-3v2h-1v3h-1v3h2v1h2v1h2v1h2v1h2v1h2v1h2v1h2v1h1v1h1v1h1v1h1v1"
			/>
			<path
				fill="#fff"
				// eslint-disable-next-line max-len
				d="m16 42v1h1v-1zM47 42v1h1v-1zM21 54h1v2h1v2h1v1h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h1v-2h1v-2h1v6h-1v1h-1v1h-1v1h-1v1h-14v-1h-1v-1h-1v-1h-1v-1h-1zM23 49h1v-1h1v-1h14v1h1v1h1v3h-1v1h-1v1h-1v1h-1v1h-4v-1h1v-1h1v-1h-6v1h1v1h1v1h-4v-1h-1v-1h-1v-1h-1v-1h-1M25 13h12v1h1v1h1v1h1v1h1v1h1v1h2v1h1v5h1v-1h-2v-1h-8v1h-1v1h-1v1h10v1h1v2h1v-1h1v12h-1v4h-1v2h-1v3h-1v-1h-1v-2h-1v-1h-3v-1h-2v-1h-2v1h-4v-1h-2v1h-2v1h-3v1h-1v2h-1v1h-1v-3h-1v-2h-1v-4h-1v-9h1v-1h1v-1h3v-1h7v-1h-1v-1h-3v-1h-5v1h-1v2h-1v1h-1v-2h1v-3h1v-4h1v-1h1v-1h1v-2h1v-1h1v-1h1zM27 30h-6v1h2v4h3v-4h1zM43 30h-6v1h1v4h3v-4h2zM34 41h-4v1h4zM38 49v-1h-1v1h-11v1h11v-1z"
			/>
		</svg>
	</div>
);
