<template>
  <div id="banner" ref="banner">
    <div class="banner-contents">
      <div class="text">
        <h1>Aurie, tu solución digital</h1>
        <p>
          En Aurie te ofrecemos servicios y productos en todas las áreas de la tecnología.
        </p>
        <div class="text-row">
          <h2>
            ofrecemos
          </h2>
          <div :class="['rectangle', face]">
            <div class="face">velocidad.</div>
            <div class="face">compromiso.</div>
            <div class="face">comunicación.</div>
            <div class="face">soluciones.</div>
          </div>
          <img :src="require('@/assets/gifs/'+current+'.gif')" id="gif" :alt="'gif animado de ' + current" style="aspect-ratio: 3/2 !important;"/>
        </div>
      </div>
      <div class="hero-image">
        <img class="big" src="@/assets/vectors/ilustracion-concepto-mision-empresarial/5995342.webp" width="100%" alt="Ilustracion misión empresarial"/>
        <img class="small" src="@/assets/vectors/ilustracion-concepto-mision-empresarial/5995342-small.webp" width="100%" alt="Ilustracion misión empresarial"/>
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
#banner {
  min-height: calc(100vh + 50px);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, .8) 50%, rgba(255, 255, 255, .5) 80%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: opacity .8s ease-in;
  width: 100%;
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
  gap: 30px;
  width: 500px;
  padding-left: 50px;
}
h1 {
  color: var(--text);
  font-size: 30px;
  margin: 0px;
}
h2 {
  color: var(--text);
  font-size: 22px;
  margin-right: -20px;
}
p {
  margin: 0px;
  color: var(--text);
  opacity: .7;
  width: 80%;
  margin-left: 15px;
}
.text-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border: 1px solid var(--background);
  background: var(--background);
}

.face:nth-child(1) { 
  transform: rotateX(0deg) translateZ(20px);
  border-color: var(--success);
  color: var(--success);
}
.face:nth-child(2) { 
  transform: rotateX(180deg) translateZ(20px); 
  border-color: var(--error);
  color: var(--error);
}
.face:nth-child(3) { 
  transform: rotateX( 90deg) translateZ(20px); 
  border-color: var(--warning);
  color: var(--warning);
}
.face:nth-child(4) { 
  transform: rotateX(-90deg) translateZ(20px); 
  border-color: var(--accent);
  color: var(--accent);
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
}

@media only screen and (max-width: 600px) {
  .banner-contents {
    flex-direction: column;
    height: fit-content;
    align-items: center;
    gap: 50px;
  }
  h2 {
    display: none;
  }
  .text-row {
    justify-content: center;
    display: flex;
    width: 100%;
    gap: 5px;
  }
  .text {
    padding: 0px;
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  h2 {
    width: 80%;
  }
  h2, p {
    text-align: center;
  }
  .hero-image {
    width: calc(100% - 50px);
  }
  #banner {
    padding-top: 0px;
    padding-top: 60px;
    height: fit-content;
  }
  .big {
    display: none;
  }
  .small {
    display: block;
  }
}
.small {
  display: none;
}
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .big {
    display: none;
  }
  .small {
    display: block;
  }
  .banner-contents {
    flex-direction: column;
    height: fit-content;
    gap: 50px;
  }
  .text {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 30px;
  }
  .hero-image {
    width: calc(100% - 50px);
    max-width: 600px;
  }
  #banner {
    padding-top: 0px;
    padding-top: 60px;
    height: fit-content;
  }
}
</style>
