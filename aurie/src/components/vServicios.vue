<template>
  <div id="servicios">
    <div class="starry-night">
      <h1>Servicios</h1>
      <a class="ver-mas" href="/contacto">
        CONSULTORÍA GRATUITA
      </a>
      <br><br><br><br>

      <h2>Diseño y Desarrollo Web</h2>
      <div class="contents">
        <div class="left a">

        </div>
        <div class="right">
          <h3>DISEÑO PERSONALIZADO</h3>
          <p>Diseñamos páginas web intuitivas
  y visualmente atractivas, 
  optimizadas para ofrecer una
  experiencia de usuario 
  excelente y facilitar la 
  navegación de tus visitantes.</p>
        </div>
      </div>
      <div class="spacing"></div>
      <div class="contents">
        <div class="left b" style="left: 50%">

        </div>
        <div class="right" style="right: 50%; left: unset;">
          <h3>DISEÑO 3D</h3>
          <p>Sumérgete en el futuro del diseño
  web con nuestros diseños 3D, 
  creando entornos inmersivos que 
  transportan a tus clientes a 
  locales, zonas o cualquier lugar 
  que puedas imaginar.</p>
        </div>
      </div>
      <br><br>
      <a class="interested" href="/contacto">¡Me interesa!</a>
      <br><br><br>
    </div>
    <div class="marketing">
      <div class="marketing-background"></div>
      <h2>Marketing digital</h2>
      <br><br>
      <div class="cards">
        <div class="card">
          <p>
            Creación y gestión de campañas publicitarias
          </p>
          <div class="img">
          </div>
          <a href="/servicios">Saber más ></a>
        </div>
        <div class="card">
          <p>
            Optimización<br>On-Page
          </p>
          <div class="img">
          </div>
          <a href="/servicios">Saber más ></a>
        </div>
        <div class="card">
          <p>
            Optimización<br>Off-Page
          </p>
          <div class="img">
          </div>
          <a href="/servicios">Saber más ></a>
        </div>
        <div class="card">
          <p>
            Gestión de redes sociales
          </p>
          <div class="img">
          </div>
          <a href="/servicios">Saber más ></a>
        </div>
      </div>
      <br><br><br><br><br><br>
    </div>
    <br><br><br><br><br><br>
    <h1 style="max-width: 500px; text-align: center;">Una plataforma diseñada para crecer</h1>
    <p style="color: var(--text); opacity: .7; margin-top: -30px; text-align: center;">Con herramientas que te ayudaran a escalar tu negocio</p>
    <br><br><br>
    <a class="start" href="/servicios">EMPECEMOS</a>
    <br><br><br>
    <br><br><br>
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
.starry-night {
  width: 100%;
  padding: 20px;
  margin: 0px;
  margin-top: -5px;
  background:  linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/images/night.webp');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card:nth-child(1) .img {
  background: url('@/assets/icons/cartelera.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.card:nth-child(1) .img::before {
  background: url('@/assets/icons/cartelera.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  content: '';
  filter: blur(3px) brightness(10%) saturate(100%) invert(24%) sepia(100%) saturate(1722%) hue-rotate(27deg) brightness(97%) contrast(106%);
}
.card:nth-child(2) .img {
  background: url('@/assets/icons/optimizacion-web.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
}
.card:nth-child(2) .img::before {
  background: url('@/assets/icons/optimizacion-web.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  content: '';
  filter: blur(3px) brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(3194%) hue-rotate(289deg) brightness(77%) contrast(122%);
}
.card:nth-child(3) .img {
  background: url('@/assets/icons/pagina-web.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
}
.card:nth-child(3) .img::before {
  background: url('@/assets/icons/pagina-web.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  content: '';
  filter: blur(3px) brightness(0) saturate(100%) invert(12%) sepia(78%) saturate(6240%) hue-rotate(268deg) brightness(82%) contrast(123%);
}
.card:nth-child(4) .img {
  background: url('@/assets/icons/redes-sociales.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
}
.card:nth-child(4) .img::before {
  background: url('@/assets/icons/redes-sociales.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  content: '';
  filter: blur(3px) brightness(0) saturate(100%) invert(12%) sepia(65%) saturate(6218%) hue-rotate(219deg) brightness(94%) contrast(101%);
}
.marketing {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.marketing-background {
  background: url('@/assets/images/marketing-background.webp');
  background-size: cover;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  position: absolute;
  opacity: .3;
}
.a:nth-child(1) {
  background: url('@/assets/images/mysetupbanner.png');
  background-size: cover;
}
.b:nth-child(1) {
  background: url('@/assets/images/diseno3d.png');
  background-size: cover;
}
.start {
  border: 1px solid #4200DB;
  color: white;
  padding: 10px 25px 10px 25px;
  background: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 2px #4200DB;
  transition: all ease-in-out .3s;
  z-index: 4;
  text-decoration: none;
}
.start:hover {
  filter: brightness(150%);
  cursor: pointer;
}
.cards {
  display: flex;
  justify-content: space-around;
}
.card {
  width: 20%;
  aspect-ratio: 7/8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
}
.card a {
  text-decoration: none;
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: 10px; 
  left: 15px;
}
.card .img {
  width: 40%;
  aspect-ratio: 1;
  transform: translateY(-10%);
}
.card p {
  color: white;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  height: 30%;
}
.card:nth-child(1) {
  border: 1px solid #A14E00;
}
.card:nth-child(2) {
  border: 1px solid #A700AA;
}
.card:nth-child(3) {
  border: 1px solid #5B00CF;
}
.card:nth-child(4) {
  border: 1px solid #003FB9;
}
.interested {
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  border: 2px solid var(--primary);
  color: white;
  filter: brightness(150%);
  text-decoration: none;
}
.interested:hover {
  outline: 1px solid var(--primary);
}
.contents {
  width: calc(100% - 30px);
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 16/9;
  max-height: 280px;
}
.left {
  width: 50%;
  aspect-ratio: 16/9;
  border: 1px solid #ddd;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
h3 {
  color: var(--text);
  text-align: center;
}
.contents p {
  color: var(--text);
  opacity: .7;
  text-align: center;
}
.right {
  width: 45%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  aspect-ratio: 16/9;
  background: #171717;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ver-mas {
  border: 2px solid #69008E;
  border-radius: 20px;
  padding: 5px 10px 5px 10px;
  background: none;
  background: var(--primary);
  color: var(--text);
  text-decoration: none;
  font-size: 14px;
  transition: all .2s ease-out;
  z-index: 3;
  margin-top: -10px;
}
.ver-mas:hover {
  background-color: transparent;
  border-color: var(--text);
}
h2 {
  font-weight: lighter;
  text-align: center;
  color: var(--text);
  font-weight: 900;
  position: relative;
  margin-top: 20px;
  margin-bottom: 60px;
}
h2::after {
  content: '';
  background: var(--text);
  height: 1px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  position: absolute;
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
#servicios {
  padding: 20px;
  margin: 0px;
  margin-top: -5px;
  color: var(--background-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (max-width: 600px) {
  .card p {
    font-size: 14px;
  }
  .left, .right {
    position: unset;
    width: 100%;
    transform: unset;
  }
  .contents {
    max-height: 1000px;
  }
  .left {
    transform: unset;
    width: 85%;
    aspect-ratio: 16/9 !important;
    max-width: 600px;
  }
  .right {
    width: 85%;
  }
  .contents {
    flex-direction: column !important;
    max-height: unset;
  }
  .cards {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  .card {
    width: 40%;
    max-width: 200px;
  }
  .right {
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spacing {
    height: 30px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .left, .right {
    position: unset;
    width: 100%;
    transform: unset;
  }
  .contents {
    max-height: 1000px;
  }
  .left {
    transform: unset;
    width: 85%;
    aspect-ratio: 16/9 !important;
    max-width: 600px;
  }
  .right {
    width: 85%;
  }
  .contents {
    flex-direction: column !important;
    max-height: unset;
  }
  .cards {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  .card {
    width: 40%;
    max-width: 200px;
  }
  .right {
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spacing {
    height: 30px;
  }
}
@media only screen and (min-width: 1200px) {
  .contents {
    width: calc(100% - 30px);
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    aspect-ratio: 16/9;
    max-height: 500px;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cards {
    width: 1200px;
  }
}
</style>
