<template>
  <div id="contents">
    <div class="stats">
      <div class="stat">
        <span>100%</span>
        <p>Clientes satisfechos</p>
      </div>
      <div class="stat">
        <span>100%</span>
        <p>De nuestros trabajos hechos con cariño</p>
      </div>
      <div class="stat">
        <span>+10</span>
        <p>Tipos de servicios</p>
      </div>
    </div>
    <div class="service">
      <div class="left">
        <h2 style="font-family: 'HelveticaNeueBold'">Diseño y Diseño Web</h2><br>
        <p>Creación de sitios webs a medida</p>
        <p>Creamos y diseñamos las webs de forma personalizada
          para cliente, creando así un espacio totalmente único.</p>
        <p>Rediseño y actualización de webs existentes</p>
        <p>Creamos y diseñamos las webs de forma personalizada
        para cliente, creando así un espacio único.</p>
        <p>Diseño web responsive (adaptado a dispositivos móviles)</p>
        <p>Cres y diseñamos las webs de forma persa caracola
        para cliente, credo así un espacio totalte ho no puedela
        ya que de ser asi soy gay.</p>
      </div>
      <div class="mid">

      </div>
      <div class="right">
        <div class="img"></div>
      </div>
    </div>
    <br><br>
    <div class="service2">
      <div class="left2">
        <h2 style="font-family: 'HelveticaNeueBold'">Diseño 3D</h2><br>
        <p>Sumérgete en el futuro del diseño web con nuestros diseños 3D, creando entornos inmersivos que transportan a tus clientes a locales, zonas o cualquier lugar que puedas imaginar.</p>
        <br>
        <p>
          Crea una web realista en 3D, totalmente personalizable y descubre nuevas
formas de mostrar tu empresa.
        </p>
      </div>
      <div class="mid2">

      </div>
      <div class="right2">
        <div class="img2"></div>
      </div>
    </div>
    <br><br>
    <h2>Marketing Digital</h2>
    <br><br>
    <div class="carousel">
      <button class="carousel-left" @click="left">
        <img src="@/assets/icons/arrow.png" style="transform: rotate(180deg)" height="15px" width="15px">
      </button>
      <div class="carousel-inner">
        <div class="slide-1 slide active-slide">
          <div class="slide-inner">
            <p>Creación y gestión de campañas publicitarias</p>
            <div class="slideimg" src="@/assets/icons/cartelera.webp"></div>
            <p>Crear y gestionar campañas publicitarias efectivas, diseñadas para captar a la audiencia objetivo y maximizar el retorno de inversión.</p>
          </div>
        </div>
        <div class="slide-2 slide">
          <div class="slide-inner">
            <p>Optimización on-page</p>
            <div class="slideimg" src="@/assets/icons/optimizacion-web.webp"></div>
            <p>Mejorar cada aspecto del sitio web, desde la estructura y contenido hasta la velocidad de carga, para asegurar una óptima visibilidad y rendimiento en los motores de búsqueda.</p>
          </div>
        </div>
        <div class="slide-3 slide">
          <div class="slide-inner">
            <p>Optimización off-page</p>
            <div class="slideimg" src="@/assets/icons/pagina-web.webp"></div>
            <p>Aumentar la autoridad del sitio web mediante estrategias de enlaces, promoción externa y marketing de contenido para mejorar el posicionamiento en los motores de búsqueda.</p>
          </div>
        </div>
        <div class="slide-4 slide">
          <div class="slide-inner">
            <p>Gestión de redes sociales</p>
            <div class="slideimg" src="@/assets/icons/redes-sociales.webp"></div>
            <p>Manejar las redes sociales de manera integral, creando contenido atractivo y fomentando el compromiso para construir y mantener una fuerte presencia digital y una conexión activa con la audiencia.</p>
          </div>
        </div>
        <div class="progress">
          <span class="progress-dot active-dot"></span>
          <span class="progress-dot"></span>
          <span class="progress-dot"></span>
          <span class="progress-dot"></span>
        </div>
      </div>
      <button class="carousel-right" @click="right">
        <img src="@/assets/icons/arrow.png" style="transform: rotate(180deg)" height="15px" width="15px">
      </button>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'vBanner',
  data: () => ({
    face: 'front',
    current: 'velocidad',
    count: 0,
    move: true,
  }),
  mounted() {
    let faces = ['front', 'top', 'back', 'bottom']
    let messages = ['velocidad', 'comunicacion', 'compromiso', 'soluciones']

    let iteration = 0

    setInterval(()=>{
      iteration += 1
      iteration = iteration%4

      this.face = faces[iteration%4]

      setTimeout(()=>{
        this.current = messages[iteration%4]
      }, 250)

    }, 3000)
  },
  methods: {
    right() {
      if (this.move) {
        this.move = false
        let active = document.getElementsByClassName('active-slide')[0]
        this.count = (this.count+1)%4
        let next = document.getElementsByClassName('slide')[this.count]
        next.classList.add('move-left1')
        active.classList.add('move-left')

        let activeDot = document.getElementsByClassName('active-dot')[0]
        activeDot.classList.remove('active-dot')
        let nextDot = document.getElementsByClassName('progress-dot')[this.count]
        nextDot.classList.add('active-dot')

        setTimeout(()=>{
          next.classList.remove('move-left1')
          next.classList.add('active-slide')
          active.classList.remove('active-slide')
          active.classList.remove('move-left')
          this.move = true
        }, 1500)
      }
    },
    left() {
      if (this.move) {
        this.move = false
        let active = document.getElementsByClassName('active-slide')[0]
        this.count = (this.count-1)%4
        this.count = this.count < 0 ? 3 : this.count
        let next = document.getElementsByClassName('slide')[this.count]
        next.classList.add('move-right1')
        active.classList.add('move-right')

        let activeDot = document.getElementsByClassName('active-dot')[0]
        activeDot.classList.remove('active-dot')
        let nextDot = document.getElementsByClassName('progress-dot')[this.count]
        nextDot.classList.add('active-dot')

        setTimeout(()=>{
          next.classList.remove('move-right1')
          next.classList.add('active-slide')
          active.classList.remove('active-slide')
          active.classList.remove('move-right')
          this.move = true
        }, 1500)
      }
    }
  },
  head() {
    return {
      link: [
        {
          rel: "preload",
          fetchpriority: "high",
          as: "image",
          href: require("@/assets/vectors/ilustracion-concepto-mision-empresarial/5995342.webp"),
          type: "image/webp"
        }
      ],
    }
  },
}
</script>

<style scoped>
.carousel-left {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
  cursor: pointer;
}
.carousel-right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
  transform: rotate(180deg);
  cursor: pointer;
}
.carousel-left, .carousel-right {
  border-radius: 50%;
  border: 1px solid var(--text);
  height: 25px;
  width: 25px;
}
.carousel-left:hover {
  outline: 2px solid var(--primary);
}
.carousel-right:hover {
  outline: 2px solid var(--primary);
}

.progress-dot  {
  background: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
.active-dot {
  background: var(--primary) !important;
}
.progress {
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}
h2 {
  color: var(--text);
}
.move-left {
  animation: moveLeft 1.5s;
  display: block !important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
@keyframes moveLeft {
  0% {
    transform: translateX(0%); 
  }
  100% {
    transform: translateX(-100%); 
  }
}
.move-left1 {
  animation: moveLeft1 1.5s;
  display: block !important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
@keyframes moveLeft1 {
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(0%); 
  }
}


.move-right {
  animation: moveRight 1.5s;
  display: block !important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
@keyframes moveRight {
  0% {
    transform: translateX(0%); 
  }
  100% {
    transform: translateX(100%); 
  }
}
.move-right1 {
  animation: moveRight1 1.5s;
  display: block !important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
}
@keyframes moveRight1 {
  0% {
    transform: translateX(-100%); 
  }
  100% {
    transform: translateX(0%); 
  }
}


.slide {
  height: 100%;
  width: 100%;
  display: none;
  position: absolute;
}
.slide-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 90%;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.slide-inner p {
  text-align: center;
}
.active-slide {
  display: block !important;
}
.slideimg {
  height: 80px;
  width: 80px;
}
.slide-1 .slideimg {
  background: url('@/assets/icons/cartelera.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.slide-1 .slideimg::before {
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
.slide-2 .slideimg {
  background: url('@/assets/icons/optimizacion-web.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.slide-2 .slideimg::before {
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
.slide-3 .slideimg {
  background: url('@/assets/icons/pagina-web.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.slide-3 .slideimg::before {
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
.slide-4 .slideimg {
  background: url('@/assets/icons/redes-sociales.webp');
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.slide-4 .slideimg::before {
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
.slide-1 {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/slide1.jpg');
  background-size: cover;
}
.slide-2 {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/slide2.jpg');
  background-size: cover;
}
.slide-3 {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/slide3.jpg');
  background-size: cover;
}
.slide-4 {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/slide4.jpg');
  background-size: cover;
}
.carousel {
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 30px);
}
.carousel-left, .carousel-right {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
}
.carousel-inner {
  width: calc(100% - 100px);
  height: 400px;
  overflow: hidden;
  display: flex;
  position: relative;
}
.service {
  width: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  background: url('@/assets/images/mid-background.webp');
  background-size: cover;
}
.left {
  width: calc(50% - 25px);
  padding-right: 40px;
  height: fit-content;
  box-sizing: border-box;
  padding-left: 80px;
}
.left p {
  color: white;
}
.left p:nth-child(2n) {
  opacity: .5;
  padding-bottom: 10px;
}
.mid {
  height: 100%;
  min-height: 500px;
  width: 100px;
}
.img {
  width: 90%;
  aspect-ratio: 16/9;
  border: 1px solid #949494;
  background: url('@/assets/images/mysetupbanner.png');
  background-size: cover;
}
.right {
  height: 500px;
  width: calc(50% - 25px);
  display: flex;
  justify-content: center;
  align-items: center;
}


.service2 {
  width: calc(100% - 30px);
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('@/assets/images/service2-background.webp');
  background-size: cover;
}
.left2 {
  width: calc(50% - 25px);
  padding-right: 40px;
  height: fit-content;
  box-sizing: border-box;
  padding-left: 80px;
}
.left2 p {
  color: white;
}
.left2 p:nth-child(2n+1) {
  opacity: .5;
  padding-bottom: 10px;
}
.mid2 {
  height: 100%;
  min-height: 500px;
  width: 60px;
}
.img2 {
  width: 90%;
  aspect-ratio: 16/9;
  border: 1px solid #949494;
  background: url('@/assets/images/diseno3d.png');
  background-size: cover;
}
.right2 {
  height: 500px;
  width: calc(50% - 25px);
  display: flex;
  justify-content: center;
  align-items: center;
}


#contents {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stats {
  width: 100%;
  max-width: 700px;
  display: flex;
  margin: 40px;
  justify-content: space-around;
}
.stat  span {
  color: var(--text);
  font-weight: 100;
  font-size: 40px;
}
.stat p {
  color: var(--text);
  opacity: .7;
}

@media only screen and (max-width: 600px) {
  .stats .stat:nth-child(1) {
    display: none;
  }
  .stats .stat:nth-child(3) {
    display: none;
  }
  .stats {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
  }
  .stat {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .stat  span {
    text-align: center;
  }
  .stat p {
    text-align: center;
  }
  .service {
    flex-direction: column;
    background: #111111;
  }
  .service2 {
    flex-direction: column;
  }
  .left {
    width: 100%;
    padding: 20px;
  }
  .mid {
    display: none;
  }
  .right {
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
  }
  .left2 {
    width: 100%;
    padding: 20px;
  }
  .mid2 {
    display: none;
  }
  .right2 {
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 850px) {
  .stats {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    align-items: center;
  }
  .stat {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .stat  span {
    text-align: center;
  }
  .stat p {
    text-align: center;
  }
  .service {
    flex-direction: column;
    background: #111111;
  }
  .service2 {
    flex-direction: column;
  }
  .left {
    width: 100%;
    padding: 20px;
  }
  .mid {
    display: none;
  }
  .right {
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
  }
  .left2 {
    width: 100%;
    padding: 20px;
  }
  .mid2 {
    display: none;
  }
  .right2 {
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 1200px) {
  .service, .service2 {
    max-width: 1100px;
  }
  .stat span {
    font-size: 60px;
  }
}
</style>
