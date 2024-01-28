<template>
  <div id="proyectos">
    <h1>Proyectos</h1>
    <div class="projects">
      <div class="project" v-for="(project, i) in projects" :key="i" :style="{'--color': project.color}">
        <div class="project-photo">
          <img :src="project.photo" height="100%" width="100%" alt="Retrato Hachimaru Kei"/>
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
</template>

<script>
export default {
  name: 'vProyectos',
  data: () => ({
    projects: [
      {
        title: 'MySetup',
        areas: ['Diseño',' 3D'],
        description: 'Nosotros hacemos real el setup de tus sueños, concretamos aquella idea que tienes en mente en un modelo 3D con un plan para que solo tengas que construir y disfrutar.',
        photo: require("@/assets/Mysetup.png"),
        enable: false,
        color: "#7E57C2",
        site: "https://my-setup.vercel.app",
      },
      {
        title: 'KA Webs',
        areas: ['Web', 'Diseño'],
        description: 'Diseñamos y desarrollamos soluciones web personalizadas para potenciar la presencia en línea de tu negocio, fusionando creatividad y tecnología de manera impactante.',
        photo: require("@/assets/KAwebs.png"),
        enable: true,
        color: "#304FFE",
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
  margin-bottom: 40px;
  position: relative;
  color: var(--text);
}
h1::after {
  content: '';
  background: var(--background-dark);
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
  background: var(--primary);
  padding: 20px;
}
.projects {
  display: flex;
  justify-content: center;
  width: calc(100% - 40px);
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;
}
.project {
  border: 1px solid var(--color);
  border-radius: 10px;
  padding: 20px;
  max-width: calc(100% - 120px);
  height: 250px;
  aspect-ratio: 20/7  !important;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background: var(--background);
  color: var(--color);
  user-select: none;
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
  font-size: 18px;
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
  background: var(--primary);
  padding: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 5px;
  margin: 5px;
  white-space: nowrap;
}

h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 30px;
  color: var(--background-dark)
}

@media only screen and (max-width: 800px) {
  .project {
    width: 100%;
    flex-direction: column;
    height: 600px;
    align-items: center;
  }
  .projects {
    width: 100%;
    padding: 0px;
  }
  .project-photo {
    width: 250px;
    height: 250px;
  }
  #proyectos {
    padding: 0px;
  }
}
</style>
