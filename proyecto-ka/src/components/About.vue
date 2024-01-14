<template>
  <div id="app">
    <v-app-bar color="primary" flat prominent>
      <div class="text-h3 page-banner">
        Proyecto KA
      </div>
    </v-app-bar>
    <div id="projects">
      <div class="section" v-for="(project, i) in projects" :key="i">
        <div class="section-inner" >
           <div class="text-h4 my-5 d-flex">
            <span>{{ project.title }}</span>
            <v-spacer></v-spacer>
            <v-btn outlined :color="project.color" :disabled="!project.site">
              Ver más
            </v-btn>
          </div>
          <v-divider class="mb-5"></v-divider>
          <ProjectCard :project="project">
          </ProjectCard>
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
              {{ new Date().getFullYear() }} — <strong>MySetup</strong>
            </v-card-text>
          </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'AboutView',

  components: {
    ProjectCard
  },

  data: () => ({
    socials: [
      {
        href: "#",
        icon: "mdi-facebook",
        alt: "Facebook icon",
      },
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
    projects: [
      {
        title: 'MySetup',
        areas: ['Diseño',' 3D'],
        description: 'Nosotros hacemos real la setup de tus sueños, concretamos aquella idea que tienes en mente en un modelo 3D con un plan para que solo tengas que construir y disfrutar.',
        photo: require("@/assets/images/Mysetup.png"),
        lazyPhoto: require("@/assets/lazy-images/Mysetup.png"),
        enable: true,
        color: "purple lighten-1",
        site: null,
      },
      {
        title: 'KA Webs',
        areas: ['Web'],
        description: 'Creamos la página para impulsar tu negocio, con un sistema de encuesta sencillo, y una comunicación ágil para que puedas trasmitir tus ideas sin problemas.',
        photo: require("@/assets/images/sample.png"),
        lazyPhoto: require("@/assets/lazy-images/sample.png"),
        enable: true,
        color: "blue",
        site: null,
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
#projects {
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
  max-width: 800px;
  min-width: 400px;
}
</style>