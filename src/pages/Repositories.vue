<template>
  <div>
    <div class="repositories-container">
      <Repository
        v-for="repository in repositories"
        :id="repository.id"
        :key="repository.id"
        :name="repository.name"
        :full-name="repository.fullName"
        :description="repository.description"
        :language="repository.language"
        :stars="repository.stars"
        :forks="repository.forks"
      />
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <p>Loading...</p>
    </v-overlay>
  </div>
</template>

<script>
import Repository from '../components/Repository'
import { mapState } from 'vuex'
import { repositories as repositoriesRoute } from '../components/routes'
import RepositoryModel from '../models/Repository'

export default {
  name: 'Repositories',
  components: { Repository },
  data() {
    return {
      repositories: [],
      loading: false
    }
  },
  computed: {
    ...mapState({ repositoryName: state => state.repositories.repository })
  },
  watch: {
    repositoryName: {
      handler() {
        this.getRepositories()
      }
    }
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
            this.repositories = items.map(item => RepositoryModel.parse(item))
          else this.$router.replace('/notFound')
        } catch (error) {
          this.$router.replace('/error')
          console.error({ error })
        }
        this.loading = false
      }
    }
  }
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
