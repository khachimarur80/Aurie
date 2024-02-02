<template>
  <div id="proyectos">
    <h1>Proyectos</h1>
    <div class="projects">
      <div class="project" v-for="(project, i) in projects" :key="i" :style="{'--color': project.color}" :id="project.title">
        <div class="project-contents">
          <div class="project-photo">
            <img :src="project.photo" height="100%" width="100%" :alt="'Logo de '+ project.title"/>
          </div>
          <div class="project-info">
            <h2>{{ project.title }}</h2>
            <hr style="width: 100%">
            <div style="display: flex; flex-wrap: wrap; align-items: center;">
              <span class="chip" v-for="(area,i) in project.areas" :key="i">{{ area }}</span> 
            </div>
            <div class="project-info-contents">
              <p>
                {{ project.description }}
              </p>
            </div>
            <a class="portafolio" v-if="project.site" :href="project.site" target="_blank">
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vProyectos',
  data: () => ({
    projects: [
      {
        title: 'MySetup',
        areas: ['Diseño',' 3D'],
        description: 'Hacemos realidad el setup de tus sueños. Concretamos aquella idea que tienes en mente en un modelo 3D con un plan para que solo tengas que construir y disfrutar.',
        photo: require("@/assets/logos/Mysetup.webp"),
        enable: false,
        color: "#7E57C2",
        site: "https://mysetup.es",
      },
      {
        title: 'KAwebs',
        areas: ['Web', 'Diseño'],
        description: 'Diseñamos y desarrollamos páginas webs personalizadas para potenciar la presencia digital de tu negocio, fusionando creatividad y tecnología de manera impactante.',
        photo: require("@/assets/logos/KAwebs.webp"),
        enable: true,
        color: "#4285F4",
      }
    ],
  }),
  mounted() {
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  color: var(--background);
}
h1::after {
  content: '';
  background: var(--background);
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
}
hr {
  border-color: var(--color);
}
#proyectos {
  margin-top: -5px;
  width: 100%;
}
.projects {
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.project {
  color: var(--color);
  user-select: none;
  display: flex;
  justify-content: center;
}
.project-contents {
  background: var(--background);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid var(--color);
  box-shadow: 2px 2px 6px 0px #777;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: calc(100% - 120px);
  height: 250px;
  aspect-ratio: 20/7  !important;
}
.project-photo {
  height: 100%;
  border: 1px solid var(--color);
  aspect-ratio: 1;
  border-radius: 5px;
  overflow: hidden;
  aspect-ratio: 1 !important;
}
.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.project-info h2 {
  width: 100%;
  text-align: left;
}
.project-info p {
  margin-left: 10px;
  font-size: 16px;
}

.project-info-contents {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.portafolio {
  padding: 5px;
  background: transparent ;
  color: var(--color);
  border: 1px solid var(--color);
  border-radius: 5px;
  width: 70px;
  text-decoration: none;
  text-align: center;
}

.portafolio:hover {
  background: var(--color);
  color: white;
}

.project-position {
  font-size: 14px;
  width: 100%;
  text-align: right;
  height: 0px;
}
.chip {
  font-size: 14px;
  background: var(--background);
  padding: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 5px;
  margin: 5px;
  white-space: nowrap;
  border: 1px solid var(--color);
  transform: rotateX(90deg);
  transition: transform .3s ease-out .3s;
}
.show .chip {
  transform: rotateX(0deg);
}
h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 30px;
  color: var(--background-dark);
  opacity: 0;
  transition: opacity .3s ease-out;
}
.show h2 {
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .project-contents {
    width: calc(100%);
    flex-direction: column;
    height: 500px;
    align-items: center;
  }
  .project {
    width: calc(100% + 20px);
    paddign: 0px;
    margin: 0px;
  }
  .project-info-contents {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  #proyectos {
    transform: translateX(-20px) !important;
  }
}
@media only screen and (min-width: 601px) and (max-width: 800px) {
  .project-contents {
    width: 500px;
    flex-direction: column;
    height: 500px;
    align-items: center;
  }
  .project-info-contents {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

#MySetup {
  margin-bottom: 50px;
}

#MySetup .project-photo {
  transform: scale(.3);
  transition: transform .3s ease-out .3s;
  opacity: 0;
}
#MySetup.show .project-photo {
  opacity: 1;
  transform: scale(1);
}
#KAwebs .project-photo {
  transform: scale(.3);
  transition: transform .3s ease-out .3s;
  opacity: 0;
}
#KAwebs.show .project-photo {
  opacity: 1;
  transform: scale(1);
}



#MySetup .project-contents {
  transform: translateY(300px);
  transition: transform .3s ease-out;
  opacity: 0;
  pointer-events: none;
}
#MySetup.show .project-contents {
  opacity: 1;
  transform: translateY(0px);
  pointer-events: auto;
}

#KAwebs .project-contents {
  transform: translateY(300px);
  opacity: 0;
  transition: transform .3s ease-out;
  pointer-events: none;
}
#KAwebs.show .project-contents {
  opacity: 1;
  transform: translateY(0px);
  pointer-events: auto;
}

</style>
