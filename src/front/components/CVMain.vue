<style module>
:root {
	--columns: 3;
	--column: calc(100vw / var(--columns));
	--cv-color: #607d8b;
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
	<section>
		<CVHeader :data="cv.header" photo="/images/photo.jpeg"/>
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
export default class CVMain extends Vue {}
</script>
