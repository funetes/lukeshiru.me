<style module>
:root {
	--backgrond-color: #263238;
	--foreground-color: #fff;
}
.CVProject {
	display: flex;
	margin-bottom: 2vw;
}

.date {
	align-items: flex-start;
	background-color: var(--backgrond-color);
	border-radius: 1vw;
	color: var(--foreground-color);
	display: flex;
	flex-direction: column;
	font-family: "Roboto Mono", monospace;
	font-size: 2vw;
	margin-right: 2vw;
	padding: 2vw;
	text-transform: uppercase;
}

.description {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.description > * {
	font-size: 2vw;
	margin: 0;
}

.place {
	font-weight: 100;
}

.position {
	text-transform: uppercase;
}
</style>

<template>
	<section :class="$style.CVProject">
		<h2>{{title}}</h2>
		<ul>
			<li>Description: {{description}}.</li>
			<li>Team Size: {{teamSize}}.</li>
			<li>Technologies: {{technologies.join(", ")}}.</li>
			<li>Vertical: {{vertical}}.</li>
			<li>Length: {{weeks}} weeks.</li>
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
