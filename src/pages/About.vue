<template>
	<div>
		<!-- <h1>这是关于页面</h1>
		<h1 @click="toggle">click</h1>
		<Rate v-model="score"></Rate> -->
		<Heading :level="1">hello geekbang</Heading>
		<Todo></Todo>
	</div>
</template>
<script setup>
// 利用vueuse实现全屏功能
// import { useFullscreen } from "@vueuse/core";
// import { ref } from "vue-demi";
// import Rate from "../components/Rate.vue";
import Heading from "../components/Heading.jsx";
import Todo from "../components/Todo.jsx";
// let score = ref(3);
// const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
