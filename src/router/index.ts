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
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
		},
	],
})
export default router
