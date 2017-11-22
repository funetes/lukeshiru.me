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
		<OrbitElement v-for="link in links" :degrees="link.degrees" :size="90" :delay="link.delay" :key="link.title">
			<OrbitLink :class="$style.OrbitLink" :color="color" :background="link.color" :href="link.href" :icon="link.icon" :inverted="inverted" :title="link.title"/>
		</OrbitElement>
	</aside>
</template>

<script lang="ts">
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
export default class OrbitMain extends Vue { }
</script>
