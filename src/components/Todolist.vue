<template>
	<div>
		<input type="text" v-model="title" @keydown.enter="addTodo" />
		<button v-if="active < all" @click="clear">清理</button>
		<ul v-if="todos.length">
			<li v-for="(todo, index) in todos" :key="index">
				<input type="checkbox" v-model="todo.done" />
				<span :class="{ done: todo.done }">{{ todo.title }}</span>
			</li>
		</ul>
		<div v-else>暂无数据</div>
		<div>
			全选<input type="checkbox" v-model="allDone" />
			<span>{{ active }}/{{ all }}</span>
		</div>
	</div>

	<!-- <button @click="loading">123</button> -->
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useMouse } from "../utils/mouse";
import useFavicon from "../utils/favicon";
let { x, y } = useMouse();
let { favicon } = useFavicon();
function loading() {
	favicon.value = "/logo.png";
}
function useTodos() {
	let title = ref("");
	let todos = ref([
		{
			title: "学习vue",
			done: false,
		},
	]);
	function addTodo() {
		todos.value.push({
			title: title.value,
			done: false,
		});
		title.value = "";
	}
	function clear() {
		todos.value = todos.value.filter((v) => !v.done);
	}

	let active = computed(() => {
		return todos.value.filter((v) => !v.done).length;
	});
	let all = computed(() => {
		return todos.value.length;
	});
	let allDone = computed({
		get: function () {
			console.log(active.value);

			return active.value === 0;
		},
		set: function (value) {
			todos.value.forEach((todo) => {
				todo.done = value;
			});
		},
	});
	return { title, todos, addTodo, clear, active, all, allDone };
}
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>

<style scoped>
h1 {
	color: red;
}
</style>
