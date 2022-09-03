import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
})

export function setupRouter(app: App) {
	app.use(router)
}

/** 路由名称 */
export const routeName = (key: any) => key

export * from './routes'
