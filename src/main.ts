import { createApp } from 'vue'
import App from './App.vue'
// 引入样式文件
import './styles'
import { useAppRouter } from './router'

function vawBoot() {
	const app = createApp(App)
	useAppRouter(app)
	app.mount('#app')
}

vawBoot()
