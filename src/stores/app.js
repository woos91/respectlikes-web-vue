import { defineStore } from 'pinia'

export const useAppData = defineStore({
	id: 'app',
	state: () => ({
		layout:{
			naviMode:false,
			mobileMode:false,
			headerHeight:94,
			footerHeight:100,
			routerReady:false,
		},
		navi: [
			// {title:"공동구매", link:"/group-buying", sub:[]},
			// {title:"상품보기", link:"/product", sub:[]},
			{title:"이벤트", link:"/event", sub:[]},
			{title:"공지사항", link:"/notice", sub:[]},
			{title:"기업소개", link:"/about", sub:[]},
		],
		beforeLink :{},
		sessionID:'',
		qna:{
			category:[]
		},
		event:{
			category:[]
		},
		rootCategory:0,
	}),
	getters: {
		// doubleCount: (state) => state.counter * 2
	},
	actions: {
		setQnaCategory(list){
			this.qna.category = list;
		},
		getQnaCategoryText(key){
			for (let i=0, obj; i<this.qna.category.length; i++) {
				obj = this.qna.category[i];
				if (key == obj.categoryNo) return obj.categoryText;
			}
			return null;
		},
		getQnaCategoryNo(text){
			for (let i=0, obj; i<this.qna.category.length; i++) {
				obj = this.qna.category[i];
				if (text == obj.categoryText) return obj.categoryNo;
			}
			return null;
		},
		setEventCategory(list){
			this.event.category = list;
		},
		setRootCategory(no){
			this.rootCategory = no;
		},
		getEventCategory(key){
			for (let i=0, obj; i<this.event.category.length; i++) {
				obj = this.event.category[i];
				if (key = obj.categoryNo) return obj;
			}
			return null;
		},
		// increment() {
		// 	this.counter++
		// },
		// setPageTitle(value) {
		// 	this.pageTitle = value;
		// }
	}
})