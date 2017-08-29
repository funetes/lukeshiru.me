declare module "*.vue" {
	import Vue from "vue";
	/**
	 * Vue module type.
	 */
	const VueModule: typeof Vue;
	export default VueModule;
}
