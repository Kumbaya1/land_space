import Vue from 'vue'
Vue.use(Router)

import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

// 一张图
import OnePicture from './OnePicture'
// 规划辅助编制
import PlanningCAD from "./PlanningCAD"
// 规划辅助审查
import Review from './Review'
// 用途管制
import Usage from "./Usage"
// 监测评估预警
import Monitoring from "./Monitoring"
// 公众服务
import Service from "./Service"

let routerList = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      OnePicture,
      PlanningCAD,
      Review,
      Usage,
      Monitoring,
      Service
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {}
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: {}
  },
  {
    path: "*",
    name: "*",
    redirect: "/404",
    meta: {}
  }
];
const router = new Router({
  routerList
})
router.beforeEach((to, from, next) => {
  // 1. 判断登陆  
  // 2. 判断权限
})
export default router;
