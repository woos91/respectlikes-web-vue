<template>
	<div class="header-container">
		<div class="header-bg">
			<div :style="`background:linear-gradient(135deg, rgba(${bgColor.color1.value},1) 0%, rgba(${bgColor.color2.value},1) 47%, rgba(${bgColor.color3.value},1) 100%)`"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBgColorData } from '../stores/bgColor'



const bgData = useBgColorData();
const bgColor = computed(()=>bgData.bg);

// let changer;
// onMounted(()=>{
//     changer = setInterval(() => {
//         bgData.change();
//     }, 100);
// });


</script>



<style scoped>
    .header-container {
        height:3rem;
		left:0;
		right:0;
		top:0;
		position:fixed;

		.header-bg {
			position:fixed;
			left:0;
			top:0;
			right:0;
			height:3rem;
			overflow: hidden;
			pointer-events : none;
			opacity:0;
			animation-name: cast-in;
			animation-duration: 7s;
			animation-timing-function: linier;
			animation-delay: 7s;
			animation-fill-mode: forwards;
			z-index:0;

			.color-area {
				position:absolute;
				left:0;
				top:0;
				right:0;
				height:100vh;
				opacity:0.7;
			}
		}
	}

@media (min-width: 1024px) {
    
}
</style>
