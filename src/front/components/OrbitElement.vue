<style module>
.OrbitElement {
	animation: orbit .5s ease-in-out reverse backwards;
	display: block;
	left: 50%;
	opacity: 1;
	position: absolute;
	text-align: right;
	top: 50%;
	transform-origin: 0 50%;
	transform: translateY(-50%);
	width: 50%;
	will-change: opacity, width;
}

.rotation {
	display: inline-block;
	height: 100%;
}

@keyframes orbit {
	75% {
		opacity: 0;
		width: 25%;
	}
	100% {
		opacity: 0;
		width: 0%;
	}
}
</style>

<template>
	<aside :class="$style.OrbitElement" :style="orbitStyle">
		<span :class="$style.rotation" :style="rotationStyle">
			<slot/>
		</span>
	</aside>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		degrees: Number,
		delay: Number,
		size: Number
	}
})
export default class OrbitElement extends Vue {
	public get degreesTop() {
		return this.$props.degrees - 90;
	}
	public get orbitStyle() {
		const { degreesTop, $props: { delay, size } } = this;
		return {
			animationDelay: `${delay}s`,
			transform: `translateY(-50%) rotate(${degreesTop}deg)`,
			width: `${size / 2}%`
		};
	}
	public get rotationStyle() {
		const { degreesTop } = this;
		return {
			transform: `rotate(${degreesTop * -1}deg)`
		};
	}
}
</script>
