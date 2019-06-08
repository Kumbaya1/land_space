import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import "./assets/css/reset.css"
import '@/assets/iconfont/iconfont.css'


import { Button, Menu, Submenu, MenuItem } from "element-ui"
Vue.use(Button).use(Menu).use(Submenu).use(MenuItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
