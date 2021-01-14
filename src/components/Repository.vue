<template>
  <v-card class="mx-auto my-5" color="grey lighten-5" width="90%" height="90%">
    <v-card-title>
      <span class="title font-weight-regular">{{ name }}</span>
    </v-card-title>
    <v-card-subtitle>
      {{ repository.full_name }}
    </v-card-subtitle>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-card-actions>
      <v-list-item>
        <v-icon class="mr-2">mdi-laptop</v-icon>
        <v-list-item-content>
          <v-list-item-title>{{ repository.language }}</v-list-item-title>
        </v-list-item-content>
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-star</v-icon>
          <span class="subheading mr-2">{{ repository.stargazers_count }}</span>
          <v-icon class="mr-1">mdi-source-fork</v-icon>
          <span class="subheading mr-2">{{ repository.forks }}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Repository',
  props: {
    repository: {
      type: Object,
      default: new Object()
    }
  },
  data() {
    return {}
  },
  computed: {
    name() {
      return this.repository.name.length > 30
        ? this.repository.name.substring(0, 30) + '...'
        : this.repository.name
    },
    description() {
      if (this.repository.description === null) {
        return 'No description'
      } else if (this.repository.description.length > 50) {
        return this.repository.description.substring(0, 50) + '...'
      } else {
        return this.repository.description
      }
    }
  }
}
</script>

<style scoped></style>
