<template>
  <div id="app">
    <v-app-bar color="primary" flat prominent>
      <div class="text-h3 page-banner">
        Aurie
      </div>
    </v-app-bar>
    <div id="contents">
      <div id="team" class="section">
        <div class="section-inner">
          <div class="text-h4 my-5 d-flex">
            <span>El equipo</span>
          </div>
          <v-divider class="mb-5"></v-divider>
          <div class="team">
            <PersonCard v-for="(person, i) in team" :person="person" :key="i">
            </PersonCard>
          </div>
        </div>
      </div>
      <v-footer color="primary">
        <v-card flat tile class="text-center" width="100%" color="primary" light>
            <v-card-text>
              <v-btn v-for="social in socials" :key="social.icon" class="mx-4" icon :href="social.href">
                <v-icon size="24px">
                  {{ social.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="pt-0">
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
              {{ new Date().getFullYear() }} — <strong>Aurie</strong>
            </v-card-text>
          </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
import PersonCard from '@/components/PersonCard.vue'

export default {
  name: 'TeamView',

  components: {
    PersonCard,
  },

  data: () => ({
    KAicon: require("@/assets/images/sample.png"),
    socials: [
      {
        href: "#",
        icon: "mdi-twitter",
        alt: "Twitter icon",
      },
      {
        href: "#",
        icon: "mdi-linkedin",
        alt: "LinkedIn icon",
      },
      {
        href: "#",
        icon: "mdi-instagram",
        alt: "Instagram icon",
      },
    ],
    team: [
      {
        name: 'Antón Loredo González ',
        age: 19,
        titulation: ['Microinformatica y Redes', ' Administración y Sistemas Informáticos en Red'],
        languages: ['Español', 'Inglés'],
        photo: require("@/assets/images/Retrato_Anton.png"),
        lazyPhoto: require("@/assets/lazy-images/Retrato_Anton.png"),
        portofolio: null,
      },
      {
        name: 'Kei Rodríguez Hachimaru',
        age: 18,
        titulation: ['Ingeniería Informática UCM'],
        languages: ['Español', 'Inglés'],
        photo: require("@/assets/images/Retrato_Kei.png"),
        lazyPhoto: require("@/assets/lazy-images/Retrato_Kei.png"),
        portofolio: "https://kei-portofolio.vercel.app",
      }
    ],
  }),

  methods: {
  }
};
</script>
<style scoped>
body, html {
  margin: 0;
  padding: 0;
  width: 100h;
  height: 100vh;
  overflow: hidden;
}
::-webkit-scrollbar {
  height: 0;
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: var(--v-secondary-base);
  border-radius: 5px;
}
#app {
  height: 100vh;
  width: 100h;
}
#contents {
  height: calc(100% - 128px);
  overflow: scroll;
}
.page-banner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.section-inner {
  width: 80%;
}
.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>