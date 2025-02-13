import { createRouter, createWebHashHistory  } from 'vue-router'
export type RouteData = {
	fullPath:string,
	hash?:string,
	href:string,
	matched?:[],
	meta?:{},
	name:string,
	params?:{},
	path:string,
	query?:{},
	redirectedFrom?:any
}
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'main',
			component: () => import('../pages/main/index.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../pages/about/index.vue'),
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: () => import('../pages/portfolio/index.vue'),
		},
	],
})
export default router
