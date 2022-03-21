import { createRouter,createWebHashHistory} from 'vue-router'
// import { createRouter,createWebHashHistory} from './grouter/index'
//当引入页面/pages/About.vue 页面的名称大小写与实际页面的名称大小写不同时 vite热更新会失效
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes =[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router