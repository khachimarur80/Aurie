<template>
  <v-card class="flip-card" outlined>
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <v-img :src="person.photo" :lazy-src="person.lazyPhoto" height="100%" width="100%">
        </v-img>
      </div>
      <div class="flip-card-back">
        <v-card-title>
          <div class="person-name">
            {{ person.name }}
          </div>
        </v-card-title>
        <div class="person-info">
          <div class="text-h5 my-2">
            Titulacion
          </div>
          <div class="chip-list mb-4">
            <v-chip v-for="(title, i) in person.titulation" :key="i" dense small class="ma-1">
              {{ title }} 
            </v-chip>
          </div>
          <div class="text-h5">
            Idiomas
          </div>
          <div class="chip-list mb-4">
            <v-chip v-for="(language, i) in person.languages" :key="i" dense small class="ma-1">
              {{ language }} 
            </v-chip>
          </div>
          <div class="text-h5 mb-4">
            Edad: {{ person.age }}
          </div>
          <div class="see-portofolio" v-if="person.portofolio">
            <v-spacer>
            </v-spacer>
            <v-btn @click="openExternalLink(person.portofolio)" color="secondary" outlined>
              Portofolio
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props : {
    person : {
      required: true
    }
  },
  methods: {
    openExternalLink(url) {
      window.open(url, '_blank');
    }
  },
  data: () => ({
  }),
};
</script>
<style scoped>
.flip-card {
  background-color: transparent;
  width: 350px;
  height: 350px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
.flip-card-front {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.person-name {
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.person-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-top: 0px;
}
.chip-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.see-portofolio {
  display: flex;
  align-items: flex-end;
  width: 100%;
}

@media only screen and (max-width: 500px) {
  .flip-card {
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1 !important;
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
