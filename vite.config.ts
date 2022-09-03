import { defineConfig } from 'vite'
import path from 'path'
import { setupVitePlugins } from './build'

export default defineConfig({
	base: '/',
	plugins: setupVitePlugins(),
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
