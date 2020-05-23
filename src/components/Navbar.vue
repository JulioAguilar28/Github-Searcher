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
                @keyup.enter="onSendRepository">
            </v-text-field>
        </v-app-bar>
    </div>

    <!--<ul class="nav-container">
            <li class="item-icon"><img src="../assets/logo.png" alt="logo" style="width:40%"></li>
            <span></span>
            <li 
            class="item"
            v-for="option in options"
            :key="option"
            @click="updateItem(option)"
            :class="{ 'item-selected': itemSelected === option }">
                {{ option }}
            </li>
        </ul>-->
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            searchRepository: '',
        }
    },
    methods: {
        onSendRepository() {
            this.$emit('request-repository', this.searchRepository, true)
            this.searchRepository = ''
        }
    }
}
</script>

<style scoped>

</style>