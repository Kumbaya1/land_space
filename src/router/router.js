import Vue from 'vue'
import Store from "@/store/store"
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

let routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      roleName: "home"
    },
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
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/404") {
    next();
    return;
  }
  const isLogin = Store.state.userInfo.userId ? true : false;
  const permissions = Store.state.permissions;
  // 1. 判断登陆  
  if (isLogin) {
    // 2. 判断当前页面是否需要权限
    const roleName = to.meta && to.meta.roleName ? to.meta.roleName : false;
    if (roleName) {
      // 页面需要权限，权限列表中是否存在此权限
      if (permissions.includes(roleName)) {
        next();
      } else {
        next();
        alert("不存在权限")
      }
    } else {
      // 页面不需要权限，放行
      next();
    }
  } else {
    next("/login")
  }



})
export default router;
