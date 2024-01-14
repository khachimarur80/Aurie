<template>
  <v-card :disabled="!project.enable" class="d-flex my-3 align-center container">
    <div class="image-container">
      <v-img :src="project.photo" :lazy-src="project.lazyPhoto" height="100%" width="100%">
      </v-img>
    </div>
    <div>
      <div class="title-container">
        <v-card-title>
          <div class="text-h4">
            {{ project.title }}
          </div>
        </v-card-title>
        <div class="chip-list">
          <v-chip v-for="(area, i) in project.areas" :key="i" dense small class="ma-1">
            {{ area }} 
          </v-chip>
        </div>
      </div>
      <div class="text-container">
        <v-card-text>
          {{ project.description }}
        </v-card-text>
        <v-card-actions class="pr-8">
          <v-spacer>
          </v-spacer>
          <v-btn outlined :color="project.color" v-if="project.site">
            Ver proyecto
          </v-btn>
        </v-card-actions>
      </div>
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
<style scoped>
.chip-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 20px;
}
.image-container {
  aspect-ratio: 1;
  height: 300px;
}
.text-container {
  width: 100%;
  text-align: justify;
}
.container {
  position: relative;
}

@media only screen and (max-width: 500px) {
  .container {
    flex-direction: column;
  }
  .image-container {
    height: 180px;
    width: 180px;
  }
}

@media only screen and (min-width: 501px) and (max-width: 800px) {
  .image-container {
    height: 180px;
    width: 180px;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 35px));
  }
  .text-container {
    width: 50%;
    margin-left: 50%;
  }
  .title-container {
    height: 70px;
    display: flex;
    align-items: center;
  }
  .chip-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 0px;
  }
}

@media only screen and (min-width: 801px) {
  .introduction-text-inner {
    max-width: 600px; 
  }
}
</style>