import Vue from 'vue'
import VueRouter from 'vue-router'
import Repositories from '../pages/Repositories'
import RepositoryNotFound from '../pages/RepositoryNotFound'
import Error from '../pages/Error'

Vue.use(VueRouter)

const routes = [
  { path: '/repositories', component: Repositories },
  { path: '/notFound', component: RepositoryNotFound },
  { path: '/error', component: Error }
]

const router = new VueRouter({
  routes
})

export default router
