<style module>
:root {
	--backgrond-color: #607D8B;
	--text-color: #424242;
}
.CVBlock {
	color: var(--text-color);
}

.title {
	color: var(--backgrond-color);
	font-size: 3vw;
	margin-bottom: 2vw;
	margin-top: 0;
	text-transform: uppercase;
}
</style>

<template>
	<section :class="$style.CVBlock">
		<h1 :class="$style.title">${title}</h1>
		<slot/>
	</section>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent({
	props: {
		title: String
	}
})
export default class CvBlock extends Vue { }
</script>
