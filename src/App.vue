<script setup>
import { ref } from "vue-demi";
import Rate from "./components/Rate.vue";
let score = ref(3);
function update(num) {
	score.value = num;
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
	<h1>你的分数是{{ score }}</h1>
	<Rate v-model="score">课程评分</Rate>
	<Rate v-model="score">
		<img src="/public/favicon.ico" alt="" />
	</Rate>
</template>

<style>
#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
