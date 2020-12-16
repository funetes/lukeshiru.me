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
		<svg class="w-full" viewBox="-17 -4 80 24">
			<g fill="#f05">
				<path
					// eslint-disable-next-line max-len
					d="M63 3v10c0 3.863-3.137 7-7 7h-66c-3.863 0-7-3.137-7-7V3c0-3.863 3.137-7 7-7h66c3.863 0 7 3.137 7 7zm-2 0v10c0 2.76-2.24 5-5 5h-66c-2.76 0-5-2.24-5-5V3c0-2.76 2.24-5 5-5h66c2.76 0 5 2.24 5 5zM32.874 2H35a1 1 0 010 2h-1v2h1a1 1 0 010 2h-1v1c0 .177-.009.351-.02.526A3.995 3.995 0 0136 13a1 1 0 01-2 0c0-.594-.26-1.129-.687-1.48A4.985 4.985 0 0129 14a1 1 0 010-2c1.656 0 3-1.344 3-3V8h-3a1 1 0 010-2h3V4h-.355c-.706.622-1.632 1-2.645 1a1 1 0 010-2 2 2 0 002-2 1 1 0 012 0c0 .345-.044.68-.126 1zM40 11V4h1v7h-1zm1 2h-1a1 1 0 01-2 0V3a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-2 0zM52.268 4l-6.294 3.634a1 1 0 001 1.732L49.34 8H53a2 2 0 010 4h-4a1 1 0 012 0h2a3.001 3.001 0 00-6 0 2 2 0 002 2h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-.196l3.691-2.131A.999.999 0 0057 3a.875.875 0 00-.037-.258A.995.995 0 0056 2h-8a1 1 0 000 2h4.268z"
					fill-rule="evenodd"
				/>
				<path
					// eslint-disable-next-line max-len
					d="M25 2h-6a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 000-2h-5V8h5a1 1 0 000-2h-5V4h5a1 1 0 000-2zM8 13V3a1 1 0 012 0v3h2a2 2 0 002-2V3a1 1 0 012 0v1c0 1.656-1.326 3.221-2.959 3.493L10 8V6l3.041.507C14.674 6.779 16 8.344 16 10v3a1 1 0 01-2 0v-3a2 2 0 00-2-2h-2v5a1 1 0 01-2 0zM6 3v8c0 1.656-1.344 3-3 3H1c-1.656 0-3-1.344-3-3V3a1 1 0 012 0v8a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 012 0zM-4 12h-5V3a1 1 0 00-2 0v10a1 1 0 001 1h6a1 1 0 000-2z"
				/>
			</g>
		</svg>
	</div>
);
