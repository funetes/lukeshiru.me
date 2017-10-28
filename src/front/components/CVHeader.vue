<style module>
:root {
	--backgrond-color: #607D8B;
	--foreground-color: #fff;
}
.CVHeader {
	align-items: center;
	background-color: var(--backgrond-color);
	border-radius: 1vw;
	display: flex;
	font-weight: 100;
	justify-content: flex-start;
	overflow: hidden;
	width: 100vw;
}

.CVHeader img {
	width: calc(100vw / 3);
}

.CVHeader aside {
	color: var(--foreground-color);
	padding: 0 4vw;
	font-weight: 400;
}

.title {
	text-transform: uppercase;
}

.title h1,
.title h2 {
	margin: 0;
}

.title h1 {
	font-size: 5vw;
	letter-spacing: .05em;
}

.title h2 {
	font-size: 2.5vw;
}

.data {
	font-size: 2vw;
	list-style: none;
	margin-bottom: 0;
	margin-top: 2vw;
	padding-left: 0;
}

.data li {
	display: flex;
	line-height: 3vw;
	padding-left: 1.5em;
	position: relative;
}

.data li strong {
	font-weight: 600;
	margin-right: .25em;
}

.data li span {
	display: inline-block;
	flex-grow: 1;
	text-align: right;
}

.icon {
	fill: var(--foreground-color);
	height: 2.5vw;
	left: 0;
	position: absolute;
	top: .25vw;
	vertical-align: middle;
}
</style>

<template>
	<header :class="$style.CVHeader">
		<img :src="photo"/>
		<aside>
			<hgroup :class="$style.title">
				<h1>{{data.name}}</h1>
				<h2>{{data.position}}</h2>
			</hgroup>
			<ul :class="$style.data">
				<li>
					<IconPerson :class="$style.icon"/>
					<strong>Full Name:</strong>
					<span>{{data.fullname}}</span>
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
		},
		photo: String
	}
})
export default class CVHeader extends Vue { }
</script>
