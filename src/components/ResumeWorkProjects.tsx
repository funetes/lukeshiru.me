import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeWorkProjects: WrapperComponent = ({
	class: className,
	...properties
}) => <div class={classnames("mt-4 mb-2", className)} {...properties} />;
