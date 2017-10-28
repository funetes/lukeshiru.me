import * as OfflinePluginRuntime from "offline-plugin/runtime";
import AppMain from "./components/AppMain.vue";
import { Vue } from "./shared";
import { store } from "./store";

OfflinePluginRuntime.install();

export const vueInstance = new Vue({
	delimiters: ["\${", "}"],
	el: "main",
	render(vue) {
		window.addEventListener("keydown", event => {
			if (event.keyCode === 112) {
				event.preventDefault();
				event.stopPropagation();
				this.$store.dispatch("invert");
			}
		});

		return vue(AppMain);
	},
	store
});
