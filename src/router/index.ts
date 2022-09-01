import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes/constants'

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
})

export function useAppRouter(app: App) {
	app.use(router)
}

export default router
