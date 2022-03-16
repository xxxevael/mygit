<template>
	<h1>这是关于页面</h1>
	<h1 @click="toggle">click</h1>
</template>
<script setup>
// 利用vueuse实现全屏功能
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
