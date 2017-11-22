import { default as Vue } from "vue";
import VueClassComponent from "vue-class-component";
import {
	ActionTree,
	default as Vuex,
	GetterTree,
	mapActions,
	mapGetters,
	mapState,
	MutationTree
} from "vuex";

Vue.use(Vuex);

export {
	ActionTree,
	GetterTree,
	mapActions,
	mapGetters,
	mapState,
	MutationTree,
	VueClassComponent,
	Vue,
	Vuex
};
