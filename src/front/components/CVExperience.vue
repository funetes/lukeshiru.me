<style module>
:root {
	--backgrond-color: #263238;
	--foreground-color: #fff;
}
.CVExperience {
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
	<section :class="$style.CVExperience">
		<aside :class="$style.date">
			<span>{{dateStart}}</span>
			<span v-if="dateEnd">{{dateEnd}}</span>
		</aside>
		<main :class="$style.description">
			<h1 :class="$style.position">{{position}}</h1>
			<h2 :class="$style.place">{{place}}</h2>
		</main>
		<aside v-if="projects">
			<CVProject
				v-for="project in projects"
				:key="project.title"
				:description="project.description"
				:teamSize="project.teamSize"
				:technologies="project.technologies"
				:title="project.title"
				:vertical="project.vertical"
				:weeks="project.weeks"
			/>
		</aside>
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
