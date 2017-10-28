import { Promise } from "es6-promise";
import { AppState } from "./interfaces/AppState";
import { Link } from "./interfaces/Link";
import { QUERY_CV, QUERY_LINKS } from "./queries";
import { ActionContext, Vuex } from "./shared";

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

const mutations = {
	[commits.SET_CV]: (currentState: AppState, cv: {}) => {
		currentState.cv = cv;
		localStorage.setItem("cv", JSON.stringify(cv));
	},
	[commits.SET_INVERT]: (currentState: AppState, inverted: boolean) => {
		currentState.inverted = inverted;
	},
	[commits.SET_LINKS]: (currentState: AppState, links: Link[]) => {
		currentState.links = links;
		localStorage.setItem("links", JSON.stringify(links));
	}
};

const actions = {
	loadCV({ commit }: ActionContext<AppState, AppState>) {
		const localData = {
			data: { cv: JSON.parse(localStorage.getItem("cv") || "{}") }
		};

		return new Promise((resolve, reject) => {
			if (localStorage.getItem("cv") !== null) {
				setTimeout(() => resolve(localData), 2000);
			}
			fetch(`/graphql?query=${QUERY_CV}`)
				.then(
					response =>
						(response.headers.get("content-type") || "").indexOf(
							"application/json"
						) < 0
							? localData
							: response.json(),
					() => localData
				)
				.then(resolve);
		}).then(response =>
			commit(commits.SET_CV, (<typeof localData>response).data.cv)
		);
	},
	loadLinks({ commit }: ActionContext<AppState, AppState>) {
		const localData = {
			data: { links: JSON.parse(localStorage.getItem("links") || "[]") }
		};

		return new Promise((resolve, reject) => {
			if (localStorage.getItem("cv") !== null) {
				setTimeout(() => resolve(localData), 2000);
			}
			fetch(`/graphql?query=${QUERY_LINKS}`)
				.then(
					response =>
						(response.headers.get("content-type") || "").indexOf(
							"application/json"
						) < 0
							? localData
							: response.json(),
					() => localData
				)
				.then(resolve);
		}).then(response => commit(commits.SET_LINKS, (<typeof localData>response).data.links));
	},
	invert({ commit, state: appState }: ActionContext<AppState, AppState>) {
		return commit(commits.SET_INVERT, !appState.inverted);
	}
};

export const store = new Vuex.Store({
	actions,
	mutations,
	state
});
