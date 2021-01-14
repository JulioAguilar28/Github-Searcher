import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import axios from 'axios'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/vue-router'

Vue.use(BootstrapVue)

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: 'https://api.github.com'
    })
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
