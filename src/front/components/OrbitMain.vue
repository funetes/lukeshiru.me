<style module>
:root {
	--size: 15vmin;
}

.OrbitLink {
	height: var(--size);
	width: var(--size);
}
</style>

<template>
	<aside>
		<OrbitElement v-for="link in orbitLinks" :degrees="link.degrees" :size="90" :delay="link.delay" :key="link.title">
			<OrbitLink :class="$style.OrbitLink" :color="color" :background="link.color" :href="link.href" :icon="link.icon" :inverted="inverted" :title="link.title"/>
		</OrbitElement>
	</aside>
</template>

<script lang="ts">
import { Link } from "../interfaces/Link";
import { VueClassComponent, Vue } from "../shared";
import OrbitElement from "./OrbitElement.vue";
import OrbitLink from "./OrbitLink.vue";

@VueClassComponent({
	components: { OrbitElement, OrbitLink },
	props: {
		inverted: Boolean,
		links: Array,
		color: {
			type: String,
			default: "#fff"
		}
	}
})
export default class OrbitMain extends Vue {
	public get orbitLinks() {
		return (Array.isArray(this.$props.links) && this.$props.links.length > 0)
			? (<Link[]>this.$props.links).map((link, index, array) => ({
				...link,
				degrees: (360 / array.length) * index,
				delay: index * .1 + .1
			})) : [];
	}
}
</script>
