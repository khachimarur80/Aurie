<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <div class="section-text">
      Te ayudamos a impulsar digitalmente tu empresa.
    </div><br><br><br>
    <div class="contents">
      <div class="card eficiencia" id="eficiencia" ref="eficiencia">
        <div class="card-background">
          <div class="card-background-inner"></div>
        </div>
        <div class="card-icon">
            <img src="@/assets/icons/eficiencia.webp" height="100%" alt="MacBook en mesa de cafetería"/>
        </div>
        <div class="card-title">
          Eficiencia
        </div>
        <button v-if="!eficiencia" @click="openCard('eficiencia')">
          Ver más
        </button>
        <button v-else @click="closeCard('eficiencia')">
          Ver menos
        </button>
      </div>
      <div class="card comunicacion" id="comunicacion" ref="comunicacion">
        <div class="card-background">
          <div class="card-background-inner"></div>
        </div>
        <div class="card-icon">
          <img src="@/assets/icons/comunicacion.webp" height="100%" alt="Antenta de satélite"/>
        </div>
        <div class="card-title">
          Comunicación
        </div>
        <button v-if="!comunicacion" @click="openCard('comunicacion')">
          Ver más
        </button>
        <button v-else @click="closeCard('comunicacion')">
          Ver menos
        </button>
      </div>
      <div class="card creatividad" id="creatividad" ref="creatividad">
        <div class="card-background">
          <div class="card-background-inner"></div>
        </div>
        <div class="card-icon">
          <img src="@/assets/icons/creatividad.webp" height="100%"/>
        </div>
        <div class="card-title">
          Creatividad
        </div>
        <button v-if="!creatividad" @click="openCard('creatividad')">
          Ver más
        </button>
        <button v-else @click="closeCard('creatividad')">
          Ver menos
        </button>
      </div>
      <div class="card calidad" id="calidad" ref="calidad">
        <div class="card-background">
          <div class="card-background-inner"></div>
        </div>
        <div class="card-icon">
          <img src="@/assets/icons/calidad.webp" height="100%" alt="Teclado de cerca"/>
        </div>
        <div class="card-title">
          Calidad
        </div>
        <button v-if="!calidad" @click="openCard('calidad')">
          Ver más
        </button>
        <button v-else @click="closeCard('calidad')">
          Ver menos
        </button>
      </div>
      <div class="card-description" v-if="eficiencia || comunicacion || calidad || creatividad">
        <div class="card-text">
          {{ currentText }}
        </div>
      </div>
      <div id="background" ref="background">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vNosotros',
  props: {
  },
  mounted() {
  },
  data: () => ({
    calidad: false,
    creatividad: false,
    comunicacion: false,
    eficiencia: false,
    descriptions: {
      "creatividad" : "Transformamos ideas en experiencias visuales únicas. Con nuestra creatividad, daremos vida a la identidad digital de tu empresa.",
      "calidad": "Nuestra promesa es ofrecer trabajos de alta calidad. No comprometemos la excelencia mientras impulsamos tu empresa digitalmente.",
      "comunicacion": "Valoramos la comunicación constante y profesional. Estamos aquí para entender tus necesidades y expectativas, garantizando un proceso claro y transparente.",
      "eficiencia": "Nos comprometemos a resultados rápidos y eficientes. Cada paso es optimizado para asegurar un viaje sin contratiempos hacia tu presencia digital.",
    }
  }),
  head() {
    return {
      link: [
        {
          rel: "preload",
          fetchpriority: "high",
          as: "image",
          href: require('@/assets/images/creatividad.webp'),
          type: "image/webp"
        },
        {
          rel: "preload",
          fetchpriority: "high",
          as: "image",
          href: require('@/assets/images/eficiencia.webp'),
          type: "image/webp"
        },
        {
          rel: "preload",
          fetchpriority: "high",
          as: "image",
          href: require('@/assets/images/calidad.webp'),
          type: "image/webp"
        },
        {
          rel: "preload",
          fetchpriority: "high",
          as: "image",
          href: require('@/assets/images/comunicacion.webp'),
          type: "image/webp"
        },
      ],
    }
  },
  methods: {
    closeCard(card) {
      this[card] = false
      this.$refs.background.classList.remove(card)
      document.getElementById('nosotros').querySelectorAll('.card').forEach((e)=>{
        if (!e.classList.contains(card)) {
          e.classList.remove('secondary')
        }
        else {
          e.classList.remove('primary')
        }
      })
    },
    openCard(card) {
      if (this.calidad) {
        this.closeCard('calidad')
      }
      if (this.creatividad) {
        this.closeCard('creatividad')
      }
      if (this.comunicacion) {
        this.closeCard('comunicacion')
      }
      if (this.eficiencia) {
        this.closeCard('eficiencia')
      }
      this.currentText = this.descriptions[card]
      this[card] = true
      this.$refs.background.classList.add(card)
      document.getElementById('nosotros').querySelectorAll('.card').forEach((e)=>{
        if (!e.classList.contains(card)) {
          e.classList.add('secondary')
        }
        else {
          e.classList.add('primary')
        }
      })
    }
  }
}
</script>

<style scoped>
h1 {
  color: rgb(253, 76, 56);
  font-size: 35px;
  margin: 0px;
  font-weight: 900;
  text-shadow: 0px 0px 4px rgb(253, 76, 56);
  position: relative;
  margin-top: 20px;
  margin-bottom: 80px;
}
h1::after {
  content: '';
  background: rgb(253, 76, 56);
  height: 4px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
}
.section-text {
  margin: 0px;
  color: #E3E3E3;
  opacity: .7;
  width: 50%;
  margin-left: 15px;
  text-align: center;
}
#nosotros {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100h;
}
.contents {
  font-size: 24px;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  transition: all .2s ease-out;
  flex-wrap: wrap;
}
.contents:has(.primary) {
  height: 800px;
}
.card {
  width: 25%;
  max-width: 800px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  transition: all .2s ease-out;
  overflow: hidden;
}
.card > * {
  transition: all .2s ease-out;
}
.card-title {
  padding-top: 50px;
  box-sizing: border-box;
  z-index: 1;
  font-weight: bold;
  transition: all .2s ease-out;
}
button {
  color: white;
  border: 1px solid white;
  padding: 8px 12px 8px 12px;
  border-radius: 5px;
  font-size: 16px;
  z-index: 1;
  margin-top: 30px;
  background-color: transparent;
  transition: all .15s ease-out;
}
button:hover {
  color: inherit;
  border-color: inherit;
  text-shadow: none !important;
}
.card-icon {
  height: 80px;
  width: 80px;
  z-index: 1;
}
.card-background {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 0;
  background-color: #262626;
}
.card-background-inner {
  height: 100%;
  width: 100%;
  background-size: cover !important;
  opacity: .2;
}
.secondary .card-background-inner {
  filter: blur(3px);
}
.secondary {
  filter: brightness(.8);
}
.primary .card-background-inner {
  display: none;
}
.primary.creatividad .card-background {
  background: linear-gradient(to bottom, rgba(147, 195, 251), rgba(132, 175, 225, .75), rgba(0,0,0,0));
}
.primary.calidad .card-background {
  background: linear-gradient(to bottom, rgb(251, 176, 147), rgba(225, 158, 132, 0.75), rgba(0,0,0,0));
}
.primary.comunicacion .card-background {
  background: linear-gradient(to bottom, rgb(147, 251, 161), rgba(174, 225, 132, 0.75), rgba(0,0,0,0));
}
.primary.eficiencia .card-background {
  background: linear-gradient(to bottom, rgb(154, 81, 238), rgba(191, 132, 225, 0.75), rgba(0,0,0,0));
}
.primary .card-title {
  text-shadow: 0px 0px 4px #000;
}
.primary .card-icon {
  filter: brightness(0%);
}
.primary {
  transition: all .2s ease-out;
}
.primary.creatividad button {
  background-color: var(--accent);
  color: white;
  border-color: var(--accent);
  font-weight: bold;
}
.primary.eficiencia button {
  background-color: var(--warning);
  color: white;
  border-color: var(--warning);
  font-weight: bold;
}
.primary.comunicacion button {
  background-color: var(--success);
  color: white;
  border-color: var(--success);
  font-weight: bold;
}
.primary.calidad button {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
  font-weight: bold;
}

.primary button {
  color: inherit;
  border-color: inherit;
  font-weight: bold;
  border-width: 2px;
  text-shadow: 0px 0px 3px #000;
}

#creatividad .card-background-inner, .creatividad:not(.card) {
  background: url('@/assets/images/creatividad.webp');
}
#eficiencia .card-background-inner, .eficiencia:not(.card)  {
  background: url('@/assets/images/eficiencia.webp');
}
#comunicacion .card-background-inner, .comunicacion:not(.card)  {
  background: url('@/assets/images/comunicacion.webp');
}
#calidad .card-background-inner, .calidad:not(.card)  {
  background: url('@/assets/images/calidad.webp');
}

#creatividad {
  color: var(--accent);
}
#eficiencia {
  color: var(--warning);
}
#comunicacion {
  color: var(--success);
}
#calidad {
  color: var(--primary);
}

#creatividad .card-title {
  color: var(--accent);
}
#eficiencia .card-title {
  color: var(--warning);
}
#comunicacion .card-title {
  color: var(--success);
}
#calidad .card-title {
  color: var(--primary);
}

.card-text {
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-shadow: 0px 0px 4px #000;
  padding: 10px;
  line-height: 30px;
  flex-direction: column;
  color: white;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 35px;
  transition: all .2s ease-out;
}
.card-img {
  flex: 1;
  height: 80%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 0px #444;
  transition: all .2s ease-out;
}


#background {
  position: absolute;
  height: 800px;
  width: 100%;
  z-index: -1px;
  top: 0px;
  left: 0px;
  background-size: cover !important;
  filter: brightness(.3);
  background-position: 0%;
}
.card-description {
  background: transparent;
  height: 50%;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  padding: 3px;
  font-weight:bold;
  color:transparent;
  font-size: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--text);
  gap: 20px;
  margin-bottom: 0px;
}

p {
  width: calc(100% - 60px);
}

@media only screen and (max-width: 790px) {
  .card {
    width: 50%;
    height: 350px;
  }
  .contents:has(.primary) {
    height: 1050px;
  }
  #background {
    height: 1050px;
  }
  .contents:has(.primary#eficiencia) #creatividad, .contents:has(.primary#eficiencia) #calidad { 
    margin-top: 350px;
  }
  .contents:has(.primary#comunicacion) #creatividad, .contents:has(.primary#comunicacion) #calidad {
    margin-top: 350px;
  }
  .contents:has(.primary#creatividad) #creatividad, .contents:has(.primary#creatividad) #calidad { 
    margin-top: -350px;
  }
  .contents:has(.primary#calidad) #creatividad, .contents:has(.primary#calidad) #calidad {
    margin-top: -350px;
  }
  .card-description {
    height: 350px;
  }
  .contents:has(.primary#eficiencia) .card-description {
    bottom: 350px;
  }
  .contents:has(.primary#comunicacion) .card-description {
    bottom: 350px;
  }
  .contents:has(.primary#creatividad) .card-description {
    bottom: 0px;
  }
  .contents:has(.primary#calidad) .card-description {
    bottom: 0px;
  }
  .card-text {
    font-size: 18px;
  }
  .card-title {
    font-size: 20px;
  }
}
@media only screen and (min-width: 791px) and (max-width: 820px) {
  .contents {
    gap: 0px;
  }
}
@media only screen and (min-width: 1200px) {
  .card {
    height: 500px;
  }
  .contents:has(.primary) {
    height: 1000px;
  }
  #background {
    height: 1000px;
  }
}
</style>
