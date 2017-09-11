<style lang="less" scoped>
main {
	height: 100vh;
	width: 100vw;
}
.links, .logo {
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
@size: 100vmin;
@half-size: @size / 2;
.links {
	height: @size;
	width: @size;
}
.logo {
	height: @half-size;
	width: @half-size;
}
</style>

<template>
	<main v-bind:style="{ backgroundColor: inverted ? '#fff' : '#000'}">
		<orbit-links class="links" v-bind:links="links" v-bind:inverted="inverted"/>
		<lukeshiru-logo class="logo" v-bind:inverted="inverted"/>
	</main>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
import OrbitLinks from "./orbit-links.vue";
import LukeshiruLogo from "./lukeshiru-logo.vue";

@VueClassComponent({
	components: { LukeshiruLogo, OrbitLinks },
	name: "profile-app"
})
export default class ProfileApp extends Vue {
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
