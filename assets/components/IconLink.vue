<style lang="less" scoped>
a {
	display: inline-block;
	outline: none;
	transition: transform .2s ease-in-out;
	will-change: transform;
	&:focus, &:hover {
		transform: scale(1.25);
	}
	svg {
		height: 100%;
		width: 100%;
	}
}
</style>

<template>
	<a
		v-bind:aria-label="title"
		v-bind:href="href"
		v-bind:title="title"
		rel="noopener noreferrer"
	><svg viewBox="0 0 256 256"><circle
		v-bind:fill="inverted ? background : color"
		cx="128"
		cy="128"
		r="128"
	/><circle
		v-bind:fill="inverted ? color : background"
		cx="128"
		cy="128"
		r="120"
	/><path
		v-bind:d="icon"
		v-bind:fill="inverted ? background : color"
		transform="translate(64 64)"
	/></svg></a>
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
export default class IconLink extends Vue { }
</script>
