<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import api from '../../respects/api/index'
import type {ConsType} from './models'
import ImgItem from './ImgItem.vue';
import { useAppData } from '../../stores/app';
import FillSort from '../../respects/layout/FillSort';

const app = useAppData();
const deviceMode = computed(()=>app.layout.deviceType);
const wideMode = computed(()=>app.layout.appWidth>1500?"wide":"");
const consData = ref<ConsType[]>([]);
const ul1 = ref(null);
let listSort:FillSort;
function resize() {
	// setDeviceMode(getDevic());
	// setWideMode(getWide());
}
function loadData() {
	if (ul1.value) listSort = new FillSort(ul1.value, "sort-item", [800, 1500, 1900], 40);
	api.request(
		"WORK_LIST",
		{},
		(data:any)=>{
			consData.value = data.data;
			listSort.start();
		},
		(err:string)=>{
			console.warn(err);
		}
	)
}
onMounted(()=>{
	window.addEventListener("resize", resize);
	loadData();
});
onUnmounted(()=>{
	// if (listSort) listSort.endRefresh();
});
</script>

<template>
	<div>
		<ul ref="ul1" :class="'img-group-list align-'+deviceMode+(wideMode?' align-wide':'')" >
			<li v-for="(item, i) in consData" :key="i" class="sort-item"><ImgItem :itemProps="item" :deviceMode="deviceMode"/></li>
		</ul>
	</div>
</template>

<style scoped>
ul.img-group-list {
	display:flex;
	flex-wrap:wrap;
	margin:200px 2rem 100px;
	width:calc(100vw - 4rem);
	padding:0;
}
.img-group-list li {
	list-style: none;
	padding:0.6rem;
	margin-bottom:1rem;
	box-sizing: border-box;
}
.align-dt>li {
	width:50%;
}
.align-mb>li {
	width:100%;
}
.align-wide>li {
	width:calc(100% / 3);
}
</style>
