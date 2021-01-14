<template>
  <div>
    <v-app-bar color="grey darken-4" dark>
      <v-icon class="mr-1">mdi-github</v-icon>
      <v-toolbar-title>Searcher</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchRepository"
        hide-details
        single-line
        placeholder="Search for respository"
        @keyup.enter="onSearchRepositories"
      >
      </v-text-field>
    </v-app-bar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      searchRepository: ''
    }
  },

  methods: {
    ...mapMutations('repositories', ['setRepository']),
    onSearchRepositories() {
      this.setRepository(this.searchRepository)
      this.searchRepository = ''
    }
  }
}
</script>

<style scoped></style>
