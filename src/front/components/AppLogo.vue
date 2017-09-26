<style module>
.AppLogo {
	animation: zoom .5s ease-in-out forwards;
	transform: scale(0);
}

@keyframes zoom {
	to {
		transform: scale(1);
	}
}
</style>

<template>
	<span>
		<svg :class="$style.AppLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128">
			<g :stroke="inverted ? background : color" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle :fill="inverted ? color : background" cx="64" cy="64" r="63"/>
				<g id="m">
					<path d="m64 1v94.5h54.5zM64 95.4h28v-45.7z"/>
					<path id="t" d="m64 51v22h27.3z"/>
					<use xlink:href="#t" y="-146" transform="scale(1 -1)"/>
					<use xlink:href="#t" x="-155.9" y="-146" transform="scale(-1 -1)"/>
				</g>
				<use xlink:href="#m" transform="scale(-1 1)" x="-128"/>
			</g>
		</svg>
	</span>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		color: {
			type: String,
			default: "#fff"
		},
		background: {
			type: String,
			default: "#000"
		},
		inverted: Boolean
	}
})
export default class AppLogo extends Vue { }
</script>
