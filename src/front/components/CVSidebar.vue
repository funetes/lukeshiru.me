<style module>
.list {
	font-size: 2vw;
	padding-left: 0;
	list-style: none;
	margin-bottom: 2vw;
}

.item {
	position: relative;
	line-height: 3vw;
	padding-left: 1.5em;
}

.IconArrow {
	fill: #424242;
	height: 2.5vw;
	left: 0;
	position: absolute;
	top: .25vw;
	vertical-align: middle;
}
</style>

<template>
	<aside>
		<CVBlock v-for="block in data" :title="block.title" :key="block.title">
			<ul :class="$style.list">
				<li v-for="item in block.list" :class="$style.item" :key="item">
					<IconArrow :class="$style.IconArrow"/>
					<span>${item}</span>
				</li>
			</ul>
		</CVBlock>
	</aside>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";
import CVBlock from "./CVBlock.vue";

const IconArrow = require("material-design-icons/sprites/svg-sprite/svg-sprite-navigation-symbol.svg?ic_arrow_forward_24px");

@VueClassComponent({
	components: {
		CVBlock,
		IconArrow
	},
	delimiters: ["\${", "}"],
	props: {
		data: {
			required: true,
			type: Array,
			default: []
		}
	}
})
export default class CVSidebar extends Vue { }
</script>
