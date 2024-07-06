<template>
  <div id="banner" ref="banner">
    <div class="hero-background">
    </div>
    <p style="color: white; z-index: 2;">Aurie no es solo una empresa de servicios digitales, algo por lo que destacamos, es en nuestras ganas de seguir
emprendiendo, no nos conformamos cuando desarrollamos un proyecto, siempre tenemos la mira puesta en el
próximo gran desafío.</p>
  </div>
</template>

<script>
export default {
  name: 'vBanner',
  data: () => ({
    face: 'front',
    current: 'velocidad',
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
#banner {
  min-height: 500px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: opacity .8s ease-in;
  width: 100%;
  max-height: 500px !important;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
}
.hero-background {
  background: url('@/assets/images/proyectos-banner.png');
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.banner-contents {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: opacity .8s ease-in;
  width: 100%;
  height: 100%;
  max-width: 1200px;
}

.slogan {
  border: 1px solid red;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: fit-content;
  padding-left: 50px;
}
h1 {
  color: var(--text);
  font-size: 45px;
  margin: 0px;
  font-weight: 900;
  text-transform: uppercase;
}
h2 {
  font-size: 45px;
  color: transparent;
  margin: 0px;
  font-weight: 900;
  -webkit-text-stroke: 1px white;
  text-transform: uppercase;
}
p {
  margin: 0px;
  color: var(--text);
  width: 90%;
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
}
.text-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: fit-content;
}
.hero-image {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.rectangle {
  width: 200px;
  height: 40px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .75s ease-in;
}

.face {
  position: absolute;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  width: 200px;
  height: 40px;
  line-height: 40px;
  z-index: 0;
  border: 1px solid #171717;
  background: #171717;
}

.face:nth-child(1) { 
  transform: rotateX(0deg) translateZ(20px);
  border-color: var(--primary);
  color: var(--primary);
}
.face:nth-child(2) { 
  transform: rotateX(180deg) translateZ(20px); 
  border-color: var(--primary);
  color: var(--primary);
}
.face:nth-child(3) { 
  transform: rotateX( 90deg) translateZ(20px); 
  border-color: var(--primary);
  color: var(--primary);
}
.face:nth-child(4) { 
  transform: rotateX(-90deg) translateZ(20px); 
  border-color: var(--primary);
  color: var(--primary);
}

.front .face:nth-child(1) {
  z-index: 1;
}
.top .face:nth-child(3) { 
  z-index: 1;
}

.back .face:nth-child(2) {
  z-index: 1;
}
.bottom .face:nth-child(4) {
  z-index: 1;
}

.front { 
  transform: translateZ(-20px) rotateX(0deg); 
}
.top { 
  transform: translateZ(-20px) rotateX(-90deg);
}
.back { 
  transform: translateZ(-20px) rotateX(-180deg); 
}
.bottom { 
  transform: translateZ(-20px) rotateX(-270deg); 
}

@keyframes breathe {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#gif {
  height: 80px;
  width: 80px;
  animation-name: breathe;
  animation-delay: .25s;
  animation-duration: 3s;
  opacity: 0;
  animation-iteration-count: infinite;
  filter: brightness(0) saturate(100%) invert(48%) sepia(17%) saturate(6648%) hue-rotate(334deg) brightness(102%) contrast(98%);
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 25px !important;
  }
  h2 {
    font-size: 25px !important;
  }
}
.small {
  display: none;
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  h1 {
    font-size: 35px !important;
  }
  h2 {
    font-size: 35px !important;
  }
}
@media only screen and (min-width: 1700px) {
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 40px;
  }
  p {
    font-size: 24px;
  }
}
</style>
