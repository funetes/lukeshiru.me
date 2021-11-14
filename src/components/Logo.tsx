import classnames from "classnames";
import { useEffect, useRef } from "preact/hooks";
import type { WrapperComponent } from "../types/WrapperComponent";

export const Logo: WrapperComponent = ({ class: className, ...properties }) => {
	// eslint-disable-next-line no-null/no-null
	const svg = useRef<SVGSVGElement>(null);

	// eslint-disable-next-line functional/no-return-void
	const follow = ({ x: pointerX, y: pointerY }: Readonly<PointerEvent>) => {
		const {
			x: svgX = 0,
			y: svgY = 0,
			width = 0,
			height = 0,
		} = svg.current?.getBoundingClientRect() ?? {};

		// eslint-disable-next-line functional/no-expression-statement
		svg.current?.style.setProperty(
			"--x",
			`${pointerX - (svgX + width / 2)}`,
		);
		// eslint-disable-next-line functional/no-expression-statement
		svg.current?.style.setProperty(
			"--y",
			`${pointerY - (svgY + height / 2)}`,
		);
	};

	// eslint-disable-next-line functional/functional-parameters, functional/no-return-void
	const recenter = () => {
		// eslint-disable-next-line functional/no-expression-statement
		svg.current?.style.setProperty("--x", "0");
		// eslint-disable-next-line functional/no-expression-statement
		svg.current?.style.setProperty("--y", "0");
	};

	// eslint-disable-next-line functional/no-expression-statement, functional/functional-parameters
	useEffect(() => {
		// eslint-disable-next-line functional/no-expression-statement
		window.addEventListener("pointermove", follow);
		// eslint-disable-next-line functional/no-expression-statement
		window.addEventListener("blur", recenter);

		// eslint-disable-next-line functional/functional-parameters, functional/no-return-void
		return () => {
			// eslint-disable-next-line functional/no-expression-statement
			window.removeEventListener("pointermove", follow);
			// eslint-disable-next-line functional/no-expression-statement
			window.removeEventListener("pointermove", recenter);
		};
	});

	return (
		<div
			class={classnames(
				// eslint-disable-next-line max-len
				"pointer-events-none absolute origin-center left-1/2 top-1/2 w-200 h-200 transform-gpu -translate-y-1/2 -translate-x-1/2 flex rounded-full overflow-hidden text-black dark:text-white",
				className,
			)}
			{...properties}
		>
			<svg
				aria-label="lukeshiru's avatar"
				class="w-full"
				ref={svg}
				role="img"
				viewBox="0 0 64 64"
			>
				<defs>
					<path
						id="head"
						fill="#FFF"
						stroke="#000"
						// eslint-disable-next-line max-len
						d="M32.03 8.38c-5.61 0-11.22 2.86-12.82 4.59-1.56 1.68-2.38 5.32-2.79 9.32-.4 4-.4 8.36-.4 11.49 0 6.2 2.72 12.74 4.98 17.37 2.25 4.62 5.41 8.36 8 9.85.66.38 1.83.5 3 .5 1.16 0 2.34-.12 3-.5 2.59-1.5 5.75-5.24 8-9.86 2.26-4.63 5.03-11.16 5.03-17.36 0-3.13 0-7.49-.4-11.49s-1.23-7.64-2.79-9.32c-1.6-1.73-7.2-4.59-12.81-4.59Z"
					/>
				</defs>
				<path fill="#e06" d="M0 0h64v64H0z" />
				<g className="ears">
					<path
						fill="#DDD"
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="3"
						// eslint-disable-next-line max-len
						d="M18.5 32h27c1.1 0 2.07.9 2.15 2l.7 9c.08 1.1-.75 2-1.85 2h-29c-1.1 0-1.93-.9-1.85-2l.7-9a2.2 2.2 0 0 1 2.15-2Z"
					/>
					<path
						// eslint-disable-next-line max-len
						d="M18.02 41h27.96c.84 0 1.52.67 1.52 1.5s-.68 1.5-1.52 1.5H18.03c-.85 0-1.53-.67-1.53-1.5s.68-1.5 1.52-1.5Z"
					/>
				</g>
				<use xlinkHref="#head" />
				<clipPath id="c">
					<use xlinkHref="#head" />
				</clipPath>
				<g clip-path="url(#c)">
					<path
						className="hair"
						fill="#444"
						// eslint-disable-next-line max-len
						d="M12 30h4l5.16-11.18c.46-1 1.53-2.4 2.38-3.1l2.92-2.44A6.42 6.42 0 0 1 30 12h4c1.1 0 2.69.57 3.54 1.28l2.92 2.44c.85.7 1.92 2.1 2.38 3.1L48 30h4V7H12v23Z"
					/>
				</g>
				<path
					fill="none"
					stroke="#000"
					// eslint-disable-next-line max-len
					d="M32.03 8.38c-5.61 0-11.22 2.86-12.82 4.59-1.56 1.68-2.38 5.32-2.79 9.32-.4 4-.4 8.36-.4 11.49 0 6.2 2.72 12.74 4.98 17.37 2.25 4.62 5.41 8.36 8 9.85.66.38 1.83.5 3 .5 1.16 0 2.34-.12 3-.5 2.59-1.5 5.75-5.24 8-9.86 2.26-4.63 5.03-11.16 5.03-17.36 0-3.13 0-7.49-.4-11.49s-1.23-7.64-2.79-9.32c-1.6-1.73-7.2-4.59-12.81-4.59Z"
				/>
				<g className="face">
					<g
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="3"
					>
						<path
							fill="#DDD"
							stroke="#DDD"
							d="m32 33.5-2.5 9 2.5 1 2.5-1-2.5-9Z"
						/>
						<path
							fill="none"
							stroke="#000"
							d="m29.5 42.5 2.5 1 2.5-1"
						/>
					</g>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="3"
						d="M28.5 51.5h7"
					/>
					<path
						// eslint-disable-next-line max-len
						d="M22.5 32h5a.5.5 0 0 1 0 1H27v2.5a1.5 1.5 0 0 1-3 0V33h-1.5a.5.5 0 0 1 0-1Zm14.5.5c0 .28.22.5.5.5h.5v2.5a1.5 1.5 0 0 0 3 0V33h1.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm-13.42-2.95-4.97 2.4c-.34.15-.61-.02-.61-.4V28.9c0-.38.27-.82.61-.98l4.36-2.1c.34-.15.89-.15 1.23 0l5.3 2.55c1.36.66 1.24 1.2-.28 1.2h-5.64Zm13.97-6.03v.66l3.54-1.14c.36-.11.87 0 1.14.27l3.12 3c1.1 1.05.78 1.61-.69 1.26l-2.92-.7-7.73 2.47c-.36.12-.65-.1-.65-.47v-4a1 1 0 0 1 .65-.9l2.89-.93c.36-.11.65.1.65.48Z"
					/>
				</g>
				<path
					className="hair"
					stroke="#000"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-miterlimit="3"
					// eslint-disable-next-line max-len
					d="M20 15c-4.01-3.5-.06-12.28 7.05-12Q25.02 4 24 6q3.98-3.32 11-4-1.53.79-3 2 9.42-2.76 15 4-1.9-.65-4-1 4.87 3.41 5 8c-1.88-1.44-5.71-3.63-9 0-2.14-1.3-5.72-3.65-10.95 0-.67 1-3.68 3.81-8.05 0Z"
				/>
			</svg>
		</div>
	);
};
