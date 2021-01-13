import axios from 'axios'

const state = {
  repositories: [],
  error: false,
  loading: true
}

const getters = {
  getRepositories: state => state.repositories,
  getLoading: state => state.loading,
  getError: state => state.error
}

const mutations = {
  setRepositories: (state, payload) => {
    state.repositories = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  setError: (state, payload) => {
    state.error = payload
  }
}

const actions = {
  async fetchRepositories({ commit }, repository) {
    var response = await axios.get(
      `https://api.github.com/search/repositories?q=${repository}&sort=stars&order=desc`
    )

    if (response.statusText === 'OK') {
      var repositories = await response.data.items
      commit('setRepositories', repositories)
      commit('setLoading', false)
    } else {
      commit('setError', true)
    }
  },

  onLoading({ commit }) {
    commit('setLoading', true)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
