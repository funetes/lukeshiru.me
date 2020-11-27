import { isString, isUndefined } from "@vangware/utils";
import { ComponentChild } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";
import { ResumeSectionTitle } from "./ResumeSectionTitle";

export type ResumeSectionProperties = {
	readonly title?: ComponentChild;
};

export const ResumeSection: WrapperComponent<
	"section",
	ResumeSectionProperties
> = ({ children, title, ...properties }) => (
	<section title={isString(title) ? title : undefined} {...properties}>
		{!isUndefined(title) ? (
			<ResumeSectionTitle>{title}</ResumeSectionTitle>
		) : undefined}
		{children}
	</section>
);
