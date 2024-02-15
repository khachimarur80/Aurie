<template>
  <div id="servicios">
    <h1>Servicios</h1>
    <br>
    <div class="services-list" v-if="selectedProject.services">
      <div class="service" v-for="(service, i) in selectedProject.services" :key="i">
        <h2>
          {{ service.name }}
        </h2>
        <p class="description">
          <span class="inner">
            {{ service.description }}
          </span>
        </p>
        <div class="includes-container">
          <div v-for="(include, i) in serviceIncludes(service)" :key="i" class="includes">
          <span class="check">
          </span>
          <p>
            {{ include }}
          </p>
          </div>
        </div>
        <button class="seemore" @click="service.seemore = !service.seemore">
          <span v-if="!service.seemore">Ver más</span>
          <span v-else>Ver menos</span>
        </button>
        <div style="flex: 1"></div>
        <p class="show-price" @click="service.showPrice = !service.showPrice" v-if="service.price.length">
          Ver precio
        </p>
        <p class="show-price" @click="scrollToSection('contacto')" v-else>
          Consúltanos
        </p>
        <div class="price">
          <table :class="[service.showPrice ? 'show' : '']">
            <tr>
                <td>Plan</td>
                <td>{{ service.price[0] }}</td>
            </tr>
            <tr>
                <td>Mantenimiento</td>
                <td>{{ service.price[1] }}</td>
            </tr>
            <tr>
                <td>PVP final</td>
                <td>{{ service.price[2] }}</td>
            </tr>
            <tr>
                <td>PVP final + IVA</td>
                <td>{{ service.price[3] }}</td>
            </tr>
            <tr>
                <td>Bono anual</td>
                <td>{{ service.price[4] }}</td>
            </tr>
            <tr>
                <td>Bono + IVA</td>
                <td>{{ service.price[5] }}</td>
            </tr>
          </table>
        </div>
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
            "price": ["201,26 €", "8 €/mes", "289,26 €", "350 €", "265,26 € (3 meses gratis)", "320,96 €"],
            "includes": [
              "Diseño Moderno y Funcional",
              "Optimización de rendimiento",
              "SEO Básico",
              "Diseño responsivo",
              "1 cambio al mes",
              "Certificación SSL"
            ],
            "showPrice": false,
            "seemore": false,
          },
          {
            "name": "Paquete Avanzado",
            "description": "Ideal para empresas que quieran aumentar sus ventas de manera online, de forma cómoda y sencilla.",
            "price": ["262 €", "10 €/mes", "372 €", "450 €", "352 € (2 meses gratis)", "425,92 €"],
            "includes": [
              "Diseño Moderno y Funcional",
              "Optimización de rendimiento",
              "SEO Avanzado",
              "Diseño responsivo",
              "Redes Sociales",
              "5 cambio al mes",
              "Certificación SSL",
              "Formulario de contacto"
            ],
            "showPrice": false,
            "seemore": false,
          },
          {
            "name": "Paquete Premium",
            "description": "Personaliza y dale tu estilo profesional a tu página web con nuestro Paquete Premium, una solución para empresas que buscan destacar en la web.",
            "price": ["297,76 €", "12 €/mes", "429,76 €", "520 €", "405,76 € (2 meses gratis)", "490,91 €"],
            "includes": [
              "Diseño Moderno y Funcional",
              "Optimización de rendimiento",
              "SEO Avanzado",
              "Diseño responsivo",
              "Redes Sociales",
              "Cambios ilimitados",
              "Certificación SSL",
              "Formulario de contacto",
              "Imágenes profesionales",
              "Soporte prioritario",
              "Email profesional"
            ],
            "showPrice": false,
            "seemore": false,
          },
          {
            "name": "Paquete Personalizado",
            "description": "Esta solución más personalizada usa todas las herramientas para hacer que tu sitio web destaque y puedas desarrollar tu actividad más eficientemente.",
            "price": [""],
            "includes": [
              "Diseño Moderno y Funcional",
              "Optimización de rendimiento",
              "SEO Avanzado",
              "Diseño responsivo",
              "Redes Sociales",
              "Cambios ilimitados",
              "Certificación SSL",
              "Formulario de contacto",
              "Imágenes profesionales",
              "Soporte prioritario",
              "Email profesional",
              "Estadísticas web",
              "Página de reserva",
              "Integración de bases de datos",
              "Implementación de backend",
              "Plataforma de pago online",
              "Autenticación de usuarios",
              "Interfaz de ventas"
            ],
            "showPrice": false,
            "seemore": false,
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
  },
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
  position: relative;
  color: var(--text);
}
h1::after {
  content: '';
  background: var(--text);
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
  min-width: 360px;
  position: relative;
  overflow: hidden;
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
  pointer-events: none;
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
  .includes {
    margin-left: 0%;
  }
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
