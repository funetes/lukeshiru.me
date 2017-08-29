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
	<main>
		<Logo/>
		<OrbitLinks/>
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
	mounted() {
		this.$store.dispatch("loadLinks");
	}
}
</script>
