import * as OfflinePluginRuntime from "offline-plugin/runtime";
import App from "./components/App.vue";
import { Vue } from "./shared";
import { store } from "./store";

OfflinePluginRuntime.install();

// tslint:disable-next-line:no-unused-expression
new Vue({
	el: "#app",
	render(vue) {
		window.addEventListener("keydown", event => {
			if (event.keyCode === 112) {
				event.preventDefault();
				event.stopPropagation();
				this.$store.dispatch("invert");
			}
		});

		return vue(App);
	},
	store
});
