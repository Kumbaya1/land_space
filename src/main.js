import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import "./assets/css/reset.css"
import '@/assets/iconfont/iconfont.css'


import { Button, Menu, Submenu, MenuItem, Form, FormItem, Input, Message } from "element-ui"
Vue.use(Button).use(Menu).use(Submenu).use(MenuItem).use(Form).use(FormItem).use(Input);
// 解决刷新自动弹出问题
Vue.component(Message);
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
