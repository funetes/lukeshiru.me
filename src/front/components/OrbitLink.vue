<style module>
:root {
	--size: 100%;
}

.OrbitLink {
	display: inline-block;
	outline: none;
	transition: transform 0.2s ease-in-out;
	will-change: transform;
}

.OrbitLink:focus,
.OrbitLink:hover {
	transform: scale(1.1);
}

.icon {
	height: var(--size);
	width: var(--size);
}
</style>

<template>
	<a :aria-label="title" :class="$style.OrbitLink" :href="href" :title="title" rel="noopener noreferrer">
		<svg :class="$style.icon" viewBox="0 0 192 192">
			<path :stroke-width="0" :d="icon" :fill="inverted ? background : `#FFF`" transform="translate(32 32)"/>
		</svg>
	</a>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		color: String,
		background: String,
		href: String,
		icon: String,
		inverted: Boolean,
		title: String
	}
})
export default class OrbitLink extends Vue {
	public get id() {
		return this.$props.title.toLowerCase().replace(/ /, "-");
	}
}
</script>
