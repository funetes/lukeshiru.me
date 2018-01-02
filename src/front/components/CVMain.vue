<style module>
:root {
	--columns: 3;
	--column: calc(100rem / var(--columns));
	--cv-color: #607d8b;
}

.CVMain {
	display: grid;
	grid-column-gap: 2rem;
	grid-row-gap: 1em;
	grid-template-areas:
		"photo header"
		"sidebar content";
	grid-template-columns: 4fr 9fr;
}

.photo {
	border-radius: 1rem;
	grid-area: photo;
	width: 100%;
}

.CVSidebar {
	grid-area: sidebar;
}

.CVContent {
	grid-area: content;
}
</style>

<template>
	<section :class="$style.CVMain">
		<img :class="$style.photo" src="/images/photo.jpeg"/>
		<CVHeader :class="$style.CVHeader" :data="cv.header"/>
		<CVSidebar :class="$style.CVSidebar" :data="cv.sidebar"/>
		<CVContent :class="$style.CVContent" :data="cv.main"/>
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
export default class CVMain extends Vue {}
</script>
