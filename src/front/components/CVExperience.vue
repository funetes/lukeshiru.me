<style module>
:root {
	--backgrond-color: #263238;
	--foreground-color: #fff;
}

.CVExperience {
	display: grid;
	grid-template-areas:
		"header"
		"projects";
	grid-template-columns: auto;
	grid-column-gap: 2rem;
	margin-bottom: 2rem;
}

.header {
	background-color: var(--backgrond-color);
	border-radius: 1rem;
	color: var(--foreground-color);
	display: flex;
	grid-area: header;
	min-height: 8rem;
}

.date {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-family: "Roboto Monospace", monospace;
	font-size: 2rem;
	grid-area: date;
	justify-content: center;
	padding: 1rem;
	text-transform: uppercase;
	width: 14rem;
}

.description {
	align-self: center;
	display: flex;
	grid-area: description;
	flex-direction: column;
	padding-left: 2rem;
	border-left: 1px solid var(--foreground-color);
}

.projects {
	grid-area: projects;
}

.description > * {
	font-size: 2rem;
	margin: 0;
}

.position {
	text-transform: uppercase;
}
</style>

<template>
	<section :class="$style.CVExperience">
		<header :class="$style.header">
			<aside :class="$style.date">
				<span>{{dateStart}}</span>
				<span v-if="dateEnd">{{dateEnd}}</span>
			</aside>
			<aside :class="$style.description">
				<h1 :class="$style.position">{{position}}</h1>
				<h2 :class="$style.place">{{place}}</h2>
			</aside>
		</header>
		<section :class="$style.projects">
			<CVProject
				:class="$style.CVProject"
				:description="project.description"
				:key="project.title"
				:teamSize="project.teamSize"
				:technologies="project.technologies"
				:title="project.title"
				:vertical="project.vertical"
				:weeks="project.weeks"
				v-for="project in projects"
				v-if="projects"
			/>
		</section>
	</section>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
import CVProject from "./CVProject.vue";

@VueClassComponent({
	components: {
		CVProject
	},
	props: {
		dateEnd: String,
		dateStart: String,
		place: String,
		position: String,
		projects: Array
	}
})
export default class CVExperience extends Vue {
	public get date() {
		return `${this.$props.dateStart}\n${this.$props.dateEnd}`;
	}
}
</script>
