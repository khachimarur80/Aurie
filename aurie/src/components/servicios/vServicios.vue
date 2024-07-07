<template>
  <div id="servicios">
    <h1>Servicios</h1>
    <br><br>
    <div class="contents">
      <div class="left">
        <h2><span style="text-decoration: underline; font-family: var(--title-font);">DOMINA</span> EL <span style="color: #2C8CC1; font-family: var(--title-font);">MERCADO</span></h2>
        <div class="left-inner">
          <h2 style="margin-left: 0px; padding-left: 0px;"><span style="text-decoration: underline; font-family: var(--title-font);">POTENCIA</span> TU <span style="color: #962FD6; font-family: var(--title-font);">NEGOCIO</span></h2>
          <p style="padding-left: 10px;">Bienvenido a Aurie, donde empresas y profesionales empiezan a conseguir resultados únicos</p>
        </div>
        <div class="left-second">
          <img src="@/assets/images/flecha-correcta_1.webp">
        </div>
      </div>
      <div class="right">
        <div class="portrait">
          <div class="up-corner">
            <div></div>
          </div>
          <div class="text-card">
            <p>
              Ábrete puertas a un camino en el que podrás descubrir cosas que nunca antes habrías imaginado.
            </p>
          </div>
          <div class="portrait-img">
          </div>
          <div class="bottom-corner">
            <div></div>
          </div>
        </div>
      </div>
    </div>
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
.portrait-img {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: url('@/assets/images/retrato_servicios.webp');
  background-size: cover;
}
.text-card {
  transform: translate(50%, 50%);
  position: absolute;
  bottom: 0px;
  background: black;
  right: 0px;
  padding: 10px;
  border: 2px solid white;
  z-index: 4;
}
.text-card p {
  margin: 0px;
}
.up-corner div {
  width: calc(100%*1.41421356 + 5px);
  height: 2px;
  background: white;
  transform: rotate(45deg);
  position: absolute;
  top: -2px;
  left: -2px;
  transform-origin: 0% 0%;
}
.up-corner {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 30%;
  outline: 2px solid black;
  aspect-ratio: 1;
}
.bottom-corner div {
  width: calc(100%*1.41421356 + 5px);
  height: 2px;
  background: white;
  transform: rotate(45deg);
  position: absolute;
  top: -3px;
  left: 0px;
  transform-origin: 0% 0%;
}
.bottom-corner {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 30%;
  outline: 2px solid black;
  aspect-ratio: 1;
}
.portrait {
  border: 2px solid white;
  height: 300px;
  position: relative;
  aspect-ratio: 5/7;
}
h1, h2 {
  color: var(--text);
}
.contents {
  min-height: calc(100vh - 150px);
  width: 100%;
  display: flex;
  justify-content: center;
}
.left, .right {
  max-width: 500px;
  width: 50%;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}
.right {
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
.left-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 390px;
  width: 90%;
  margin-left: 10%;
}
.left-second {
  width: 75%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
}
p {
  color: var(--text);
  margin: 0px;
  opacity: .7;
}
#servicios {
  padding: 20px;
  margin: 0px;
  color: var(--background-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (max-width: 850px) {
  .contents {
    flex-direction: column-reverse;
    align-items: center;
    gap: 80px;
  }
  .portrait {
    transform: translateX(-25%);
    border: 1px solid white;
  }
  .left {
    width: 90%;
  }
  .left-second {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50%;
    transform: translateX(-50%)  rotate(90deg);
  }
  .left-inner {
    width: 80%;
    margin-left: 20%;
  }
  .up-corner::after {
    content: '';
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    transform: rotate(45deg) translate(50%, -50%);
  }
  .up-corner::before {
    content: '';
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    transform: rotate(-45deg) translate(50%, -50%);
  }

  .bottom-corner::after {
    content: '';
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    transform: rotate(45deg) translate(-50%, 50%);
  }
  .bottom-corner::before {
    content: '';
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    transform: rotate(-45deg) translate(-50%, 50%);
  }
}
@media only screen and (min-width: 1200px) {
  .portrait {
    height: 400px;
  }
  .left {
    min-width: 800px;
  }
  .left-inner {
    min-width: 480px;
    padding-left: 70px;
  }
  h2 {
    font-size: 30px;
  }
  p {
  }
  .left-second {
    width: 300px;
  }
}
</style>
