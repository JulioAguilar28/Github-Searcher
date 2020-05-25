<template>
  <v-app>
    <Navbar />
    <div class="repositories-container">
      <Repository 
      v-for="repository in getRepositories"
      :key="repository.id"
      :repository="repository" />
    </div>
    <div v-if="!getRepositories.length && !getLoading && !getError">
      <RepositoryNotFound />
    </div>
    <div v-if="getError">
      <Error />
    </div>
    <v-overlay
      :value="getLoading"
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

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    Navbar,
    Repository,
    RepositoryNotFound,
    Error
  },

  methods: {
    ...mapActions(['fetchRepositories']),
  },

  computed: {
    ...mapGetters(['getRepositories', 'getLoading', 'getError'])
  },

  mounted() {
    this.fetchRepositories('vue')
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