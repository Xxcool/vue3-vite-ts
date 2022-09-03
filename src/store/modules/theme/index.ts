import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { themeSetting } from '@/setting'

export const useThemeStore = defineStore('theme-store', {
	state: () => {
		return themeSetting
	},
	getters: {
		/** naive-ui暗黑主题 */
		naiveTheme(state) {
			return state.darkMode ? darkTheme : undefined
		}
	},
	actions: {
		/** 设置暗黑模式 */
		setDarkMode(darkMode: boolean) {
			this.darkMode = darkMode
		},
		/** 切换/关闭 暗黑模式 */
		toggleDarkMode() {
			this.darkMode = !this.darkMode
		}
	}
})
