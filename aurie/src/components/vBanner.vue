<template>
  <div id="banner" ref="banner">
    <div class="banner-contents">
      <div class="text">
        <h2>Aurie, tu solución digital</h2>
        <p>
          En Aurie te ofrecemos soluciones y productos en todas las áreas de la tecnología.
        </p>
        <div class="text-row">
          <h3>
            ofrecemos
          </h3>
          <div :class="['rectangle', face]">
            <div class="face">velocidad.</div>
            <div class="face">compromiso.</div>
            <div class="face">comunicación.</div>
            <div class="face">soluciones.</div>
          </div>
          <img :src="require('@/assets/gifs/'+current+'.gif')" id="gif" :alt="'gif animado de ' + current"/>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/vectors/ilustracion-concepto-mision-empresarial/5995342.webp" width="100%" alt="Ilustracion misión empresarial"/>
      </div>
      <div id="blob1" class="blob">
      </div>
      <div id="blob2" class="blob">
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
#blob1 {
  top: 150px;
  left: 0px;
}
#blob2 {
  bottom: 150px;
  right: 0px;
}
.blob {
  position: absolute;
  height: 300px;
  background: var(--primary);
  border-radius: 50%;
  filter: blur(150px);
  z-index: -1;
  aspect-ratio: 2/5 !important;
}

#banner {
  min-height: calc(100vh + 50px);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, .5) 80%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: opacity .8s ease-in;
  width: 100h;
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
h2 {
  color: var(--text);
  font-size: 30px;
  margin: 0px;
}
h3 {
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
    gap: 50px;
  }
  h3 {
    display: none;
  }
  .text-row {
    justify-content: center;
    display: flex;
    width: 100%;
  }
  .text {
    padding: 0px;
    padding-bottom: 30px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  h2 {
    padding-left: 20px;
    padding-right: 20px;
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
}

@media only screen and (min-width: 601px) and (max-width: 900px) {
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
