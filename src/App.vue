<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$router.push('/repositories')
  }
}
</script>

<style scoped></style>
