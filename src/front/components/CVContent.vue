<template>
	<main>
		<CVBlock v-for="block in data" :key="block.title" :title="block.title">
			<CVExperience
				v-for="item in block.list"
				:dateEnd="item.dateEnd"
				:dateStart="item.dateStart"
				:key="item.dateStart"
				:place="item.place"
				:position="item.position"
				:projects="item.projects"
			/>
		</CVBlock>
	</main>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
import CVBlock from "./CVBlock.vue";
import CVExperience from "./CVExperience.vue";

@VueClassComponent({
	components: {
		CVBlock,
		CVExperience
	},
	props: {
		data: {
			required: true,
			type: Array,
			default: []
		}
	}
})
export default class CVContent extends Vue {}
</script>
