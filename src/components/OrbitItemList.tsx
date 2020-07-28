import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";
import { IconProperties } from "./Icon";

export const OrbitItemList: WrapperComponent<"ul", IconProperties> = ({
	class: className,
	...properties
}) => <ul class={classnames("contents", className)} {...properties} />;
