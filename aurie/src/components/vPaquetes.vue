<template>
    <div id="paquetes">
      <div class="hand">
      </div>
      <div class="hand2">
      </div>
      <h1>KIT DIGITAL</h1>
      <div style="width: 100%; display: flex; justify-content: center">
        <img id="bannerkitdigital" src="@/assets/images/Logo-digitalizadores.png"/>
      </div>
      <br><br><br><br>
      <div class="services">
        <h3>SERVICIOS KIT DIGITAL</h3>
        <div class="services-list">
          <div class="service">
            <div class="service-header">
              <p>Sitio Web Básico</p><a class="redirect" href="/kit-digital#web"></a>
            </div>
            <div class="line"></div>
            <p t>Dominio, hosting, diseño web</p>
            <img src="@/assets/icons/domain.png"/>
            <a class="info" href="/kit-digital#web"> + INFO</a>
          </div>
          <div class="service">
            <div class="service-header">
              <p>Presencia Avanzada</p><a class="redirect" href="/kit-digital#avanzada"></a>
            </div>
            <div class="line"></div>
            <p t>Análisis, optimización y posicionamiento</p>
            <img src="@/assets/icons/web-page.png"/>
            <a class="info" href="/kit-digital#avanzada"> + INFO</a>
          </div>
          <div class="service">
            <div class="service-header">
              <p>Comercio Electrónico</p><a class="redirect" href="/kit-digital#ecommerce"></a>
            </div>
            <div class="line"></div>
            <p t>Tienda online, métodos de pago</p>
            <img src="@/assets/icons/digital-marketing.png"/>
            <a class="info" href="/kit-digital#ecommerce"> + INFO</a>
          </div>
        </div>
        <div class="services-list">
          <div class="service">
            <div  class="service-header">
              <p>Marketplace</p><a class="redirect" href="/kit-digital#marketplace"></a>
            </div>
            <div class="line"></div>
            <p t>Alta en plataformas de venta, estudio y diseño del catálogo.</p>
            <img src="@/assets/icons/online-shopping.png"/>
            <a class="info" href="/kit-digital#marketplace"> + INFO</a>
          </div>
          <div class="service">
            <div  class="service-header">
              <p>Oficina Virtual</p><a class="redirect" href="/kit-digital#oficina"></a>
            </div>
            <div class="line"></div>
            <p t>Herramientas para ayudar a gestionar trabajos, proyectos, equipo ...</p>
            <img src="@/assets/icons/information.png"/>
            <a class="info" href="/kit-digital#oficina"> + INFO</a>
          </div>
          <div class="service">
            <div  class="service-header">
              <p>Redes Sociales</p><a class="redirect" href="/kit-digital#redes"></a>
            </div>
            <div class="line"></div>
            <p t>Estragetia, monitorización, publicaciones.</p>
            <img src="@/assets/icons/social-media.png"/>
            <a class="info" href="/kit-digital#redes"> + INFO</a>
          </div>
        </div>
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
              "image": require('@/assets/vectors/sitio-web-basico/v954-mo-02.webp'),
              "id": 'basica',
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
              "seemore": false,
            },
            {
              "image": require('@/assets/vectors/sitio-web-avanzado/765215--01.webp'),
              "id": 'avanzada',
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
              "image": require('@/assets/vectors/comercio-electronico/Big_phone_with_cart.webp'),
              "id": "ecommerce",
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
              "image": require('@/assets/vectors/marketplace/6666912.webp'),
              "id": "marketplace",
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
              "image": require('@/assets/vectors/oficina-virtual/5216292.webp'),
              "id": "oficina",
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
              "image": require('@/assets/vectors/redes-sociales/4950546.webp'),
              "id": "redes",
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
  a {
    text-decoration: none;
  }
  .hand {
    position: absolute;
    width: 25%;
    aspect-ratio: 3/4;
    background: url('@/assets/images/hand.webp');
    background-size: cover;
    transform: translateX(-30%) rotateZ(90deg) rotateY(180deg);
    top: 200px;
    left: 0px;
    filter: brightness(.7);
    display: none;
  }
  .hand2 {
    position: absolute;
    width: 25%;
    aspect-ratio: 3/4;
    background: url('@/assets/images/hand.webp');
    background-size: cover;
    transform: translateX(30%) rotateZ(-90deg) rotateY(180deg);
    bottom: -100px;
    right: 0px;
    filter: brightness(.7);
    display: none;
  }
  .info {
    background: #111;
    color: white;
    border-radius: 10px;
    padding: 5px 15px 5px 15px;
  }
  .service-header {
    display: flex; 
    align-items: center; 
    gap: 10px;
  }
  .redirect {
    height: 12px;
    width: 12px;
    background: url('@/assets/icons/external-link.png');
    background-size: cover;
    filter: invert(100%);
  }
  .services .services-list:nth-child(3) {
    margin-top: 1px;
    align-items: flex-start;
  }
  .services-list {
    height: calc(45% - 25px);
    display: flex;
    align-items: center;
    gap: 10px !important;
  }
  .service {
    height: 80%;
    border: 1px solid #777676;
    border-radius: 10%;
    aspect-ratio: 4/5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    background: #1a1a1a;
  }
  .line {
    width: 90%;
    height: 1px;
    background: #ddd;
  }
  .service h6 {
    position: absolute;
    bottom: -10px;
  }
  .service img {
    height: 40px;
    width: 40px;
    filter: invert(100%);
  }
  .service p {
    font-size: 12px;
    text-align: center;
  }
  .services {
    background: url('@/assets/images/ipad.png');
    border-top: 1px solid #777676;
    width: 80% ;
    max-width: 750px;
    aspect-ratio: 12/9 !important;
    overflow: hidden;
    background-size: 100%;
    background-position: center;
    box-shadow: 0px 0px 100px 0px var(--primary);
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-repeat: no-repeat;
  }
  .services h3 {
    padding-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
  }
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
  h1 {
    color: var(--text);
    font-size: 30px;
    margin: 0px;
    font-weight: 900;
    position: relative;
    margin-top: 20px;
    margin-bottom: 60px;
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
    background: var(--background-dark);
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  .services-list {
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .description {
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
    background: red;
    transition: background ease-in .15s;
    width: 150px;
    height: 55px;
  }
  .project img {
    border-radius: 50%;
  }
  
  @media only screen and (max-width: 600px) {
    .services {
      background: none;
      width: calc(100% - 10px);
      border-radius: 10px;
      aspect-ratio: 12/9 !important;
      border: 15px solid #111;
      box-sizing: border-box;
      outline: 1px solid #333;
    }
    .services h3 {
      font-size: 18px !important;
    }
    .services-list {
      padding-top: 5px;
      padding-bottom: 5px;
      box-sizing: border-box;
    }
    .service {
      aspect-ratio: unset;
      width: 25%;
      padding: 0px;
      height: 90%;
      box-shadow: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .service-header {
      padding-left: 5px;
      padding-right: 5px;
      flex-direction: column;
      justify-content: space-around;
      gap: 0px;
    }
    .service img, .service p[t], .info, .line {
      display: none;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    .services {
      width: calc(100% - 10px);
      border-radius: 10px;
    }
    .services h3 {
      font-size: 18px !important;
    }
    .services-list {
      padding-top: 5px;
      padding-bottom: 5px;
      box-sizing: border-box;
    }
    .service {
      aspect-ratio: unset;
      width: 25%;
      padding: 0px;
      height: 90%;
      box-shadow: none;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .service-header {
      padding-left: 5px;
      padding-right: 5px;
      flex-direction: column;
      justify-content: space-around;
      gap: 0px;
    }
    .redirect {
      display: none;
    }
    .service p[t], .line {
      display: none;
    }
    .redirect {
      display: none;
    }
  }
  @media only screen and (min-width: 901px) and (max-width: 1400px) {
    .redirect {
      display: none;
    }
    .line {
      margin-top: -15%;
    }
  }
  @media only screen and (min-width: 1401px) {
    .hand, .hand2 {
      display: block;
    }
    .redirect {
      display: none;
    }
    .line {
      margin-top: -15%;
    }
  }
  </style>
  