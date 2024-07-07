<template>
  <div id="banner" ref="banner">
    <div class="hero-background">
    </div>
    <div class="banner-contents">
      <div class="text">
        <div class="text-row" style="flex-direction: column; gap: 0px;">
          <h1>Innovación digital</h1>
          <h2>Crecimiento y ventas</h2>
          <br><br>
          <p style="font-family: 'Hanson';">Moderniza tu empresa de forma rápida y segura.</p>
        </div>
        <br><br>
        <div class="button-row">
          <a href="/servicios">Precios</a>
          <a href="/contacto">Contáctanos</a>
        </div>
      </div>
    </div>
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
.button-row {
  display: flex;
  gap: 50px;
  width: fit-content;
}
.button-row a {
  border-radius: 20px;
  height: 30px;
  width: 160px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-family: 'Hanson';
  padding-bottom: 3px;
}
.button-row a:nth-child(1) {
  border: 1px solid transparent;
  background-color: var(--background-light);
  color: var(--text-dark);
}
.button-row a:nth-child(1):hover {
  border: 1px solid var(--text);
  background: transparent;
  color: var(--text);
}
.button-row a:nth-child(2) {
  border: 1px solid var(--text);
  background: transparent;
  color: var(--text);
}
.button-row a:nth-child(2):hover {
  border: 1px solid transparent;
  background-color: var(--background-light);
  color: var(--text-dark);
}
#banner {
  min-height: calc(100vh);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: opacity .8s ease-in;
  max-height: 500px !important;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
}
.hero-background {
  background: url('@/assets/images/hero.webp');
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
  -webkit-text-stroke: 2px white;
  text-transform: uppercase;
}
p {
  margin: 0px;
  color: var(--text);
  font-weight: bold;
  width: 80%;
  margin-left: 15px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
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
@media only screen and (max-width: 800px) {
  h1 {
    font-size: 25px !important;
    text-align: center;
  }
  h2 {
    font-size: 25px !important;
    text-align: center;
  }
  .text {
    padding-left: 10px;
    padding-right: 10px;
  }
  p {
    font-size: 9px;
    width: 100%;
  }
}
@media only screen and (min-width: 801px) and (max-width: 1200px) {
  h1 {
    font-size: 45px !important;
  }
  h2 {
    font-size: 45px !important;
  }
  p {
    font-size: 12px;
    min-width: 500px;
  }
}
@media only screen and (min-width: 1201px) and (max-width: 1700px) {
  h1 {
    font-size: 60px !important;
  }
  h2 {
    font-size: 60px !important;
  }
  p {
    font-size: 14px;
    min-width: 500px;
  }
}
@media only screen and (min-width: 1701px) {
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 60px;
  }
  p {
    min-width: 1000px;
    font-size: 18px;
  }
}
</style>
