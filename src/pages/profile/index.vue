<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Profile1 from './Profile1.vue'
import Profile2 from './Profile2.vue'
import Profile3 from './Profile3.vue'
import Profile4 from './Profile4.vue'

onMounted(()=>{
	setLineWrap();
	window.addEventListener("appScroll", setScroll);
	setActiveContents(0);
})
onUnmounted(()=>{
	window.removeEventListener("appScroll", setScroll);
})
function setLineWrap() {
	let lines = document.querySelectorAll(".con-profile .line-wrap");
	lines.forEach((item) => {
		let itm = item as HTMLElement;
		itm.style.transitionDelay = String(Math.floor(Math.random()*1000)+1000)+'ms';
	})
}
function setScroll(event:any){
	setActiveContents(event.detail.scrollY);
}

function setActiveContents(scTY:number) {
	let 
	winH = window.innerHeight,
	cArea = 0.5, out = ((1-cArea)/2)*winH,
	min = out,
	max = winH - min;
	let wrap = document.querySelector(".con-profile");
	if (!wrap) return;
	let itms = wrap.querySelectorAll(".active-content");
	itms.forEach((item, i) => {
		let 
		itm = item as HTMLElement,
		box = itm.getBoundingClientRect(),
		h = box.height,
		y = box.y;
		if (y+h < min || y > max) {
			itm.classList.remove("_active");
		} else {
			itm.classList.add("_active");
		}
	})
}

</script>

<template>
	<div>
		<div class="con-profile">
			<div>
				<Profile1 />
				<Profile2 />
				<Profile3 />
				<Profile4 />
			</div>
		</div>
	</div>
</template>

<style>
.con-profile {
	margin : 0 auto;

	svg {
		opacity:0.5;
		z-index:0;
		pointer-events: none;
	}
	p {
		line-height : 1.78rem;
	}
	section {
		margin-bottom:2rem;
		position:relative;
		width: calc(100% + 4rem);
		margin-left: -2rem;
		box-sizing: border-box;
		padding-left: 2rem;
		padding-right: 2rem;
		
	}
	.content-box {
		position: relative;
		z-index:1;
	}
	h4 {
		margin-bottom: 0.6rem;
	}
	h4, h4 > .line-wrap {
		font-size: 2.55rem;
		font-weight:100 !important;
	}
	h5 {
		margin-bottom: 0.9rem;
	}
	h5, h5 > .line-wrap  {
		font-size: 1.40rem;
		line-height: 1.85rem;
		font-weight:700 !important;
	}
	p {
		margin-bottom: 1rem;
	}

	.line-wrap {
		display: block;
		opacity:0;
		transform : translateY(0.5rem);
		transition-property: opacity, transform;
		transition-duration: 400ms;
		transition-timing-function: ease-in;
	}
	._active .line-wrap {
		opacity:1;
		transform : translateY(0);
		transition-property: opacity, transform;
		transition-duration: 1000ms;
		transition-timing-function:cubic-bezier(.43,1.51,.58,1.09);
	}
}
@media screen and (min-width:800px){
	.con-profile {
		min-width : calc(800px - 4rem);
		max-width: 1200px;
	}
}
/* @media screen and (max-width:799px) and (min-width:600) { */
@media screen and (max-width:799px) {
	.con-profile {
		width : 100%;
	}
}
@media screen and (max-width:599px){
	.con-profile {
		width : 100%;
	}
}
</style>
