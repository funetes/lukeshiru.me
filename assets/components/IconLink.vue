<style lang="less" scoped>
a {
	border-radius: 50%;
	border-style: solid;
	border-width: .5vmin;
	box-sizing: border-box;
	cursor: pointer;
	display: inline-block;
	outline: none;
	overflow: hidden;
	padding: 25%;
	transition: opacity .2s, transform .2s;
	will-change: opacity, transform;
	&:focus, &:hover {
		transform: scale(0.9);
		opacity: .8;
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
		v-bind:style="{
			backgroundColor: inverted ? color : background,
			borderColor: inverted ? background : color
		}"
		v-bind:title="title"
		v-on:contextmenu="blockEvent"
		rel="noopener noreferrer"
	><svg viewBox="0 0 128 128"><path
		v-bind:d="icon"
		v-bind:fill="inverted ? background : color"
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
export default class IconLink extends Vue {
	public blockEvent(event: Event) {
		event.preventDefault();
		event.stopPropagation();
	}
}
</script>
