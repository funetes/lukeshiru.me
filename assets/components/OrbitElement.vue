<style lang="less" scoped>
span {
	display: block;
	left: 50%;
	overflow: hidden;
	position: absolute;
	top: 50%;
}
</style>

<template>
	<span v-bind:style="{transform: transform}"><slot/></span>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		degrees: Number,
		distance: Number
	}
})
export default class OrbitElement extends Vue {
	public get transform() {
		const { degrees, distance } = this.$props;
		return [
			"translate(-50%, -50%)",
			`rotate(${degrees - 90}deg)`,
			`translate(${distance}vmin)`,
			`rotate(${(degrees - 90) * -1}deg)`
		].join(" ");
	}
}
</script>
