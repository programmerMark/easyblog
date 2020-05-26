import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

import './plugins/antdesignvue'
import api from './api/api'

Vue.prototype.$api = api
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
