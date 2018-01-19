import createPersistedState from "vuex-persistedstate";
import { AppState } from "./interfaces/AppState";
import { CV } from "./interfaces/CV";
import { Link } from "./interfaces/Link";
import { QUERY_CV, QUERY_LINKS } from "./queries";
import { ActionTree, GetterTree, MutationTree, Vuex } from "./shared";

const state: AppState = {
	cv: {},
	inverted: false,
	links: []
};

const commits = {
	SET_CV: "Set CV",
	SET_INVERT: "Set invert value",
	SET_LINKS: "Set links list"
};

const mutations: MutationTree<AppState> = {
	[commits.SET_CV]: (currentState, cv: CV) => {
		currentState.cv = cv;
	},
	[commits.SET_INVERT]: currentState => {
		currentState.inverted = !currentState.inverted;
	},
	[commits.SET_LINKS]: (currentState, links: Link[]) => {
		currentState.links = links;
	}
};

const actions: ActionTree<AppState, AppState> = {
	loadCV({ commit }) {
		return fetch(`/graphql?query=${QUERY_CV}`)
			.then(response => response.json())
			.then(response => commit(commits.SET_CV, response.data.cv))
			.catch(error => console.error(error));
	},
	loadLinks({ commit }) {
		return fetch(`/graphql?query=${QUERY_LINKS}`)
			.then(response => response.json())
			.then(response => commit(commits.SET_LINKS, response.data.links))
			.catch(error => console.error(error));
	},
	invert({ commit, state: appState }) {
		return commit(commits.SET_INVERT);
	}
};

const getters: GetterTree<AppState, AppState> = {
	orbitLinks(currentState) {
		const links: Link[] = currentState.links;

		return Array.isArray(links) && links.length > 0
			? links.map((link, index) => ({
					...link,
					degrees: 360 / links.length * index,
					delay: index * 0.1 + 1
				}))
			: [];
	}
};

export const store = new Vuex.Store({
	actions,
	getters,
	mutations,
	plugins: [createPersistedState()],
	state
});
