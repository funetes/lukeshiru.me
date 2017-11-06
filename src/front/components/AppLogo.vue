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
		<svg :class="$style.AppLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<defs>
				<linearGradient id="back" gradientUnits="userSpaceOnUse" x1="16" y1="16" x2="23.4" y2="22.4">
					<stop offset="0" :stop-color="inverted ? '#212121' : '#BDBDBD'"/>
					<stop offset="1" :stop-color="inverted ? '#263238' : '#FFF'"/>
				</linearGradient>
			</defs>
			<path d="m23.4 16h-11.1v6.4h14.8z" fill="url(#back)" />
			<path d="m16 3.2l3.7 6.4-7.4 12.8-3.7-6.4z" :fill="inverted ? '#263238' : '#FFF'" />
		</svg>
	</span>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		inverted: Boolean
	}
})
export default class AppLogo extends Vue { }
</script>
