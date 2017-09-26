<style module>
:root {
	--size-big: 100vmin;
	--size-small: 50vmin;
}

.OnlyScreen {
	background-color: #000;
	height: 100vh;
	width: 100vw;
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
	height: var(--size-small);
	width: var(--size-small);
}
</style>

<template>
	<main>
		<OnlyScreen :class="$style.OnlyScreen" :style="{ backgroundColor: inverted ? '#fff' : '#000'}">
			<OrbitMain :class="$style.OrbitMain" :links="links" :inverted="inverted"/>
			<AppLogo :class="$style.AppLogo" :inverted="inverted"/>
		</OnlyScreen>
		<OnlyPrint>
			<CVMain :cv="cv"/>
		</OnlyPrint>
	</main>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
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
	}
})
export default class AppMain extends Vue {
	public get links() {
		return this.$store.state.links;
	}
	public get inverted() {
		return this.$store.state.inverted;
	}
	public get cv() {
		return this.$store.state.cv;
	}
	public mounted() {
		this.$store.dispatch("loadLinks");
		this.$store.dispatch("loadCV");
	}
}
</script>
