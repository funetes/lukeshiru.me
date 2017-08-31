<style lang="less" scoped>
.orbit {
	animation: orbit .5s ease-in-out reverse backwards;
	display: block;
	left: 50%;
	position: absolute;
	text-align: right;
	top: 50%;
	transform-origin: 0 50%;
	transform: translateY(-50%);
	width: 50%;
	will-change: width;
}
.rotation {
	display: inline-block;
}
@keyframes orbit {
	to { width: 0%; }
}
</style>

<template>
	<span v-bind:style="{
		animationDelay: `${delay}s`,
		transform: transformMain,
		width: `${size / 2}%`
	}" class="orbit">
		<span v-bind:style="{ transform: transformSub }" class="rotation">
			<slot/>
		</span>
	</span>
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
	public get transformMain() {
		const { degreesTop } = this;
		return `translateY(-50%) rotate(${degreesTop}deg)`;
	}
	public get transformSub() {
		const { degreesTop } = this;
		return `rotate(${degreesTop * -1}deg)`;
	}
}
</script>
