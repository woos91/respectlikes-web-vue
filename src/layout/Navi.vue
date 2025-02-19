<script setup lang="ts">
import { onMounted, ref } from 'vue'
import letterSlicer from '../respects/HTMLElements/letterSlicer';
import { RouterLink } from 'vue-router'

const 
// refHome = ref(null),
refAbout = ref(null),
refProfile = ref(null),
refWorks = ref(null);
onMounted(()=>{
	// if (refHome.value) letterSlicer(refHome.value, "navi_txt slice1");
	if (refAbout.value) letterSlicer(refAbout.value, "navi_txt slice1");
	if (refProfile.value) letterSlicer(refProfile.value, "navi_txt slice2");
	if (refWorks.value) letterSlicer(refWorks.value, "navi_txt slice3");
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
        <!-- <RouterLink class="navi-link" to="/"><span class="txt-group" ref="refHome">Home</span></RouterLink> -->
        <RouterLink class="navi-link" to="/about"><span class="txt-group" ref="refAbout">About</span></RouterLink>
        <RouterLink class="navi-link" to="/profile"><span class="txt-group" ref="refProfile">Profile</span></RouterLink>
        <RouterLink class="navi-link" to="/portfolio"><span class="txt-group" ref="refWorks">Works</span></RouterLink>
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
		bottom:4px;
		height:1px;
		width:0%;
		background-color:rgba(255,255,255,0.5);
		opacity:0;
		transition:all 0.6s;
		animation: cast-in 0.6s linear 3.5s forwards;
	}

	.navi-link.router-link-active::after {
		left:0.15rem;
		width:calc(100% - 0.3rem);
	}
}
</style>