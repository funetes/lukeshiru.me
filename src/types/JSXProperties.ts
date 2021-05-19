import type { JSX } from "preact";

export type JSXProperties<
	TagName extends keyof JSX.IntrinsicElements = "div"
> = JSX.IntrinsicElements[TagName];
