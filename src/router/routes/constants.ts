export const constantRoutes = [
	{
		path: '/',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			hidden: true
		}
	}
]
