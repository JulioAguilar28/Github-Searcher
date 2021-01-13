import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueRouter from './plugins/vue-router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  vueRouter,
  render: h => h(App)
}).$mount('#app')
