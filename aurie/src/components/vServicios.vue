<template>
  <div id="servicios">
    <h1>Servicios</h1>
    <div class="projects">
      <button v-for="(project, i) in projects" :key="i" @click="setProject(project)" :class="['project', project==selectedProject ? 'selected' : '']"  :style="{'--color': project.color}">
        <img :src="project.icon" height="40px" width="40px" :alt="'Logo de '+project.name"/> {{ project.name }}
      </button>
    </div>
    <br>
    <div class="services-list" v-if="selectedProject.services">
      <div class="service" v-for="(service, i) in selectedProject.services" :key="i">
        <h2>
          {{ service.name }}
        </h2>
        <p class="description">
          {{ service.description }}
        </p>
        <div v-for="(include, i) in service.includes" :key="i" class="includes">
        <span class="check">
        </span>
        <p>
          {{ include }}
        </p>
        </div>
        <div style="flex: 1"></div>
        <p class="price">
          Desde {{ service.price }} €
        </p>
      </div>
    </div>
    <div class="no-services" v-if="selectedProject.name && !selectedProject.services">
      En desarrollo ...
    </div>
    <div class="no-services" v-if="!selectedProject.name">
      Selecciona un proyecto
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'vServicios',
  data: () => ({
    projects: [
      {
        name: 'KAwebs',
        icon: require('@/assets/logos/KAwebs.webp'),
        services: [
      {
        "name": "Paquete Básico",
        "description": "Un paquete perfecto para pequeñas empresas o startups que buscan un sitio web profesional a modo informativo.",
        "price": "200€ + 7€/mes",
        "includes": [
          "Diseño Moderno y Funcional",
          "Optimización de rendimiento",
          "SEO Básico",
          "Diseño responsivo",
          "1 cambio al mes",
          "Certificación SSL"
        ]
      },
      {
        "name": "Paquete Avanzado",
        "description": "Ideal para empresas que quieran aumentar sus ventas de manera online, de forma cómoda y sencilla.",
        "price": "260€ + 10€/mes",
        "includes": [
          "Diseño Moderno y Funcional",
          "Optimización de rendimiento",
          "SEO Avanzado",
          "Diseño responsivo",
          "5 cambio al mes",
          "Certificación SSL",
          "Página de contacto"
        ]
      },
      {
        "name": "Paquete Premium",
        "description": "Personaliza y dale tu estilo profesional a tu página web con nuestro Paquete Premium, una solución para empresas que buscan destacar en la web.",
        "price": "300€ + 12€/mes",
        "includes": [
          "Diseño Moderno y Funcional",
          "Optimización de rendimiento",
          "SEO BAvanzado",
          "Diseño responsivo",
          "Cambios ilimitados",
          "Certificación SSL",
          "Página de contacto",
          "Imágenes profesionales",
          "Soporte prioritario"
        ]
      },
        ],
        color: "#4285F4",
      },
      {
        name: 'MySetup',
        icon: require('@/assets/logos/Mysetup.webp'),
        services: false,
        color: "#7E57C2",
      }
    ],
    selectedProject: []
  }),
  methods: {
    setProject(project) {
      if (project != this.selectedProject) {
        this.selectedProject = project
      }
      else {
        this.selectedProject = []
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 30px;
  text-align: center;
}
h1 {
  text-align: center;
  color: var(--background);
  position: relative;
  text-align: center;
  margin-bottom: 60px;
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
#servicios {
  padding: 20px;
  margin: 0px;
  margin-top: -5px;
  color: var(--background-dark);
}
.services-list {
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.service {
  border: 1px solid var(--primary);
  max-width: calc(25% - 20px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  padding-top: 15px;
  background: var(--background);
}
.description {
  border-bottom: 1px solid var(--primary);
  border-top: 1px solid var(--primary);
  text-align: center;
  padding: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.includes {
  margin: 0px;
  width: calc(100% - 20px);
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 10px;
}
.check {
  height: 20px;
  width: 20px;
  background: url('@/assets/icons/check.svg');
  background-size: cover;
}
.includes p, .includes span {
  margin: 0;
}
.includes p {
  max-width: calc(100% - 40px);
}
.price {
  border-radius: 5px;
  background: var(--primary);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.projects {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.project {
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid var(--color);
  gap: 10px;
  background: var(--background);
  transition: background ease-in .15s;
  width: 150px;
  height: 55px;
}
.project img {
  background: var(--background);
  border-radius: 50%;
}

.project:hover {
  outline: 1px solid var(--color);
  cursor: pointer;
}
.selected {
  background: var(--color);
}

.no-services {
  width: 100h;
  display: flex;
  padding: 100px;
  justify-content: center;
  align-items: center;
  color: var(--background);
  opacity: .7;
}

@media only screen and (max-width: 670px) {
  .service {
    max-width: calc(100% - 20px);
    min-width: calc(100% - 20px);
  }
  h2 {
    margin-bottom: 30px;
  }
  .description {
    display: none;
  }
  .projects {
    padding: 0px;
  }
  .project {
    border-radius: 5px;
    padding-left: 3px;
    padding-right: 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 1px solid var(--color);
    gap: 5px;
    background: var(--background);
    transition: background ease-in .15s;
    width: 120px;
    height: 45px;
  }
  #servicios {
    transform: translateX(-20px);
  }
  .no-services {
    padding: 50px;
  }
}

@media only screen and (min-width: 671px) and (max-width: 980px) {
  .service {
    max-width: calc(33% - 20px);
  }
}
</style>
