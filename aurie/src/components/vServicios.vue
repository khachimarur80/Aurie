<template>
  <div id="servicios">
    <h1>Servicios</h1>
    <div>
      ¿Estás interesado en alguno de nuestros servicios? Contáctanos para una consulta totalmente gratuita con el objetivo de mejorar tu experiencia.
    </div><br>
    <a class="ver-mas" href="/contacto">
      Consúltanos
    </a>
    <br><br>
    <div class="services-list" v-if="selectedProject.services">
      <div :class="['service', service.showPrice ? 'more' : '']" v-for="(service, i) in selectedProject.services.slice(0, currentMax)" :key="i">
        <div class="service-img" :style="{'background' : 'url('+service.image+')'}">
        </div>
        <div class="description">
          <div class="service-name">
            {{ service.name }}
          </div>
          <div class="service-description" v-if="service.showPrice">
            {{ service.description }}
          </div>
          <button v-if="!service.showPrice" @click="service.showPrice = true">
            Ver más
          </button>
          <button v-else  @click="service.showPrice = false">
            Ver menos
          </button>
        </div>
      </div>
      <div class="service" v-if="small">
        <button v-if="more" @click="setCurrentMax(false)">
          Ver menos
        </button>
        <button v-else @click="setCurrentMax(true)">
          Ver más
        </button>
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
    small: false,
    more: false,
    currentMax: 0,
    projects: [
      {
        name: 'KAwebs',
        icon: require('@/assets/logos/KAwebs.webp'),
        services: [
          {
            "name": "Diseño Web",
            "description":  "Crea una presencia digital con diseño web profesional y atractivo para cautivar a tus visitantes.",
            "price": "",
            "image": require("@/assets/vectors/diseño-web/4300580.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "eCommerce",
            "description":  "Lleva tu negocio al siguiente nivel con una plataforma de comercio electrónico robusta y escalable.",
            "price": "",
            "image": require("@/assets/vectors/ecommerce/6509976.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "Hosting",
            "description":  "Confía en nuestra infraestructura de hosting de alto rendimiento para alojar tu sitio web y aplicaciones en línea.",
            "price": "",
            "image": require("@/assets/vectors/hosting/25087.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "Multidioma",
            "description":  "Amplía tu alcance global con una plataforma web multilingüe que conecta con audiencias de todo el mundo.",
            "price": "",
            "image": require("@/assets/vectors/multidioma/20945116.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "Optimización Web",
            "description":  "Mejora el rendimiento y la visibilidad de tu sitio web en los motores de búsqueda con nuestra estrategia de optimización web.",
            "price": "",
            "image": require("@/assets/vectors/optimizacion-web/2903846.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "Pago Online",
            "description":  "Facilita las transacciones en línea con nuestro sistema de pago seguro y fácil de usar.",
            "price": "",
            "image": require("@/assets/vectors/pago-online/60019.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "SEO Avanzado",
            "description":  "Aumenta la visibilidad y el tráfico orgánico de tu sitio web con nuestra estrategia de SEO avanzado.",
            "price": "",
            "image": require("@/assets/vectors/seo-avanzado/32010.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "SEO Básico",
            "description":  "Establece una base sólida para tu estrategia de SEO con nuestro servicio básico.",
            "price": "",
            "image": require("@/assets/vectors/seo-basico/3203.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "Web Responsive",
            "description":  "Garantiza una experiencia de usuario óptima en todos los dispositivos con un diseño web responsive.",
            "price": "",
            "image": require("@/assets/vectors/web-responsive/7438219.webp"),
            "showPrice": false,
            "seemore": false
          },
          {
            "name": "Autogestionable",
            "description":  "Permite a tu empresa realizar cambios de contenido en su sitio web de manera rápida y sencilla, sin depender de nosotros.",
            "price": "Desde 100 €",
            "image": require("@/assets/vectors/autogestionable/20943879.webp"),
            "showPrice": false,
            "seemore": false
          }
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
    setCurrentMax(val) {
      if (val) {
        this.currentMax = this.selectedProject.services.length
      }
      else {
        this.currentMax = 3
      }
      this.more = val
    },
    scrollToSection(item) {
      let home = document.getElementById('home')
      let target = document.getElementById(item.toLowerCase())
      home.scrollTop = target.offsetTop - 100
    },
    setProject(project) {
      if (project != this.selectedProject) {
        this.selectedProject = project
      }
      else {
        this.selectedProject = []
      }
    },
    serviceIncludes(service) {
      if (service.seemore) {
        return service.includes
      }
      else {
        return service.includes.slice(0,5)
      }
    }
  },
  mounted() {
    this.selectedProject = this.projects[0]
    if (parseInt(window.innerWidth)<500) {
      this.small = true
      this.currentMax = 3
    }
    else {
      this.currentMax = this.selectedProject.services.length

    }
  },
}
</script>

<style scoped>
.ver-mas {
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 5px 10px 5px 10px;
  background: none;
  color: var(--primary);
  text-decoration: none;
  font-size: 18px;
  transition: all .2s ease-out;
  z-index: 3;
}
.ver-mas:hover {
  color: #171717;
  background-color: var(--primary);
  font-weight: bold;
}
h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 30px;
  text-align: center;
}
h1 {
    color: rgb(253, 76, 56);
    font-size: 35px;
    margin: 0px;
    font-weight: 900;
    text-shadow: 0px 0px 4px rgb(253, 76, 56);
    position: relative;
    margin-top: 20px;
    margin-bottom: 80px;
    text-align: center;
}
h1::after {
    content: '';
    background: rgb(253, 76, 56);
    height: 4px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.services-list {
  width: 100%;
  align-items: center;
  max-width: 1200px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}
.service {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  position: relative;
  overflow: hidden;
  gap: 15px;
}
.more .service-img {
  height: 100px;
  filter: blur(1px);
  opacity: .75;
}
.more .description {
  height: 300px;
  border-color: var(--primary);
  justify-content: space-around;
}
.more button {
  color: var(--accent);
}
.more button:hover {
  border-color: var(--accent);
}
.service-img {
  height: 300px;
  width: 100%;
  background-size: cover !important;
  border-radius: 20px 20px 10px 10px;
  transition: all .3s ease-out;
  background-position: center center !important;
}
.service-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
button {
  border: 1px solid transparent;
  background: none;
  color: var(--primary);
  font-size: 16px;
  border-radius: 5px;
  padding: 5px 8px 5px 8px;
  width: fit-content;
}
button:hover {
  border-color: var(--primary);
}
.description {
  background: #262626;
  text-align: center;
  padding: 5px;
  border-radius: 10px 10px 20px 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  transition: all .3s ease-out;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.includes {
  margin: 0px;
  width: calc(100% - 20px);
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 10px;
  margin-left: 20%;
}
.includes-container {
  width: 100%;
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
.show-price {
  border-radius: 5px;
  color: var(--primary);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: var(--background);
  border: 1px solid var(--primary);
  transition: background .3s ease-out;
}
.show-price:hover {
  background: var(--primary);
  color: white;
  cursor: pointer;
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

table.show {
  transform: translateY(0px);
  opacity: 1;
  pointer-events: auto;
}

table {
  outline: 1px solid #ddd;
  padding: 5px;
  border-radius: 10px;
  position: absolute;
  bottom: 80px;
  left: 5%;
  width: 90%;
  background: var(--background);
  box-shadow: 1px 2px 3px 0px #444;
  transform: translateY(calc(100% + 20px));
  opacity: 0;
  transition: opacity .3s ease-out, transform .3s ease-out;
}
td:nth-child(2) {
  text-align: end;
}
td:nth-child(1) {
  font-weight: bolder;
  color: #888;
}
td {
  padding: 5px;
  padding-bottom: 2px;
}
tr {
  border: 1px solid red;
}

.seemore {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  background: none;
  font-size: 16px;
  padding: 6px 12px 6px 12px;
  border-radius: 5px;
  color: var(--accent);
}
.seemore:hover {
  background: #eee;
  cursor: pointer;
}

@media only screen and (max-width: 670px) {

}

@media only screen and (min-width: 671px) and (max-width: 980px) {
  .service {
    max-width: calc(33% - 20px);
  }
}
</style>
