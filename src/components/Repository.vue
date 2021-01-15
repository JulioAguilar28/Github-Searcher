<template>
  <v-card class="mx-auto my-5" color="grey lighten-5" width="90%" height="90%">
    <v-card-title>
      <span class="title font-weight-regular">{{ repositoryName }}</span>
    </v-card-title>
    <v-card-subtitle>
      {{ fullName }}
    </v-card-subtitle>
    <v-card-text>
      {{ shortDescription }}
    </v-card-text>
    <v-card-actions>
      <v-list-item>
        <v-icon class="mr-2">mdi-laptop</v-icon>
        <v-list-item-content>
          <v-list-item-title>{{ language }}</v-list-item-title>
        </v-list-item-content>
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-star</v-icon>
          <span class="subheading mr-2">{{ stars }}</span>
          <v-icon class="mr-1">mdi-source-fork</v-icon>
          <span class="subheading mr-2">{{ forks }}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import truncateText from '../utils'

export default {
  name: 'Repository',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    fullName: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: ''
    },
    stars: {
      type: Number,
      default: 0
    },
    forks: {
      type: Number,
      default: 0
    }
  },
  computed: {
    repositoryName() {
      return truncateText(this.name, 30)
    },
    shortDescription() {
      if (this.description === '') {
        return 'No description'
      }

      return truncateText(this.description, 50)
    }
  }
}
</script>

<style scoped></style>
