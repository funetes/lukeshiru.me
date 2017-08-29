import { AppState } from "./interfaces/AppState";
import { GraphQLResponse } from "./interfaces/GraphQLResponse";
import { Vuex } from "./shared";

const state: AppState = {
	inverted: false,
	links: []
};

const mutations = {
	setLinks(currentState: AppState, response: GraphQLResponse<AppState>) {
		currentState.links = response.data.links;
	},
	setInvert(currentState: AppState, inverted: boolean) {
		currentState.inverted = inverted;
	}
};

const actions = {
	loadLinks({ commit }: Vuex.ActionContext<AppState, AppState>) {
		return fetch("/graphql?query={links{title,href,icon,color}}")
			.then(data => data.json())
			.then(data => commit("setLinks", data))
			.catch(() => fetch("/data.json").then(data => data.json()).then(data => commit("setLinks", data)));
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
