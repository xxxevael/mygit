<template>
	<div :style="fontstyle">
		<!-- {{ rate }} -->
		<slot></slot>
		<div class="rate" @mouseout="mouseOut">
			<span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
			<span class="hollow" :style="fontwidth">
				<span
					@click="onRate(num)"
					@mouseover="mouseOver(num)"
					v-for="num in 5"
					:key="num"
					>★</span
				>
			</span>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue-demi";

//组件的v-model   一般表单的v-model实现了数据的双向绑定  再自定义组件中使用v-model进行数据的双向绑定时
// 1、先将属性名修改为 modelValue
// 2、通过 update:modelValue 这个emit事件发出通知即可

/****
 * let props = defineProps({
      modelValue: Number,
      theme: { type: String, default: "orange" },
    });
    后续使用props.modelValue

 * let emits = defineEmits(["update:modelValue"]);
    function onRate(num) {
      emits("update:modelValue", num);
    }
 * 

    在使用该组件时可以直接使用v-model
    <Rate v-model="score"></Rate>
 */

//不使用v-model时
/***
 * let props = defineProps({
      value: Number,
      theme: { type: String, default: "orange" },
    });
    后续使用props.value
 * 
    let emits = defineEmits('update-rate');
    function onRate(num) {
      emits("'update-rate'", num);
    }
 * 
 * 在使用该组件时可以直接使用v-model
    <Rate :value="score" @update-rate="update"></Rate>
 */
let emits = defineEmits(["update:modelValue"]);
function onRate(num) {
	emits("update:modelValue", num);
}
let props = defineProps({
	modelValue: Number,
	theme: { type: String, default: "orange" },
});
console.log(props);
// let rate = computed(() =>
// 	"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
// );
const themeObj = {
	black: "#00",
	white: "#fff",
	red: "#f5222d",
	orange: "#fa541c",
	yellow: "#fadb14",
	green: "#73d13d",
	blue: "#40a9ff",
};
const fontstyle = computed(() => {
	return `color:${themeObj[props.theme]}`;
});

//评分宽度
let width = ref(props.modelValue);
function mouseOver(i) {
	width.value = i;
}
function mouseOut() {
	width.value = props.modelValue;
}

const fontwidth = computed(() => `width:${width.value}em`);
</script>

<style scoped>
.rate {
	position: relative;
	display: inline-block;
}
.rate > span.hollow {
	position: absolute;
	display: inline-block;
	top: 0;
	left: 0;
	width: 0;
	overflow: hidden;
}
</style>
