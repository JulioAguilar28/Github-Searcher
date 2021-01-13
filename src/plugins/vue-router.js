import Vue from 'vue'
import VueRouter from 'vue-router'
import Repositories from '../pages/Repositories'

Vue.use(VueRouter)

const routes = [{ path: '/repositories', component: Repositories }]

export default new VueRouter({
  routes
})
