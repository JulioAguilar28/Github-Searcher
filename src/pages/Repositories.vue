<template>
  <div>
    <div class="repositories-container">
      <!-- <Repository /> -->
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <p>Loading...</p>
    </v-overlay>
  </div>
</template>

<script>
// import Repository from '../components/Repository'
import { mapState } from 'vuex'
import { repositories as repositoriesRoute } from '../components/routes'
import Repository from '../models/Repository'

export default {
  name: 'Repositories',
  data() {
    return {
      repositories: [],
      loading: false
    }
  },
  computed: {
    ...mapState({ repositoryName: state => state.repositories.repository })
  },
  mounted() {
    this.getRepositories()
  },
  methods: {
    async getRepositories() {
      if (!this.loading) {
        try {
          this.loading = true
          const response = await this.$axios.get(
            repositoriesRoute.getByName(this.repositoryName)
          )
          const items = response.data.items
          if (items.length > 0)
            this.repositories = items.map(item => Repository.parse(item))
        } catch (error) {
          console.error({ error })
        }
        this.loading = false
      }
    }
  }
  // components: { Repository }
}
</script>

<style>
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
