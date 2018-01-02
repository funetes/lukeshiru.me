<style module>
:root {
	--backgrond-color: #263238;
	--foreground-color: #fff;
}
.CVHeader {
	background-color: var(--backgrond-color);
	border-radius: 1rem;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	font-weight: 100;
	overflow: hidden;
	padding: 0 2rem;
}

.CVHeader aside {
	color: var(--foreground-color);
	font-weight: 400;
	width: 100%;
}

.title {
	text-transform: uppercase;
}

.title h1,
.title h2 {
	margin: 0;
}

.title h1 {
	font-size: 5rem;
	letter-spacing: 0.05em;
}

.title h2 {
	font-size: 2.5rem;
}

.data {
	font-size: 2rem;
	list-style: none;
	margin-bottom: 0;
	margin-top: 2rem;
	padding-left: 0;
}

.data li {
	display: flex;
	line-height: 3rem;
	position: relative;
}

.data li strong {
	font-weight: 600;
	margin-right: 0.25em;
}

.data li span {
	display: inline-block;
	flex-grow: 1;
	text-align: right;
}

.icon {
	display: inline-block;
	fill: var(--foreground-color);
	height: 3rem;
	margin-right: 1rem;
	vertical-align: middle;
	width: 3rem;
}
</style>

<template>
	<header :class="$style.CVHeader">
		<aside>
			<hgroup :class="$style.title">
				<h1>{{data.name}}</h1>
				<h2>{{data.position}}</h2>
			</hgroup>
			<ul :class="$style.data">
				<li>
					<IconPerson :class="$style.icon"/>
					<strong>Full Name:</strong>
					<span>{{data.fullName}}</span>
				</li>
				<li>
					<IconPlace :class="$style.icon"/>
					<strong>Location:</strong>
					<span>{{data.location}}</span>
				</li>
				<li>
					<IconToday :class="$style.icon"/>
					<strong>Birthday:</strong>
					<span>{{data.birthday}}</span>
				</li>
				<li>
					<IconEmail :class="$style.icon"/>
					<strong>EMail:</strong>
					<span>{{data.email}}</span>
				</li>
				<li>
					<IconLink :class="$style.icon"/>
					<strong>Website:</strong>
					<span>{{data.website}}</span>
				</li>
			</ul>
		</aside>
	</header>
</template>

<script lang="ts">
import { VueClassComponent, Vue } from "../shared";

const IconEmail = require("material-design-icons/sprites/svg-sprite/svg-sprite-communication-symbol.svg?ic_email_24px");
const IconLink = require("material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg?ic_link_24px");
const IconPerson = require("material-design-icons/sprites/svg-sprite/svg-sprite-social-symbol.svg?ic_person_24px");
const IconPlace = require("material-design-icons/sprites/svg-sprite/svg-sprite-maps-symbol.svg?ic_place_24px");
const IconToday = require("material-design-icons/sprites/svg-sprite/svg-sprite-action-symbol.svg?ic_today_24px");

@VueClassComponent({
	components: {
		IconEmail,
		IconLink,
		IconPerson,
		IconPlace,
		IconToday
	},
	props: {
		data: {
			required: true,
			type: Object
		}
	}
})
export default class CVHeader extends Vue {}
</script>
