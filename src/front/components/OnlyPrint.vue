<style module>
@media screen {
	.OnlyPrint {
		display: none;
	}
}
</style>

<template>
	<section :class="$style.OnlyPrint">
		<slot/>
	</section>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

@VueClassComponent
export default class OnlyPrint extends Vue { }
</script>
