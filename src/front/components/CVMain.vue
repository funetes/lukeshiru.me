<style module>
@import url("https://fonts.googleapis.com/css?family=Roboto");
:root {
	--columns: 3;
	--column: calc(100vw / var(--columns));
	--cv-color: #607D8B;
}

.CVMain {
	font-display: auto;
	font-family: Roboto, sans-serif;
}

.main {
	display: flex;
	padding-top: 4vw;
}

.sidebar {
	width: var(--column);
}

.content {
	flex-grow: 1;
}
</style>

<template>
	<section :class="$style.CVMain">
		<CVHeader :data="cv.header" photo="/images/cv.jpg"/>
		<main :class="$style.main">
			<CVSidebar :class="$style.sidebar" :data="cv.sidebar"/>
			<CVContent :class="$style.content" :data="cv.main"/>
		</main>
	</section>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
import CVContent from "./CVContent.vue";
import CVHeader from "./CVHeader.vue";
import CVSidebar from "./CVSidebar.vue";

@VueClassComponent({
	props: {
		cv: Object
	},
	components: {
		CVContent,
		CVHeader,
		CVSidebar
	}
})
export default class CVMain extends Vue { }
</script>
