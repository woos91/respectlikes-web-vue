<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import About1 from './About1.vue'
import About2 from './About2.vue'
import About3 from './About3.vue'
import About4 from './About4.vue'


onMounted(()=>{
	setLineWrap();
	window.addEventListener("appScroll", setScroll);
	setActiveContents(0);
})
onUnmounted(()=>{
	window.removeEventListener("appScroll", setScroll);
})
function setLineWrap() {
	let lines = document.querySelectorAll(".con-about .line-wrap");
	lines.forEach((item) => {
		let itm = item as HTMLElement;
		itm.style.transitionDelay = String(Math.floor(Math.random()*1000))+'ms';
	})
}
function setScroll(event:any){
	setActiveContents(event.detail.scrollY);
}

function setActiveContents(scTY:number) {
	let 
	winH = window.innerHeight,
	cArea = 0.6, out = ((1-cArea)/2)*winH,
	min = out,
	max = winH - min;
	let wrap = document.querySelector(".con-about");
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
		<div class="con-about">
			<div>
				<About1 />
				<About2 />
				<About3 />
				<About4 />
			</div>
		</div>
	</div>
</template>

<style>
.con-about {
	margin : 0 auto;

	svg {
		opacity:0.5;
		z-index:0;
		pointer-events: none;
	}
	p {
		line-height : 1.78rem;
	}
	h3 {
		font-size : 1.5rem;
		margin: 0.8rem 0;
		
		svg#logoKr {
			height: 3.69rem;
			opacity:1;
			z-index:1;
		}
		span.about-title-text {
			font-size: 0;
			position: relative;
		}
		span.about-title-text::after {
			content: "";
			/* border-bottom : 1px dotted white; */
			background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 0%);
			background-position: top;
			background-size: 8px 2px;
			background-repeat: repeat-x;
			display:inline-block;
			width:75px;
			height:1px;
			transform: translateY(-1.4rem);
			margin : 0 0.4rem;
		}
		span.about-title-text::before {
			content: "?";
			font-size: 1.64rem;
			display:inline-block;
			position:absolute;
			left:100%;
			transform: translateY(0.7rem);
		}
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
		font-size: 2.15rem;
		font-weight:100 !important;
	}
	h5 {
		margin-bottom: 0.9rem;
	}
	h5, h5 > .line-wrap  {
		font-size: 1.10rem;
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
		transition-duration: 700ms;
		transition-timing-function:cubic-bezier(.43,1.51,.58,1.09);
	}
}
@media screen and (min-width:800px){
	.con-about {
		min-width : calc(800px - 4rem);
		max-width: 1200px;
	}
}
/* @media screen and (max-width:799px) and (min-width:600) { */
@media screen and (max-width:799px) {
	.con-about {
		width : 100%;
	}
}
@media screen and (max-width:599px){
	.con-about {
		width : 100%;
	}
}
</style>
