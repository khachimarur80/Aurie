<template>
    <div id="paquetes">
      <h1>Paquetes Kit digital</h1>
      <br>
      <div class="section-text">
        Ayudas Para Pymes: Aprovecha Las Ayudas De Hasta 12.000€ De Los Fondos Europeos Next Generation.
      </div><br><br><br>
      <div class="services-list" v-if="selectedProject.services">
        <div class="service" v-for="(service, i) in selectedProject.services.slice(0, currentMax)" :key="i">
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
          <button class="seemore" @click="service.seemore = !service.seemore" v-if="service.includes.length > 5">
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
                  <td>Precio (IVA inc.)</td>
                  <td>{{ service.price[0] }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="servicea" v-if="small">
          <br>
          <button class="button" v-if="more" @click="setCurrentMax(false)">
            Ver menos
          </button>
          <button class="button" v-else @click="setCurrentMax(true)">
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
              "name": "Sitio web básico",
              "description": "Dominio, hosting, diseño web.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Dominio y hosting",
                "Diseño web estructurado",
                "Adaptación a dispositivos",
                "Cumplimiento de accesibilidad",
                "Optimización SEO básica"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Presencia avanzada",
              "description": "Análisis, optimización SEO.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Análisis de palabras clave",
                "Análisis de competencia",
                "Optimización SEO On-Page",
                "Optimización SEO Off-Page",
                "Informes mensuales de seguimiento"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Comercio electrónico",
              "description": "Tienda online, métodos de pago.",
              "price": ["Hasta 2000 €"],
              "includes": [
              "Creación de tienda online",
              "Métodos de pago integrados",
              "Diseño responsive",
              "Cumplimiento de accesibilidad",
              "Optimización SEO",
              "Autogestionable",
              "Formas de envío configuradas"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Marketplace",
              "description": "Alta en plataformas de venta.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Estudio previo de alternativas",
                "Análisis de competencia",
                "Diseño y definición de estrategia",
                "Producción del catálogo",
                "Creación del contenido del listing",
                "Alta de referencias"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Oficina virtual",
              "description": "Colaboración, almacenamiento, compatibilidad.",
              "price": ["Hasta 250 €/usuario"],
              "includes": [
              "Colaboración en equipos",
              "Almacenar y compartir archivos",
              "Compatibilidad con dispositivos móviles",
              "Calendario y agenda"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Redes sociales",
              "description": "Estrategia, monitorización, publicaciones.",
              "price": ["Hasta 2500 €"],
              "includes": [
                "Social Media Plan",
                "Monitorización de redes sociales",
                "Optimización de la red/Auditoría Social Media",
                "Gestión de una red social",
                "Publicación de posts semanales"
              ],
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
          this.currentMax = 2
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
        this.currentMax = 2
      }
      else {
        this.currentMax = this.selectedProject.services.length

      }
    },
  }
  </script>
  
  <style scoped>
    .button {
      border: 1px solid transparent;
      background: none;
      color: var(--primary);
      font-size: 16px;
      border-radius: 5px;
      padding: 5px 8px 5px 8px;
      width: fit-content;
    }
    .button:hover {
      border-color: var(--primary);
    }
    .ver-mas {
      border: 2px solid var(--primary);
      border-radius: 8px;
      padding: 5px 10px 5px 10px;
      background: none;
      color: var(--primary);
      text-decoration: none;
      font-size: 18px;
      transition: all .2s ease-out;
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
    .section-text {
      margin: 0px;
      color: #E3E3E3;
      opacity: .7;
      width: 50%;
      margin-left: 15px;
      text-align: center;
    }
  #paquetes {
    padding: 20px;
    margin: 0px;
    margin-top: -5px;
    color: var(--background-dark);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .services-list {
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .service {
    border: 1px solid var(--primary);
    width: calc(25% - 20px);
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
    margin-left: 10%;
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
    .section-text {
      width: 90%;
    }
    .includes {
      margin-left: 10%;
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
  