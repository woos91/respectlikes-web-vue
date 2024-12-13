<script setup lang="ts">
import Logo from '../../assets/images/logo.svg';
import { computed, onMounted } from 'vue'

const pathNum = 20, _sel = '.app-logo path';
// const drawLogo = ()=>{
//     let 
//     str:string = '<style>', lineDur:string, 
//     startTime:number=1,
//     drawStrokeTime:number=1, removeStrokeTime:number=2.5, drawFillTime:number = 3;
//     for (let i = 1; i <= pathNum; i++) {
//         lineDur = i<=8 ? '1' : '3';
//         str += _sel + ':nth-child('+i+') {\n';
//         str += ' fill:rgba(255,255,255,0);\n';
//         str += ' stroke:rgba(255,255,255,1);\n';
//         str += ' stroke-dasharray: 200;\n';
//         str += ' stroke-dashoffset: 200;\n';
//         str += ` animation: draw-stroke s linear ${(i+1.5)*0.2}s forwards;\n`;

//         str += `    animation-name: draw-stroke, remove-stroke, draw-fill;
//     animation-fill-mode: forwards, forwards, forwards;
//     animation-duration: ${lineDur}s, 1.5s, 2.5s;
//     animation-delay: ${(i+drawStrokeTime)*0.1+startTime}s, ${(i+removeStrokeTime)*0.15+startTime}s, ${(i+drawFillTime)*0.15+startTime}s;
//     animation-timing-function: linear, linear, linear;
// }
// `;
//     }
// 	str +="</style>";
//     return str;
// }
// const drawCss = computed(()=>drawLogo());
onMounted(()=>{
	// console.log(drawLogo);
});

</script>

<template>
	<div class="logo-container">
		<Logo class="app-logo" />
		<!-- <div v-html="drawCss"></div> -->
	</div>

</template>

<style scoped>
div.logo-container {
	height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
	
	.app-logo {
		height: 20vmin;
		pointer-events:none;
	}

	div.logo-container .app-logo path {
		fill:rgba(255,255,255,0);
		stroke-width:0.1;
	}
}
</style>
