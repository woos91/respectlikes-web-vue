<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import letterSlicer from '../../respects/HTMLElements/letterSlicer';
import SignatureLogo from "./SignatureLogo.vue"

const signatureTxt = ref<HTMLDivElement>();
onMounted(()=>{
	
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
		}
	}
}
</style>
