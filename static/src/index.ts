import App from "./components/App.vue";
import { Vue } from "./shared";
import { store } from "./store";

export const vue = new Vue({
	el: "#app",
	render: h => h(App),
	store
});
