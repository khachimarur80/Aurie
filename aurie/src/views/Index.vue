<template>
  <div id="app">
    <vNavbar/>
    <div id="contents">
      <div id="introduction" class="section">
        <div class="section-inner">
          <div class="text-h4 my-5 section-title">
            Quienes somos
          </div>
          <v-divider class="mb-5"></v-divider>
          <div class="introduction-contents">
            <div class="text-body-1 introduction-text">
              <div class="introduction-text-inner">
                Somos un equipo dedicado a la excelencia digital. Con una visión creativa y enfoque técnico, creamos soluciones web innovadoras que impulsan el éxito de tu negocio. Descubre el equipo detrás de tu presencia en línea excepcional.
              </div>
            </div>
            <div class="introduction-logo">
              <v-img :src="KAiconInverted" height="100%" width="100%" contain>
              </v-img>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" class="section">
        <div class="section-inner">
           <div class="text-h4 my-5 d-flex section-title">
            <span>Nuestros proyectos</span>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary" to="/about">
              Ver más
            </v-btn>
          </div>
          <v-divider class="mb-5"></v-divider>
          <ProjectCard v-for="(project, i) in projects" :project="project" :key="i">
          </ProjectCard>
        </div>
      </div>
      <div id="team" class="section">
        <div class="section-inner">
          <div class="text-h4 my-5 d-flex section-title">
            <span>El equipo</span>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary" to="/team">
              Ver más
            </v-btn>
          </div>
          <v-divider class="mb-5"></v-divider>
          <div class="team">
            <PersonCard v-for="(person, i) in team" :person="person" :key="i">
            </PersonCard>
          </div>
        </div>
      </div>
      <PageFooter/>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import PersonCard from '@/components/PersonCard.vue'
import vNavbar from '@/components/vNavbar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'IndexView',

  components: {
    ProjectCard,
    PersonCard,
    vNavbar,
    PageFooter,
  },

  data: () => ({
    KAiconInverted: require("@/assets/images/sampleInverted.png"),
    projects: [
      {
        title: 'MySetup',
        areas: ['Diseño',' 3D'],
        description: 'Nosotros hacemos real el setup de tus sueños, concretamos aquella idea que tienes en mente en un modelo 3D con un plan para que solo tengas que construir y disfrutar.',
        photo: require("@/assets/images/Mysetup.png"),
        lazyPhoto: require("@/assets/lazy-images/Mysetup.png"),
        enable: false,
        color: "purple lighten-1",
        site: "https://my-setup.vercel.app",
      },
      {
        title: 'KA Webs',
        areas: ['Web', 'Diseño'],
        description: 'Diseñamos y desarrollamos soluciones web personalizadas para potenciar la presencia en línea de tu negocio, fusionando creatividad y tecnología de manera impactante.',
        photo: require("@/assets/images/KAwebs.png"),
        lazyPhoto: require("@/assets/lazy-images/KAwebs.png"),
        enable: true,
        color: "blue",
      }
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
<style>
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
  font-size: 40px;
  transform: translateX(-40px);
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
.introduction-logo {
  height: 300px;
  aspect-ratio: 1;
}
.introduction-contents {
  display: flex;
  width: 100h;
}
.introduction-text {
  display: flex;
  justify-content: center;
  flex: 1;
}
.introduction-text-inner {
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
}

@media only screen and (max-width: 500px) {
  .introduction-contents {
    flex-direction: column-reverse;
  }
  .introduction-logo {
    height: 200px;
    aspect-ratio: 1 !important;
  }
  .introduction-text-inner {
    width: 100%;
    font-size: 16px;
  }
  .section-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .team {
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    gap: 10px;
  }
  .page-banner {
    font-size: 40px;
  }
}

@media only screen and (min-width: 501px) and (max-width: 800px) {
  .section-inner {
    width: 80%;
  }
  .introduction-contents {
    height: 250px;
    display: flex;
    align-items: center;
  }
  .introduction-text-inner {
    width: 80%;
    font-size: 16px;
  }
  .introduction-logo {
    height: 200px;
    aspect-ratio: 1 !important;
  }
}

@media only screen and (min-width: 801px) {
  .introduction-text-inner {
    max-width: 600px; 
  }
}
</style>