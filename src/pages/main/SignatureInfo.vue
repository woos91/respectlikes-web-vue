<script setup lang="ts">
import { onMounted, ref } from 'vue'
import letterSlicer from '../../respects/HTMLElements/letterSlicer';
import SignatureLogo from "./SignatureLogo.vue"

const signatureTxt = ref();
onMounted(()=>{
	if (signatureTxt.value) letterSlicer(signatureTxt.value, "slice");
	const els:NodeList = document.querySelectorAll(".signature-info span.slice");
	for (let i:number=0, el:HTMLSpanElement; i<els.length; i++) {
		el = els[i] as HTMLSpanElement;
		el.style.animation = `cast-move-up 0.6s ease-out ${i*0.03+2.8}s forwards`;
		el.style.opacity = `0`;
	}
});
</script>

<template>
	<div class="main-signature">
		<SignatureLogo />
		<div 
			ref="signatureTxt"
			class="signature-info"
		>마음이 향하는 방향을 높고 중하게 여깁니다.</div>
	</div>
</template>

<style scoped>
.main-signature {
	position: fixed;
	display:flex;
	left:1.9rem;
	bottom:1.5rem;
	opacity:0.7;
    align-items: flex-end;

	.signature-info {
		font-size:0.87rem;
		line-height:1.65rem;
		margin-left:0.5rem;
		
		span.slice {
			display:inline-block;
			opacity : 0;
			position:relative;
		}
	}
}
</style>
