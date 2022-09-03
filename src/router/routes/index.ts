export const constantRoutes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录'
		}
	},
	{
		path: '/demo',
		name: 'demo',
		component: () => import('@/views/demo/index.vue'),
		meta: {
			title: 'demo'
		}
	}
]
