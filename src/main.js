import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Router} from "@/routes";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')
