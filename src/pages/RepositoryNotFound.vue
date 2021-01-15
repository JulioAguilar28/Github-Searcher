<template>
  <div class="not-found-container">
    <img src="../assets/not-found.jpg" alt="not-found" />
    <p class="display-1 font-weight-regular text-center">
      Repository not found
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RepositoryNotFound',
  computed: {
    ...mapState({ repository: state => state.repositories.repository })
  },
  watch: {
    repository: {
      handler() {
        this.$router.replace('/repositories')
      }
    }
  }
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 30%;
}

@media (max-width: 600px) {
  img {
    width: 70%;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  img {
    width: 50%;
  }
}
</style>
