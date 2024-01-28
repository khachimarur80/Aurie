<template>
  <div id="banner" ref="banner">
    <div class="rotating-text">
      <h2>En Aurie ofrecemos</h2>
      <div :class="['rectangle', face]">
        <div class="face">velocidad.</div>
        <div class="face">compromiso.</div>
        <div class="face">comunicación.</div>
        <div class="face">soluciones.</div>
      </div>
    </div>
    <img :src="require('@/assets/'+current+'.gif')" id="gif" :alt="'gif animado de ' + current"/>
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
  }
}
</script>

<style scoped>
#banner {
  margin: 20px;
  margin-top: 150px;
  padding: 30px;
  min-height: calc(100vh - 120px - 100px);
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 0;
  opacity: 0;
  transition: opacity .8s ease-in;
}
.slogan {
  border: 1px solid red;
}
.rotating-text {
  display: flex;
  align-items: center;
  gap: 30px;
}
h2 {
  font-size: 50px;
}

.rectangle {
  width: 325px;
  height: 50px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .75s ease-in;
}

.face {
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: var(--primary);
  text-align: center;
  width: 325px;
  height: 50px;
  line-height: 50px;
  z-index: 0;
  border: 1px solid var(--background);
}

.face:nth-child(1) { 
  transform: rotateX(0deg) translateZ(25px);
  background: var(--success);
}
.face:nth-child(2) { 
  transform: rotateX(180deg) translateZ(25px); 
  background: var(--error);
}
.face:nth-child(3) { 
  transform: rotateX( 90deg) translateZ(25px); 
  background: var(--warning);
}
.face:nth-child(4) { 
  transform: rotateX(-90deg) translateZ(25px); 
  background: var(--accent);
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
  transform: translateZ(-25px) rotateX(0deg); 
}
.top { 
  transform: translateZ(-25px) rotateX(-90deg);
}
.back { 
  transform: translateZ(-25px) rotateX(-180deg); 
}
.bottom { 
  transform: translateZ(-25px) rotateX(-270deg); 
}

@keyframes breathe {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#gif {
  height: 150px;
  width: 150px;
  animation-name: breathe;
  animation-delay: .25s;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@media only screen and (max-width: 907px) {
  .rotating-text {
    flex-direction: column;
  }
  h2, .face {
    font-size: 30px;
  }
  #gif {
    margin-top: 50px;
    height: 100px;
    width: 100px;
  }
}
</style>
