<template>
  <div id="nosotros">
    <h1>TU CONFIANZA. NUESTRO TRABAJO</h1>
    <div class="contents">
      <div class="card" id="gmfincas">
        <div class="card-inner"></div>
      </div>
      <div class="card" id="obracubica">
        <div class="card-inner"></div>
      </div>
      <div class="card" id="mysetup">
        <div class="card-inner"></div>
      </div>
      <button class="left"  @click="swapLeft">
        <img src="@/assets/icons/arrow.png" style="transform: rotate(180deg)" height="15px" width="15px">
      </button>
      <button class="right" @click="swapRight">
        <img src="@/assets/icons/arrow.png" height="15px" width="15px">
      </button>
      <div id="bluring-service"></div>
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
    swapRight() {
      let dict = {
        'obracubica' : '#733010',
        'gmfincas' : '#2D2D2D',
        'mysetup' : '#320144'
      }
      const cards = document.getElementById('nosotros').querySelectorAll('.card');
      const contents = document.getElementById('nosotros').querySelector('.contents');
      const buttons = document.getElementById('nosotros').querySelectorAll('.contents > button');
      
      if (cards.length > 0) {
        const firstCard = cards[0];
        contents.insertBefore(firstCard, buttons[0]);
        firstCard.classList.add('moveR')
        document.getElementById('bluring-service').style.background = dict[cards[2].id]
        document.getElementById('bluring-service').classList.add('glow')
        setTimeout(()=>{
          firstCard.classList.remove('moveR')
          document.getElementById('bluring-service').classList.remove('glow')
        }, 600)
      }
    },
    swapLeft() {
      let dict = {
        'obracubica' : '#733010',
        'gmfincas' : '#2D2D2D',
        'mysetup' : '#320144'
      }
      const cards = document.getElementById('nosotros').querySelectorAll('.card');
      const contents = document.getElementById('nosotros').querySelector('.contents');
      
      if (cards.length > 0) {
        const firstCard = cards[0];
        contents.insertBefore(cards[2], firstCard);
        cards[2].classList.add('moveL')
        document.getElementById('bluring-service').style.background = dict[cards[0].id]
        document.getElementById('bluring-service').classList.add('glow')
        setTimeout(()=>{
          cards[2].classList.remove('moveL')
          document.getElementById('bluring-service').classList.remove('glow')
        }, 600)
      }
    }
  }
}
</script>

<style scoped>
.glow {
  animation: glow 0.6s forwards;
}
.moveR {
  animation: moveInR 0.6s forwards;
}
@keyframes glow {
  from {
    filter: brightness(100%) blur(100px) ;
    transform: scale(.5) translate(-50%, -50%);
  }
  to {
    filter: brightness(200%) blur(100px) ;
    transform: scale(1) translate(-50%, -50%);
  }
}
@keyframes moveInR {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(35%);
  }
}
.moveL {
  animation: moveInL 0.6s forwards;
}
@keyframes moveInL {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(-35%);
  }
}
#bluring-service {
  background: #733010;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 45%;
  aspect-ratio: 1;
  border-radius: 20%;
  z-index: 0;
  filter: blur(100px) brightness(200%);
}
.left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
}
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
}
.left, .right {
  border-radius: 50%;
  border: 1px solid var(--text);
  height: 25px;
  width: 25px;
}
.left:hover, .right:hover {
  cursor: pointer;
  border-color: var(--primary);
}
h1 {
  color: var(--text);
  font-size: 30px;
  margin: 0px;
  font-weight: 900;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;
}

#nosotros {
  padding-top: 130px;
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
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all .2s ease-out;
  flex-wrap: wrap;
  aspect-ratio: 16/9;
}
.card-inner {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 5px;
}
#obracubica .card-inner {
  background: url('@/assets/images/obracubica.png');
  background-size: cover;
}
#gmfincas .card-inner {
  background: url('@/assets/images/gmfincas.png');
  background-size: cover;
}
#mysetup .card-inner {
  background: url('@/assets/images/mysetup.png');
  background-size: cover;
}
.card {
  border: 1px solid #a1a1a1;
  width: 20%;
  border-radius: 10px;
  transition: all .3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card:nth-child(1) {
  transform: translateX(-35%);
  height: 55%;/*733010*/
}
#gmfincas {
  background: linear-gradient(#2D2D2D, #656565);
}
.card:nth-child(3) {
  transform: translateX(35%);
  height: 55%;
}
#mysetup {
  background: linear-gradient(#320144, #202020);
}
.card:nth-child(2) {
  width: 60%;
  height: 60%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
#obracubica {
  background: linear-gradient(#733010, #616F73);
}



@media only screen and (max-width: 790px) {
 h1 {
  font-size: 20px;
  width: 90%;
  text-align: center;
  margin-bottom: 80px;
 }
 .contents {
  margin-top: -100px;
  margin-bottom: -60px;
 }
}
@media only screen and (min-width: 790px) {
 .contents {
  margin-top: -100px;
  margin-bottom: -60px;
 }
 .left, .right {
  height: 40px;
  width: 40px;
 }
 .left img, .right img {
  height: 22px;
  width: 22px;
 }
}
</style>
