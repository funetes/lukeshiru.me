import { AppState } from "./interfaces/AppState";
import { Link } from "./interfaces/Link";
import { Vuex } from "./shared";

const state: AppState = {
	inverted: false,
	links: []
};

const commits = {
	SET_INVERT: "Set invert value",
	SET_LINKS: "Set links list"
};

const mutations = {
	[commits.SET_INVERT]: (currentState: AppState, inverted: boolean) => {
		currentState.inverted = inverted;
	},
	[commits.SET_LINKS]: (currentState: AppState, links: Link[]) => {
		currentState.links = links;
		localStorage.setItem("links", JSON.stringify(links));
	}
};

const actions = {
	loadLinks({ commit }: Vuex.ActionContext<AppState, AppState>) {
		const localData = { data: { links: JSON.parse(localStorage.getItem("links") || "[]") } };

		return fetch("/graphql?query={links{title,href,icon,color}}")
			.then(
				response => (response.headers.get("content-type") === "application/json" ? response.json() : localData),
				() => localData
			)
			.then(response => commit(commits.SET_LINKS, response.data.links));
	},
	invert({ commit, state: appState }: Vuex.ActionContext<AppState, AppState>) {
		return commit(commits.SET_INVERT, !appState.inverted);
	}
};

export const store = new Vuex.Store({
	actions,
	mutations,
	state
});
