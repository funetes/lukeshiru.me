import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";
import { IconProperties } from "./Icon";

export const OrbitItemList: WrapperComponent<"ul", IconProperties> = ({
	class: className,
	...properties
}) => <ul class={classnames("contents", className)} {...properties} />;
