<template>
  <v-card :disabled="!project.enable" class="d-flex my-3">
    <div style="aspect-ratio: 1; height: 300px">
      <v-img :src="project.photo" :lazy-src="project.lazyPhoto" height="100%" width="100%">
      </v-img>
    </div>
    <div>
      <v-card-title>
        <div class="text-h4">
          {{ project.title }}
        </div>
      </v-card-title>
      <div class="chip-list mb-4">
        <v-chip v-for="(area, i) in project.areas" :key="i" dense small class="ma-1">
          {{ area }} 
        </v-chip>
      </div>
      <v-card-text>
        {{ project.description }}
      </v-card-text>
      <v-card-actions class="pr-8">
        <v-spacer>
        </v-spacer>
        <v-btn outlined :color="project.color">
          Ver proyecto
        </v-btn>
      </v-card-actions>
    </div>
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
<style>
.chip-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 20px;
}
</style>