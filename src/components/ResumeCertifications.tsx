import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeCertifications: WrapperComponent = ({
	class: className,
	...properties
}) => <div class={classnames("flex flex-col", className)} {...properties} />;
