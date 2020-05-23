<template>
  <v-app>
    <Navbar @request-repository="onRequestRepository"/>
    <div class="repositories-container">
      <Repository 
      v-for="repository in repositories"
      :key="repository.id"
      :repository="repository" />
    </div>
    <div v-if="!repositories.length && !loading && !error">
      <RepositoryNotFound />
    </div>
    <div v-if="error">
      <Error />
    </div>
    <v-overlay
      :value="loading"
    >
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <p>Loading...</p>
    </v-overlay>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Repository from './components/Repository.vue'
import RepositoryNotFound from './components/RepositoryNotFound.vue'
import Error from './components/Error.vue'

import axios from 'axios'

export default {
  name: 'App',

  components: {
    Navbar,
    Repository,
    RepositoryNotFound,
    Error
  },

  data() {
    return {
      repositories: [],
      error: false,
      loading: true,
      searchRepository: 'Vue',
    }
  },

  methods: {
    onRequestRepository(searchRepository, loading) {
      this.searchRepository = searchRepository
      this.loading = loading
    },
    getRespositories() {
      axios.get(this.baseUrl)
      .then((response) => {
        this.repositories = response.data.items
      })
      .catch((error) => { 
        this.error = true
        console.log(error)
      })
      .finally(() => { 
        this.loading = false
        console.log('Request Finished')
      })
    }
  },

  watch: {
    searchRepository: function() { this.getRespositories() }
  },

  computed: {
    baseUrl() {
      return `https://api.github.com/search/repositories?q=${this.searchRepository}&sort=stars&order=desc`
    }
  },

  mounted() {
    this.getRespositories()
  }
};
</script>

<style scoped>
  .repositories-container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    .repositories-container {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    .repositories-container {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>