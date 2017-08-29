<style lang="less" scoped>
main {
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
	&>* {
		position: absolute;
		width: 100vw;
		height: 100vh;
	}
}
</style>

<template>
	<main v-bind:style="{ backgroundColor: inverted ? '#fff' : '#000'}">
		<OrbitLinks v-bind:links="links" v-bind:inverted="inverted"/>
		<Logo v-bind:inverted="inverted"/>
	</main>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
import OrbitLinks from "./OrbitLinks.vue";
import Logo from "./Logo.vue";

@VueClassComponent({
	components: { Logo, OrbitLinks }
})
export default class App extends Vue {
	public get links() {
		return this.$store.state.links;
	}
	public get inverted() {
		return this.$store.state.inverted;
	}
	public mounted() {
		this.$store.dispatch("loadLinks");
	}
}
</script>
