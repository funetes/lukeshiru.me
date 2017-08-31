import { AppState } from "./interfaces/AppState";
import { Link } from "./interfaces/Link";
import { Vuex } from "./shared";

const state: AppState = {
	inverted: false,
	links: []
};

const mutations = {
	setLinks(currentState: AppState, links: Link[]) {
		currentState.links = links;
		localStorage.setItem("links", JSON.stringify(links));
	},
	setInvert(currentState: AppState, inverted: boolean) {
		currentState.inverted = inverted;
	}
};

const actions = {
	loadLinks({ commit }: Vuex.ActionContext<AppState, AppState>) {
		return fetch("/graphql?query={links{title,href,icon,color}}")
			.then(response => response.json(), () => {
				console.log("Fetch rejected");

				return ({ data: { links: JSON.parse(localStorage.getItem("links") || "[]") } });
			})
			.then(response => commit("setLinks", response.data.links));
	},
	invert({ commit, state: appState }: Vuex.ActionContext<AppState, AppState>) {
		return commit("setInvert", !appState.inverted);
	}
};

export const store = new Vuex.Store({
	actions,
	mutations,
	state
});
