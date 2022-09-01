<template>
	<n-config-provider :theme="theme">
		<n-card class="flex justify-center">
			<n-space class="mt-7">
				<n-button @click="theme = darkTheme"> 深色 </n-button>
				<n-button @click="theme = null"> 浅色 </n-button>
			</n-space>
		</n-card>
	</n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

export default defineComponent({
	setup() {
		return {
			darkTheme,
			theme: ref<GlobalTheme | null>(null)
		}
	}
})
</script>
