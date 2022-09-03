import vue from '@vitejs/plugin-vue'
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
// 引入Unocss
import unocss from 'unocss/vite'
// 压缩插件
import vitePluginCompression from 'vite-plugin-compression'
// 自动引入插件
import ViteComponents from 'unplugin-vue-components/vite'
// 自动按需引入NaiveUi组件
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export function setupVitePlugins() {
	const plugins = [
		vue(),
		unocss(),
		DefineOptions(),
		vitePluginCompression({
			threshold: 1024 * 10
		}),
		ViteComponents({
			resolvers: [NaiveUiResolver()]
		}),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/icons')],
			symbolId: 'icon-[dir]-[name]'
		})
	]
	return plugins
}
