<template>
  <div id="banner" ref="banner">
    <div class="hero-background">
      <h1>CREA, DISEÑA, VENDE</h1>
    </div>
    <div class="img">

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
.img {
  height: 50%;
  max-width: 400px;
  max-width: 400px;
  aspect-ratio: 1 !important;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  background: url('@/assets/images/cubo.webp');
  background-size: cover;
}
#banner {
  min-height: calc(50vh);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: opacity .8s ease-in;
  width: 100%;
  max-height: 700px !important;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
}
.hero-background {
  position: absolute;
  top: 0;
  bottom: 25%;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  color: white;
}
h1 {
  z-index: 5;
  color: white;
  width: 90%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 25px;
  position: absolute;
}
.hero-background::before {
  background: url('@/assets/images/background1.webp');
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: .5;
  left: 0;
  content: '';
}
@media screen and (min-width: 1000px) {
  #banner {
    height: 600px;
  }
  h1 {
    font-size: 40px;
  }
}
</style>
