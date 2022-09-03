import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Axios from 'axios'

import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueAxios, Axios)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
