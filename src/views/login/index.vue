<template>
	<div class="relative flex-center wh-full">
		<div class="absolute left-48px top-24px z-3 text-20px">
			<n-button type="primary" class="mr-2" @click="routerPush('demo')">
				<n-icon size="20">
					<ArrowBack />
				</n-icon>
			</n-button>
			<n-button type="primary" @click="theme.toggleDarkMode">
				<n-icon size="20">
					<Sunny v-if="!theme.darkMode" />
					<Moon v-else />
				</n-icon>
			</n-button>
		</div>
		<n-card :bordered="false" size="large" class="z-4 w-100 rounded-20px shadow-sm">
			<n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" :size="size">
				<n-form-item label="姓名" path="user.name">
					<n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
				</n-form-item>
				<n-form-item label="年龄" path="user.age">
					<n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
				</n-form-item>
				<n-form-item label="电话号码" path="phone">
					<n-input v-model:value="formValue.phone" placeholder="电话号码" />
				</n-form-item>
				<n-form-item class="flex flex-center mt-5">
					<n-button class="w-85" type="primary" @click="handleValidateClick"> 验证 </n-button>
				</n-form-item>
			</n-form>
		</n-card>

		<login-bg />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormInst } from 'naive-ui'
import { useThemeStore } from '@/store'
import { ArrowBack, Sunny, Moon } from '@vicons/ionicons5'
import { LoginBg } from './components'
import { useRouterPush } from '@/composables'
const { routerPush } = useRouterPush()

const theme = useThemeStore()

const formRef = ref<FormInst | null>(null)
const size = ref<'small' | 'medium' | 'large'>('medium')
const formValue = ref({
	user: {
		name: '',
		age: ''
	},
	phone: ''
})
const rules = {
	user: {
		name: {
			required: true,
			message: '请输入姓名',
			trigger: 'blur'
		},
		age: {
			required: true,
			message: '请输入年龄',
			trigger: ['input', 'blur']
		}
	},
	phone: {
		required: true,
		message: '请输入电话号码',
		trigger: ['input']
	}
}
const handleValidateClick = (e: MouseEvent) => {
	e.preventDefault()
	formRef.value?.validate((errors: any) => {
		if (!errors) {
			window.$message?.success('Valid')
		} else {
			console.log(errors)
			window.$message?.error('Invalid')
		}
	})
}
</script>
