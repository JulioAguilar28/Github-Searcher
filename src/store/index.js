import Vue from 'vue'
import Vuex from 'vuex'

//Modules
import repositories from './modules/respositories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    repositories
  }
})
