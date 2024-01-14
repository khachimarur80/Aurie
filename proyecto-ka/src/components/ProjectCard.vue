<template>
  <v-card :disabled="!project.enable">
    <v-card-title>
      {{ project.title }}
    </v-card-title>
    <v-card-subtitle class="ml-1">
      {{ project.areas }}
    </v-card-subtitle>
    <v-card-text>
      {{ project.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',

  props : {
    project : {
      required: true
    }
  },

  data: () => ({
  }),
};
</script>
