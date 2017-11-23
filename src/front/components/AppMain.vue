<style module>
@import url("../../../node_modules/roboto-fontface/css/roboto/roboto-fontface.css");

:root {
	--size-big: 100vmin;
	--size-small: 50vmin;
}

.AppMain {
	font-display: auto;
	font-family: Roboto, sans-serif;
}

.OnlyScreen {
	background-color: #263238;
	background-image: linear-gradient(
		120deg,
		#263238 0%,
		#263238 25%,
		#212121 100%
	);
	height: 100vh;
	width: 100vw;
}

.OnlyScreenInverted {
	background-color: #fff;
	background-image: linear-gradient(120deg, #fff 0%, #fff 25%, #bdbdbd 100%);
}

.AppLogo,
.OrbitMain {
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.OrbitMain {
	height: var(--size-big);
	width: var(--size-big);
}

.AppLogo {
	overflow: hidden;
	height: var(--size-small);
	width: var(--size-small);
}
</style>

<template>
	<main :class="$style.AppMain">
		<OnlyScreen :class="[$style.OnlyScreen, { [$style.OnlyScreenInverted]: inverted }]">
			<OrbitMain :class="$style.OrbitMain" :links="orbitLinks" :inverted="inverted"/>
			<AppLogo :class="$style.AppLogo" :inverted="inverted"/>
		</OnlyScreen>
		<OnlyPrint>
			<CVMain :cv="cv"/>
		</OnlyPrint>
	</main>
</template>

<script lang="ts">
import { mapGetters, mapState, VueClassComponent, Vue } from "../shared";
import AppLogo from "./AppLogo.vue";
import CVMain from "./CVMain.vue";
import OnlyPrint from "./OnlyPrint.vue";
import OnlyScreen from "./OnlyScreen.vue";
import OrbitMain from "./OrbitMain.vue";

@VueClassComponent({
	components: {
		AppLogo,
		CVMain,
		OnlyPrint,
		OnlyScreen,
		OrbitMain
	},
	computed: {
		...mapGetters([
			"orbitLinks"
		]),
		...mapState({
			cv: "cv",
			inverted: "inverted"
		})
	}
})
export default class AppMain extends Vue {
	public created() {
		this.$store.dispatch("loadLinks");
		this.$store.dispatch("loadCV");
	}
}
</script>
