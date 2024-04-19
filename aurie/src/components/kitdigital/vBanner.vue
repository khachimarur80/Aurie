<template>
  <div id="banner" ref="banner">
    <div class="hero-background">
    </div>
    <div class="banner-contents">
      <div class="text">
        <div class="text-row" style="flex-direction: column; gap: 0px;">
          <h1>KIT Digital</h1>
          <h2>Ayuda para PYMES</h2>
          <p>
            Ayudas Para Pymes: Aprovecha Las Ayudas De Hasta 12.000€ De Los Fondos Europeos Next Generation
          </p>
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
#banner {
  min-height: calc(100vh);
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
  padding-top: 0px;
  box-sizing: border-box;
}
.hero-background {
  background: url('@/assets/images/hero1.webp');
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: .15;
  filter: blur(4px);
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
  width: 500px;
  padding-left: 50px;
}
h1 {
  color: rgb(253, 76, 56);
  font-size: 45px;
  margin: 0px;
  font-weight: 900;
  margin-bottom: -30px;
  text-shadow: 0px 0px 4px rgb(253, 76, 56);
}
h2 {
  color: #E3E3E3;
  font-size: 30px;
  margin-right: -20px;
  font-weight: 300;
}
p {
  margin: 0px;
  color: #E3E3E3;
  opacity: .7;
  width: 80%;
  margin-left: 15px;
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
  filter: invert(55%) sepia(67%) saturate(4276%) hue-rotate(333deg) brightness(101%) contrast(98%);
}

@media only screen and (max-width: 600px) {
  h1 {
    text-shadow: 0px 0px 2px rgb(253, 76, 56);
  }
  .banner-contents {
    flex-direction: column;
    height: fit-content;
    align-items: center;
    gap: 50px;
    padding-top: 90px;
  }
  .text-row {
    justify-content: center;
    display: flex;
    width: 100%;
    height: fit-content;
  }
  .text {
    padding: 0px;
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
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
