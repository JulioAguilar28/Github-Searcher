const state = {
  repository: 'vue',
  error: false,
  loading: true
}

const getters = {}

const mutations = {
  setRepository: (state, repository) => {
    state.repository = repository
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  setError: (state, payload) => {
    state.error = payload
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
