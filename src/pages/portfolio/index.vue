<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type {ConsType, CategoryType} from './models'
import api from '../../respects/api/index'
import ImgGroups from './ImgGroups.vue'

const category = ref("all" as CategoryType);
const imgList = ref<InstanceType<typeof ImgGroups> | null>(null);

const loadedData = ref<ConsType[]>([]);
const consData = ref<ConsType[]>([]);

function setFilter(categoryValue:CategoryType) {
	if (!categoryValue) categoryValue = "all";
	category.value = categoryValue;
	if (categoryValue === "all") consData.value = loadedData.value;
	else consData.value = loadedData.value.filter(item=>item.category===categoryValue);
	
	if (imgList.value) imgList.value.setList(consData.value);
}
function loadData() {
	api.request(
		"WORK_LIST",
		{},
		(data:any)=>{
			loadedData.value = data.data;
			setFilter("");
		},
		(err:string)=>{
			console.warn(err);
		}
	)
}
onMounted(()=>{
	loadData();
});
</script>

<template>
	<div>
		<div class="page-header">
			<h3>Portfolio</h3>
			<nav class="category-nav">
				<ul>
					<li :class="'category_list' + (category=='all'?' _curr':'')"><a href="javascript:;" @click="setFilter('all')">ALL</a></li>
					<li :class="'category_list' + (category=='web'?' _curr':'')"><a href="javascript:;" @click="setFilter('web')">WEB</a></li>
					<li :class="'category_list' + (category=='print'?' _curr':'')"><a href="javascript:;" @click="setFilter('print')">PRINT</a></li>
					<li :class="'category_list' + (category=='cibi'?' _curr':'')"><a href="javascript:;" @click="setFilter('cibi')">CI / BI</a></li>
				</ul>
			</nav>
		</div>

		<ImgGroups ref="imgList" class="portfolio_list" />
	</div>
</template>

<style scoped>
.page-header {
	display: flex;
	justify-content: flex-start;
	flex-direction: row;        
	align-items: center;

	nav.category-nav {
		margin-top:0;
		user-select: none;

		ul {
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			list-style: none;
			padding-left: 2.3rem;
			
			li {
				padding: 0;
				margin: 0;
			
				a {
					padding: 0.3rem;
					opacity: 0.5;
					cursor:grab;
					white-space: nowrap;
				}
			}
			li._curr a {
				font-weight:600;
				opacity: 1;
			}
		}
	}
}
.portfolio_list {
	min-height : calc(100vh - 16.33rem);
}
</style>
