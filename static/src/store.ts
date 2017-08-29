import { ActionContext, default as Vuex } from "vuex";
import { AppState } from "./interfaces/AppState";
import { GraphQLResponse } from "./interfaces/GraphQLResponse";
import { Vue } from "./shared";

Vue.use(Vuex);

const state: AppState = {
	links: []
};

const mutations = {
	setLinks(currentState: AppState, response: GraphQLResponse<AppState>) {
		currentState.links = response.data.links;
	}
};

const actions = {
	loadLinks({ commit }: ActionContext<AppState, AppState>) {
		return fetch("/graphql?query={links{title,href,icon,color}}")
			.then(data => data.json())
			.then(data => commit("setLinks", data))
			.catch(() => fetch("/data.json").then(data => data.json()).then(data => commit("setLinks", data)));
	}
};

export const store = new Vuex.Store({
	actions,
	mutations,
	state
});
