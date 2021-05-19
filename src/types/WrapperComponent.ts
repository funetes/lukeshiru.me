import type { FunctionComponent, JSX } from "preact";
import type { JSXProperties } from "./JSXProperties";

export type WrapperComponent<
	WrappedTagName extends keyof JSX.IntrinsicElements = "div",
	WrapperProperties extends Record<string, unknown> = Record<string, unknown>
> = FunctionComponent<JSXProperties<WrappedTagName> & WrapperProperties>;
