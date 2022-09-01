import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入Unocss
import unocss from 'unocss/vite'
// 压缩插件
import vitePluginCompression from 'vite-plugin-compression'

// 自动引入插件
import ViteComponents from 'unplugin-vue-components/vite'
// 自动按需引入NaiveUi组件
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		vue(),
		unocss(),
		vitePluginCompression({
			threshold: 1024 * 10
		}),
		ViteComponents({
			resolvers: [NaiveUiResolver()]
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "./src/styles/global.scss" as *;'
			}
		}
	},
	resolve: {
		alias: [
			{
				find: '@/',
				replacement: path.resolve(process.cwd(), 'src') + '/'
			}
		]
	},
	server: {
		host: '0.0.0.0',
		open: true
	}
})
