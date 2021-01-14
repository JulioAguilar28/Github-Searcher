<template>
  <div class="error-container">
    <img src="../assets/error404.jpg" alt="error 404" />
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
.error-container {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
}

img {
  width: 40%;
}

@media (max-width: 600px) {
  img {
    width: 100%;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  img {
    width: 100%;
  }
}
</style>
