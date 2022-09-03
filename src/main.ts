import { createApp } from 'vue'
import App from './App.vue'
// 引入样式文件
import './styles'
import { setupRouter } from './router'
import { setupStore } from './store'

async function setupApp() {
	const app = createApp(App)

	// 注册pinia
	setupStore(app)

	// 注册路
	setupRouter(app)

	app.mount('#app')
}

setupApp()
