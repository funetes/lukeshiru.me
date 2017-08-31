<style lang="less" scoped>
.link {
	height: 15vmin;
	width: 15vmin;
}
</style>

<template>
	<aside>
		<orbit-element
			v-bind:degrees="link.degrees"
			v-bind:size="90"
			v-bind:delay="link.delay"
			v-bind:key="link.title"
			v-for="link in orbitLinks"
		><icon-link
			class="link"
			v-bind:color="color"
			v-bind:background="link.color"
			v-bind:href="link.href"
			v-bind:icon="link.icon"
			v-bind:inverted="inverted"
			v-bind:title="link.title"
		/></orbit-element>
	</aside>
</template>

<script lang="ts">
import { Link } from "../interfaces/Link";
import { VueClassComponent, Vue } from "../shared";
import IconLink from "./icon-link.vue";
import OrbitElement from "./orbit-element.vue";

@VueClassComponent({
	components: { IconLink, OrbitElement },
	name: "orbit-links",
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
				degrees: (360 / array.length) * index,
				delay: index * .1
			})) : [];
	}
}
</script>
