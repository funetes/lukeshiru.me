<style lang="less" scoped>
main {
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
	.links, .logo {
		border-radius: 50%;
		position: absolute;
	}
	.links {
		height: 100vmin;
		width: 100vmin;
	}
	.logo {
		height: 50vmin;
		width: 50vmin;
	}
}
</style>

<template>
	<main v-bind:style="{ backgroundColor: inverted ? '#fff' : '#000'}">
		<OrbitLinks class="links" v-bind:links="links" v-bind:inverted="inverted"/>
		<Logo class="logo" v-bind:inverted="inverted"/>
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
