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
		<svg :class="$style.icon" viewBox="0 0 192 192">
			<defs>
				<linearGradient :id="id + '-back'" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="88.88%">
					<stop offset="0" stop-color="#FFF"/>
					<stop offset="1" stop-color="#BDBDBD"/>
				</linearGradient>
				<linearGradient :id="id + '-front'" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="88.88%">
					<stop offset="0" :stop-color="background"/>
					<stop offset="1" stop-color="#212121"/>
				</linearGradient>
			</defs>
			<path :stroke-width="0" :d="icon" :fill="inverted ? `url(#${id}-front)` : `url(#${id}-back)`" transform="translate(32 32)"/>
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
	public get id () {
		return this.$props.title.toLowerCase().replace(/ /, "-");
	}
}
</script>
