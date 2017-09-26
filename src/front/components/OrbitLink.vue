<style module>
:root {
	--size: 100%;
}

.OrbitLink {
	display: inline-block;
	outline: none;
	transition: transform .2s ease-in-out;
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
		<svg :class="$style.icon" viewBox="0 0 256 256">
			<circle :fill="inverted ? background : color" cx="128" cy="128" r="128"/>
			<circle :fill="inverted ? color : background" cx="128" cy="128" r="114"/>
			<path :d="icon" :fill="inverted ? background : color" transform="translate(64 64)"/>
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
export default class OrbitLink extends Vue { }
</script>
