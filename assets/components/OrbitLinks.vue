<style lang="less" scoped>
.link {
	width: 15vmin;
	height: 15vmin;
}
</style>

<template>
	<aside>
		<OrbitElement
			v-bind:degrees="link.degrees"
			v-bind:distance="38"
			v-bind:key="link.title"
			v-for="link in orbitLinks"
		><IconLink
			class="link"
			v-bind:color="color"
			v-bind:background="link.color"
			v-bind:href="link.href"
			v-bind:icon="link.icon"
			v-bind:inverted="inverted"
			v-bind:title="link.title"
		/></OrbitElement>
	</aside>
</template>

<script lang="ts">
import { Link } from "../interfaces/Link";
import { VueClassComponent, Vue } from "../shared";
import IconLink from "./IconLink.vue";
import OrbitElement from "./OrbitElement.vue";

@VueClassComponent({
	components: { IconLink, OrbitElement },
	props: {
		inverted: Boolean,
		links: Array,
		color: {
			type: String,
			default: "#fff"
		}
	}
})
export default class OrbitLinks extends Vue {
	public get orbitLinks() {
		return (Array.isArray(this.$props.links) && this.$props.links.length > 0)
			? (<Link[]>this.$props.links).map((link, index, array) => ({
				...link,
				degrees: (360 / array.length) * index
			})) : [];
	}
}
</script>
