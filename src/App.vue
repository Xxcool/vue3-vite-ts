<template>
	<n-config-provider :theme="theme" class="h-full">
		<native-provider>
			<router-view />
		</native-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

const theme = ref<GlobalTheme | null>(darkTheme)
</script>
