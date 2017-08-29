<style lang="less" scoped>
span {
	align-items: center;
	display: flex;
	justify-content: center;
}

svg {
	height: 50%;
	width: 50%;
	@keyframes animation-draw { 100% { stroke-dashoffset: 0; } }
	[id] { animation: animation-draw 2000ms ease-in-out 0ms forwards; }
	#rectangle { stroke-dasharray: 151 153; stroke-dashoffset: 152; }
	#triangle-small { stroke-dasharray: 64 66; stroke-dashoffset: 65; }
	#triangle-big { stroke-dasharray: 261 263; stroke-dashoffset: 262; }
	#line-diagonal { stroke-dasharray: 55 57; stroke-dashoffset: 56; }
	#line-vertical { stroke-dasharray: 72 74; stroke-dashoffset: 73; }
}
</style>

<template>
	<span>
		<svg viewBox="0 0 128 128">
			<g id="logo" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round">
				<circle id="big-circle" cx="64" cy="64" r="63.5" />
				<g id="mirror">
					<rect id="rectangle" x="36.55" y="48.1" height="47.6" width="27.5" />
					<path id="triangle-small" d="M64 48l-27.4 23.8h27.4" />
					<use href="#triangle-small" y="23.8"></use>
					<use href="#triangle-small" y="-143.7" transform="scale(1 -1)"></use>
					<path id="triangle-big" d="M9 95.7h55v-95.2z"></path>
					<path id="line-diagonal" d="M36.55 48.1l27.5 47.6"></path>
					<path id="line-vertical" d="M50.35 24.3v71.4"></path>
				</g>
				<use href="#mirror" transform="scale(-1 1)" x="-128"></use>
			</g>
		</svg>
	</span>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent
export default class Logo extends Vue { }
</script>
