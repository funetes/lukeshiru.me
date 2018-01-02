<style module>
:root {
	--backgrond-color: #263238;
	--foreground-color: #fff;
}

.CVProject {
	display: flex;
	flex-direction: column;
	margin-top: 2vw;
}

.CVProject:not(:first-child) {
	border-top: 1px solid #263238;
	padding-top: 2vw;
}

.title {
	color: var(--backgrond-color);
	text-transform: uppercase;
	font-size: 2vw;
	margin: 0;
}

.data {
	font-size: 2vw;
	list-style: none;
	margin: 2vw 0 0;
	padding-left: 0;
}

.data li {
	display: flex;
	line-height: 3vw;
	overflow: auto;
	padding-left: 0;
	position: relative;
	flex-wrap: wrap;
}

.data li strong {
	color: var(--backgrond-color);
	display: inline-block;
	font-weight: 600;
	margin-right: .25em;
}

.icon {
	display: inline-block;
	fill: var(--backgrond-color);
	height: 3rem;
	margin-right: 1rem;
	vertical-align: middle;
	width: 3rem;
}

.technology {
	background-color: var(--backgrond-color);
	border-radius: .5vw;
	color: var(--foreground-color);
	display: inline-block;
	font-size: 1.5vw;
	margin: 0 .5vw .5vw 0;
	padding: .1vw 1vw;
}
</style>

<template>
	<section :class="$style.CVProject">
		<h2 :class="$style.title">{{title}}</h2>
		<ul :class="$style.data">
			<li>
				<IconStar :class="$style.icon"/>
				<strong>Description:</strong>
				<span>{{description}}.</span>
			</li>
			<li>
				<IconGroup :class="$style.icon"/>
				<strong>Team Size:</strong>
				<span>{{teamSize}}.</span>
			</li>
			<li>
				<IconSettings :class="$style.icon"/>
				<strong>Technologies:</strong>
				<span
					v-for="technology in technologies"
					:class="$style.technology"
					:key="technology"
				>{{technology}}</span>
			</li>
			<li>
				<IconTimeline :class="$style.icon"/>
				<strong>Vertical:</strong>
				<span>{{vertical}}.</span>
			</li>
			<li>
				<IconTimer :class="$style.icon"/>
				<strong>Length:</strong>
				<span>{{weeks}} weeks.</span>
			</li>
		</ul>
	</section>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

const IconGroup = require("material-design-icons/sprites/svg-sprite/svg-sprite-social-symbol.svg?ic_group_24px");
const IconSettings = require("material-design-icons/sprites/svg-sprite/svg-sprite-action-symbol.svg?ic_settings_24px");
const IconStar = require("material-design-icons/sprites/svg-sprite/svg-sprite-toggle-symbol.svg?ic_star_24px");
const IconTimeline = require("material-design-icons/sprites/svg-sprite/svg-sprite-action-symbol.svg?ic_timeline_24px");
const IconTimer = require("material-design-icons/sprites/svg-sprite/svg-sprite-image-symbol.svg?ic_timer_24px");

@VueClassComponent({
	components: {
		IconGroup,
		IconSettings,
		IconStar,
		IconTimeline,
		IconTimer
	},
	props: {
		description: String,
		teamSize: Number,
		technologies: Array,
		title: String,
		vertical: String,
		weeks: Number
	}
})
export default class CVProject extends Vue {}
</script>
