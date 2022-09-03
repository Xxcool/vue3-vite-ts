<template>
	<n-card title="全局组件使用方法" class="flex justify-center h-full">
		<n-space class="mt-7">
			<n-button round @click="routerBack()">返回</n-button>
			<n-button type="success" dashed @click="createMessage">
				打开信息
			</n-button>
			<n-button @click="notify('success')">
				成功
			</n-button>
			<n-button @click="handleButtonClick">
				点击遮罩的事件
			</n-button>
		</n-space>
	</n-card>
</template>

<script setup lang="ts">
import { NotificationType } from 'naive-ui';
import { useRouterPush } from '@/composables';
const { routerBack } = useRouterPush();

const createMessage = () => {
	window.$message?.success('hello vue3')
}

const notify = (type: NotificationType) => {
	window.$notification?.[type]({
		content: '说点啥呢',
		meta: '想不出来',
		duration: 2500,
		keepAliveOnHover: true
	})
}

const handleButtonClick = () => {
	window.$dialog?.success({
		title: '关闭',
		content: '你确定？',
		positiveText: '确定',
		negativeText: '取消',
		maskClosable: false,
		onMaskClick: () => {
			window.$message?.success('不能关闭')
		},
		onEsc: () => {
			window.$message?.success('通过 esc 关闭')
		}
	})
}
</script>
