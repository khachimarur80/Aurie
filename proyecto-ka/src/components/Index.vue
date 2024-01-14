<template>
  <div id="app">
    <v-app-bar color="primary" flat prominent>
      <div class="text-h3 page-banner">
        Proyecto KA
      </div>
    </v-app-bar>
    <div id="contents">
      <div id="introduction" class="section">
        <div class="section-inner">
          <div class="text-h4 mt-5">
            Qué somos
          </div>
          <div class="text-body-1">
            Somos una pareja de jóvenes emprendedores apasionados de la tecnología, donde traemos soluciones digitales y tecnológicas para resolver problemas.
          </div>
        </div>
      </div>
      <div id="projects" class="section">
        <div class="section-inner">
          <div class="text-h4 mt-5">
            Qué hacemos
          </div>
          <ProjectCard v-for="(project, i) in projects" :project="project" :key="i">
          </ProjectCard>
        </div>
      </div>
      <div id="team" class="section">
        <div class="section-inner">
          <div class="text-h4 mt-5">
            Quienes somos
          </div>
          <PersonCard v-for="(person, i) in team" :person="person" :key="i">
          </PersonCard>
          <v-btn to="/team">
            Ver más
          </v-btn>
        </div>
      </div>
      <div id="contact" class="section">
        <div class="section-inner">
          <ContactForm>
          </ContactForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import PersonCard from '@/components/PersonCard.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'IndexView',

  components: {
    ProjectCard,
    PersonCard,
    ContactForm,
  },

  data: () => ({
    projects: [
      {
        title: 'MySetup',
        areas: ['Diseño',' 3D'],
        description: 'Nosotros hacemos real la setup de tus sueños, concretamos aquella idea que tienes en mente en un modelo 3D con un plan para que solo tengas que construir y disfrutar.',
        photo: '',
        enable: false,
      },
      {
        title: 'KA Webs',
        areas: ['Web'],
        description: 'Creamos la página para impulsar tu negocio, con un sistema de encuesta sencillo, y una comunicación ágil para que puedas trasmitir tus ideas sin problemas.',
        photo: '',
        enable: true,
      }
    ],
    team: [
      {
        name: 'Antón Loredo González ',
        age: 19,
        titulation: ['Técnico en Microinformatica y Redes (IES Tierrablanca)', ' Técnico Superior en Administración y Sistemas Informáticos en Red'],
        languages: ['Español', 'Inglés'],
      },
      {
        name: 'Kei Rodríguez Hachimaru',
        age: 18,
        titulation: 'Ingeniería Informática en la UCM',
        languages: ['Español', 'Inglés'],
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
  padding: 5px;
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
  aspect-ratio: 7/3;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-inner {
  height: 100%;
  aspect-ratio: 3/2;
  max-width: 1000px;
}
</style>