<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, onMounted, onUnmounted } from 'vue'
import type {ConsType} from './models';
interface ImgData {id:String, code:string}
interface ImgDataList extends Array<ImgData> {};

const props = defineProps<{
	itemProps:ConsType,
	deviceMode:"dt"|"mb"
}>(),
itemProps = ref(props.itemProps),
deviceMode = ref(props.deviceMode);

const 
imgPath:string = import.meta.env.VITE_DATA_PATH+'works/images/',
imgLayout = computed(()=>{
	if (deviceMode.value === "dt") return getLayout(itemProps.value.layoutForDesktop);
	else return getLayout(itemProps.value.layoutForMobile);
}),
imgs:ImgDataList = (()=>{
	let imgDatas:ImgDataList = [];
	for(let i = 0; i < itemProps.value.images.length; i++){
		imgDatas.push({id:itemProps.value.images[i].imgID, code:`<div class='img-item'><img src="${imgPath+itemProps.value.images[i].fileName}" style="animation-delay:${randomDelay()}s" alt="${itemProps.value.images[i].alt}" /></div>`});
	}
	return imgDatas;
})(),
getImgCode = (id:string)=>{
	for(let i = 0; i < imgs.length; i++){
		if (imgs[i].id === id) return imgs[i].code;
	}
	return '';
}
function getLayout(sampleCode:string) {
	let layout = sampleCode.split(" ").join('\n').split('<x>').join("<div class='direction-x'>").split('</x>').join('</div>').split('</y>').join('</div>').split('<y>').join("<div class='direction-y'>");
	let imgStrs = sampleCode.split('<i:');
	if (sampleCode.substring(0, 3) !== '<i:') imgStrs.shift();
	for(let i = 0, id; i <imgStrs.length; i++){
		id = imgStrs[i] = imgStrs[i].split('>')[0].split(' ').join('');
		layout = layout.split('<i:'+id+'>').join(getImgCode(id));
	}
	console.log(layout);
	return layout;
}
function randomDelay() {
	return Math.random()*2;
}
onMounted(()=>{
})
onUnmounted(()=>{
})
</script>

<template>
	<div class='img-group'>
		<div class='title-item'>
			<p class='text-main' :style="`animationDelay:${randomDelay()}s`">{{itemProps.titleMain}}</p>
			<p class='text-sub' :style="`animationDelay:${randomDelay()}s`">{{itemProps.titleSub}}</p>
		</div>
		<div v-html="imgLayout"></div>
		
	</div>
</template>

<style scoped>
.img-group {}
.direction-x {
	display:flex;
	flex-wrap:nowrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	position:relative;
	flex:auto;
}
.direction-y {
	display:flex;
	flex-wrap:nowrap;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	position:relative;
	flex:auto;
}
.title-item {
	position:relative;
	flex:auto;
	text-align: left;
	padding-bottom:0.8rem;
}
.title-item .text-main {
	position:relative;
	font-size:1.4rem;
	line-height:1.8rem;
	color:white;
	font-weight:700;
	margin:0;
	opacity:0;
	animation: cast-move-up 1.6s ease-out 0s forwards;
}
.title-item .text-sub {
	position:relative;
	font-size:0.9rem;
	line-height:1.1rem;
	color:rgba(255,255,255,0.8);
	font-weight:300;
	margin:0;
	opacity:0;
	animation: cast-move-up 1.6s ease-out 0s forwards;
}
.img-item {
	position:relative;
	flex:auto;
	margin:0 0.2rem 0.03rem 0;
}
.img-item img {
	max-width: 100%;
	object-fit: cover;
	max-height: 100%;
	opacity:0;
	animation: cast-move-up 1.6s ease-out 0s forwards;
}
.direction-x > .img-item img {
	height:100%;
}
.direction-y > .img-item img {
	width:100%;
}
</style>
