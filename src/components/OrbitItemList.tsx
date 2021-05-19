import classnames from "classnames";
import type { WrapperComponent } from "../types/WrapperComponent";
import type { IconProperties } from "./Icon";

export const OrbitItemList: WrapperComponent<"ul", IconProperties> = ({
	class: className,
	...properties
}) => <ul class={classnames("contents", className)} {...properties} />;
