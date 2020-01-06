import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utlis/register-vant'

import 'amfe-flexible'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
