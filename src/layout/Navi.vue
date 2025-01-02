<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import letterSlicer from '../respects/HTMLElements/letterSlicer';
import { RouterLink } from 'vue-router'

const 
refHome = ref(null),
refProfile = ref(null);
onMounted(()=>{
	if (refHome.value) letterSlicer(refHome.value.$el, "navi_txt slice1");
	if (refProfile.value) letterSlicer(refProfile.value.$el, "navi_txt slice2");
	const txtList:HTMLSpanElement[] = [];
	const els:NodeList = document.querySelectorAll(".header_navi span.navi_txt");
	for (let i:number=0, el:HTMLSpanElement; i<els.length; i++) {
		el = els[i] as HTMLSpanElement;
		el.style.animation = `cast-move-up 0.6s ease-out ${i*0.05+2.2}s forwards`;
		el.style.opacity = `0`;
	}
});

</script>

<template>
	<div class="header_navi">
        <RouterLink ref="refHome" class="navi-link" to="/">Home</RouterLink>
        <RouterLink ref="refProfile" class="navi-link" to="/profiles">Our member</RouterLink>
	</div>
</template>

<style scoped>
.header_navi {
	display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
	position: relative;
	z-index:1;
	padding: 0 1rem;

	.navi-link {
		margin-left:1rem;
		font-size:0.8rem;
		position:relative;
	}

	.navi-link::after {
		content: "";
		display:block;
		position:absolute;
		left:50%;
		bottom:-1px;
		height:1px;
		width:0%;
		background-color:white;
		opacity:0;
		transition:all 0.6s;
		animation: cast-in 0.6s linear 3.5s forwards;
	}

	[data-path='/'] .navi-link[href='/home']::after,
	[data-path='/profiles'] .navi-link[href='/home/profiles']::after {
		left:0%;
		width:100%;
	}
}
</style>