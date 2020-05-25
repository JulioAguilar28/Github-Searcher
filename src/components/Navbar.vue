<template>
    <div>
        <v-app-bar
            color="grey darken-4"
            dark
        >
            <v-icon class="mr-1">mdi-github</v-icon>
            <v-toolbar-title>Searcher</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                hide-details
                single-line
                placeholder="Search for respository"
                v-model="searchRepository"
                @keyup.enter="onSearchRepositories">
            </v-text-field>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Navbar',
    data() {
        return {
            searchRepository: '',
        }
    },

    methods: {
        ...mapActions(['fetchRepositories', 'onLoading']),
        onSearchRepositories() {
            this.onLoading()
            this.fetchRepositories(this.searchRepository)
            this.searchRepository = ''
        }
    }
}
</script>

<style scoped>

</style>