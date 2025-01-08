<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBgColorData } from '../stores/BgColor'



const bgData = useBgColorData();
const bgColor = computed(()=>bgData.bg);

let changer;
onMounted(()=>{
    changer = setInterval(() => {
        bgData.change();
    }, 1000/30);
});


// defineProps<{
// msg: string
// }>()
</script>

<template>
    <div 
        class="home-bg" 
        :style="`background:linear-gradient(${bgColor.color1.angle}deg, rgba(${bgColor.color1.value},1) 0%, rgba(${bgColor.color2.value},1) 47%, rgba(${bgColor.color3.value},1) 100%)`">
    </div>
</template>

<style scoped>
    .home-bg {
        z-index:-1;
        position: fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        opacity:0;
        animation-name: cast-in;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
	}

@media (min-width: 1024px) {
    
}
</style>
