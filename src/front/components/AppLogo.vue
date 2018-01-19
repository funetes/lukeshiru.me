<style module>
@keyframes draw-front {
	from {
		width: 0;
		x: 8px;
	}
}
@keyframes draw-back {
	from { width: 0; }
}
.logoContainer {
	transform: translate(0px, 0px) rotate(-60deg);
	fill: #fff;
	transform-origin: 4px 8px;
	position: absolute;
}
.logoContainerInverted {
	fill: #263238;
}
.logoBack,
.logoShadow {
	transform: translate(4px, 8px) rotate(60deg) skewX(30deg);
	animation: draw-back .5s ease-in-out both 1s;
}
.logoFront {
	transform: translate(4px, 8px) skewX(-30deg);
	animation: draw-front .5s ease-in-out both .5s;
}
.logoShadow {
	fill: rgba(0, 0, 0, 0.2);
}
</style>

<template>
	<span>
		<svg :class="$style.AppLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
			<g :class="[ $style.logoContainer, { [$style.logoContainerInverted]: inverted } ]">
				<rect :class="$style.logoBack" :width="length" :height="thickness"/>
				<rect :class="$style.logoShadow" :width="length" :height="thickness"/>
				<rect :class="$style.logoFront" :width="length" :height="thickness"/>
			</g>
		</svg>
	</span>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		inverted: Boolean,
		length: {
			default: 8,
			type: Number
		},
		thickness: {
			default: 3.5,
			type: Number
		}
	}
})
export default class AppLogo extends Vue {}
</script>
