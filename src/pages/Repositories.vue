<template>
  <div>
    <div class="repositories-container">
      <!-- <Repository /> -->
    </div>
    <v-overlay :value="false">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <p>Loading...</p>
    </v-overlay>
  </div>
</template>

<script>
// import Repository from '../components/Repository'
import { mapState } from 'vuex'

export default {
  name: 'Repositories',
  computed: {
    ...mapState({ repository: state => state.repositories.repository })
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
