import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RouteData } from '../router'
import isMobile from '../respects/browser/isMobile';

export const useAppData = defineStore('app', () => {
	const 
	layout = ref({
		rootElement:document.querySelector("div#app"),
		naviMode:false,
		appWidth:window.innerWidth,
		appHeight:window.innerHeight,
		deviceType:(isMobile()? "mb":"dt") as "dt"|"mb",
		headerHeight:94,
		footerHeight:100,
	}),
	navi = ref([
		{title:"이벤트", link:"/event", sub:[]},
		{title:"공지사항", link:"/notice", sub:[]},
		{title:"기업소개", link:"/about", sub:[]}
	]),
	routeInfo = ref({
		before:{},
		current:{},
		path:"",
		name:""
	});
	function changeRoute(to:RouteData, from:RouteData|null) {
		routeInfo.value.before = from? from : {};
		routeInfo.value.current = to;
		routeInfo.value.path = to.path;
		routeInfo.value.name = to.name;
	}
    // const count = ref(0)
    // const doubleCount = computed(() => count.value * 2)

    return { layout, navi, routeInfo, changeRoute }
})