import classnames from "classnames";
import { useEffect, useRef } from "preact/hooks";
import type { WrapperComponent } from "../types/WrapperComponent";

export const Logo: WrapperComponent = ({ class: className, ...properties }) => {
	// eslint-disable-next-line no-null/no-null
	const svg = useRef<SVGSVGElement>(null);

	// eslint-disable-next-line functional/no-expression-statement, functional/functional-parameters
	useEffect(() => {
		const follow = ({
			x: pointerX,
			y: pointerY
		}: Readonly<PointerEvent>) => {
			const {
				x: svgX = 0,
				y: svgY = 0,
				width = 0,
				height = 0
			} = svg.current?.getBoundingClientRect() ?? {};

			// eslint-disable-next-line functional/no-expression-statement
			svg.current?.style.setProperty(
				"--x",
				`${pointerX - (svgX + width / 2)}`
			);
			// eslint-disable-next-line functional/no-expression-statement
			svg.current?.style.setProperty(
				"--y",
				`${pointerY - (svgY + height / 2)}`
			);
		};

		// eslint-disable-next-line functional/no-expression-statement
		window.addEventListener("pointermove", follow);

		// eslint-disable-next-line functional/functional-parameters
		return () => {
			// eslint-disable-next-line functional/no-expression-statement
			window.removeEventListener("pointermove", follow);
		};
	});

	return (
		<div
			class={classnames(
				// eslint-disable-next-line max-len
				"pointer-events-none absolute origin-center left-1/2 top-1/2 w-200 h-200 transform-gpu -translate-y-1/2 -translate-x-1/2 flex rounded-full overflow-hidden text-black dark:text-white",
				className
			)}
			{...properties}
		>
			<svg
				aria-label="lukeshiru's avatar"
				class="w-full"
				ref={svg}
				role="img"
				viewBox="0 0 32 32"
			>
				<defs>
					<clipPath id="clip">
						<circle cx="16" cy="16" r="16" />
					</clipPath>
				</defs>
				<g clip-path="url(#clip)">
					<circle
						class="text-black dark:text-white fill-current"
						cx="16"
						cy="16"
						r="16"
					/>
					<g class="ears">
						<path
							fill="#B98"
							// eslint-disable-next-line max-len
							d="M6 9l-1.35 6.07C4.3 16.7 5.35 18 7 18h18c1.66 0 2.7-1.31 2.35-2.93L26 9H6z"
						/>
						<path
							fill="#333"
							d="M5 16a1 1 0 001 1h20a1 1 0 000-2H6a1 1 0 00-1 1z"
						/>
					</g>
					<path
						fill="#FDC"
						// eslint-disable-next-line max-len
						d="M5 0v10c0 4.35 1.42 8.75 3 12s4.18 5.95 6 7c.93.54 3.07.54 4 0 1.82-1.05 4.42-3.75 6-7 1.59-3.25 3-7.65 3-12V0H5z"
					/>
					<g class="face">
						<path
							fill="#ECB"
							// eslint-disable-next-line max-len
							d="M20 23h-8l.4-.4A3.32 3.32 0 0116 22a3.32 3.32 0 013.6.6l.4.4z"
						/>
						<path
							fill="#B98"
							// eslint-disable-next-line max-len
							d="M14.59 18.59l-.24-.24c-.2-.2-.28-.56-.2-.82l.27-.79c.87-2.61 2.29-2.61 3.16 0l.26.79c.09.26 0 .63-.2.82l-.23.24a2 2 0 01-2.82 0z"
						/>
						<path
							fill="#ECB"
							// eslint-disable-next-line max-len
							d="M14.16 17.53l1.52-4.58c.18-.52.46-.52.64 0l1.52 4.58a.6.6 0 01-.29.7l-.66.32c-.49.25-1.3.25-1.78 0l-.66-.33a.6.6 0 01-.3-.7z"
						/>
						<path
							fill="#FCB"
							// eslint-disable-next-line max-len
							d="M9 16h3a1 1 0 010 2H9a1 1 0 010-2zm11 0h3a1 1 0 010 2h-3a1 1 0 010-2z"
						/>
						<path
							fill="#ECB"
							// eslint-disable-next-line max-len
							d="M10 11.99V13a1 1 0 002 0v-1l-2-.01zm10 0V13a1 1 0 002 0v-1l-2-.01z"
						/>
						<path
							fill="#333"
							// eslint-disable-next-line max-len
							d="M10 9.99V10h-.5c-.28 0-.34.16-.15.35L10 11v1a1 1 0 002 0v-2a1 1 0 00-1-1 1 1 0 00-1 .99zm10 0V12a1 1 0 002 0v-1l.65-.65c.2-.2.13-.35-.15-.35H22a1 1 0 00-1-1 1 1 0 00-1 .99zM10 8L6.45 9.78C6.2 9.9 6 9.78 6 9.5v-2c0-.28.2-.6.45-.72l3.1-1.56c.25-.12.65-.12.9 0l3.76 1.89c.99.49.9.89-.21.89h-4zm10-4.5V4l2.53-.84c.26-.09.63 0 .82.2l2.24 2.23c.78.78.54 1.2-.53.92L23 6l-5.53 1.84c-.26.09-.47-.06-.47-.34v-3c0-.28.21-.57.47-.66l2.06-.68c.26-.09.47.06.47.34z"
						/>
					</g>
					<radialGradient
						cx="16"
						cy="0"
						fx="16"
						fy="0"
						gradientUnits="userSpaceOnUse"
						id="gradient"
						r="32"
					>
						<stop offset="0" stop-color="#fff" />
						<stop offset="1" />
					</radialGradient>
					<path
						// eslint-disable-next-line max-len
						d="M5 0v10c0 4.35 1.42 8.75 3 12s4.18 5.95 6 7c.93.54 3.07.54 4 0 1.82-1.05 4.42-3.75 6-7 1.59-3.25 3-7.65 3-12V0H5z"
						fill="url(#gradient)"
						fill-opacity=".25"
						style="mix-blend-mode: color-burn"
					/>
				</g>
			</svg>
		</div>
	);
};
