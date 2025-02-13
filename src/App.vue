<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
import BaseBg from './layout/BaseBg.vue';
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import type { RouteData } from './router'
import { useAppData } from './stores/app';

import Scrollbar from 'smooth-scrollbar';
import isMobile from './respects/browser/isMobile';


const app = useAppData();
const contentsWrap = ref();
const isMb:boolean = isMobile();
// const isMb:boolean = true;
app.layout.deviceType = isMb? "mb":"dt";

let scroll:Scrollbar;
router.beforeEach((to, from) => {
	app.changeRoute(to as RouteData, from as RouteData);
	contentsWrap.value.setAttribute("data-page", to.name);
})
const winResizeHandler = ()=> {
	const wd = window.innerWidth, hg = window.innerHeight;
	app.layout.appWidth = wd;
	app.layout.appHeight = hg;

	 if (isMb) {
	
	} else {
		if (scroll) triggerScrollEvent(scroll.offset);
	}
};
onMounted(()=>{
	winResizeHandler();
	window.addEventListener("resize", (e)=>{winResizeHandler()})
	if (isMb) setBrowserScroll();
	else setSmoothScroll();
})
function setSmoothScroll() {
	scroll = Scrollbar.init(contentsWrap.value,
		{
			damping: 0.07,
			plugins: {
				overscroll: {
					effect: 'bounce',
					damping: 0.2,
					maxOverscroll: 150
				}
			}
		}
	);
	scroll.addListener((status) => {
		triggerScrollEvent(status.offset);
	});
}
function setBrowserScroll() {
	let _se = window.addEventListener("scroll", (e)=>{
		let offset = {
			x: window.scrollX,
            y: window.scrollY
		};
		triggerScrollEvent(offset);
	});
}
function triggerScrollEvent(offset:any) {
	window.dispatchEvent(
		new CustomEvent('appScroll', {
			detail: { x: offset.x, y: offset.y },
			bubbles: true,
			cancelable: true
		})
	)
}

</script>

<template>
	<BaseBg id="bg"></BaseBg>
	<Header id="header"></Header>
	<div id="contentswrap" ref="contentsWrap" :class="'app-wrap device_'+app.layout.deviceType">
		<RouterView class="main-wrap contents"></RouterView>
	</div>
	<Footer id="footer"></Footer>
</template>

<style>

div#app,
div#app > div.app-wrap {
	box-sizing: border-box;
	width:100vw;
	height:100vh;
}
div#app > div.app-wrap.device_mb {
	height:unset;
}
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

div#app div.app-wrap .main-wrap {
	box-sizing: border-box;
	padding: 3rem 2rem 0;
	min-height: calc(100vh - 3rem);
	overflow-x :hidden;
}
#contentswrap .scrollbar-track {
	background:rgba(0,0,0,0);
}
#contentswrap .scrollbar-thumb {
	background:rgba(0,0,0,0);
}
#contentswrap .scrollbar-thumb::before {
	background:rgba(0,0,0,0);
	content:"";
	position: absolute;
	left:0;
	top:0;
	bottom:0;
	right:3px;
	border-radius: 4px;
	background-color:rgba(255,255,255,0.5);
}
@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
