import type { WrapperComponent } from "../types/WrapperComponent";

export type AnchorProperties = {
	readonly aside?: boolean;
};

export const Anchor: WrapperComponent<"a", AnchorProperties> = ({
	aside = false,
	title,
	...properties
}) => (
	<a
		aria-label={title}
		rel="noopener noreferrer"
		target={aside ? "_blank" : undefined}
		{...{ ...properties, title }}
	/>
);
