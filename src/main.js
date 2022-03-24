import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
createApp(App).use(router)
.use(Element3).use(store).mount('#app')
//使用vite创建项目时 vue-tools不生效的解决方案
// const win = window

// if (process.env.NODE_ENV === 'development') {

//     if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {

//         win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app

//     }

// }