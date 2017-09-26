<style module>
@media print {
	.OnlyScreen {
		display: none;
	}
}
</style>

<template>
	<section :class="$style.OnlyScreen">
		<slot/>
	</section>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent
export default class OnlyScreen extends Vue { }
</script>
