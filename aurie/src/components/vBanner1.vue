<template>
    <div id="banner1">
      <div class="text-animation-container">
        <div class="text-animation">
          &nbsp;- AURIE - VENDE - CREA - DISEÑA&nbsp;
        </div>
        <div class="text-animation">
          &nbsp;- AURIE - VENDE - CREA - DISEÑA&nbsp;
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
  @keyframes moveText {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .text-animation-container {
    height: fit-content;
    width: fit-content;
    overflow: hidden;
    user-select: none;
    display: flex;
    align-items: center;
  }

  .text-animation:nth-child(1) {
    display: flex;
    white-space: nowrap;
    font-weight: bold;
    font-size: 4vw;
    color: rgb(177, 177, 177);
    animation: moveText 15s linear infinite;
    font-family: 'Hanson' !important;
  }
  .text-animation:nth-child(2) {
    display: flex;
    white-space: nowrap;
    font-family: 'Hanson' !important;
    font-weight: bold;
    font-size: 4vw;
    color: rgb(177, 177, 177); 
    animation: moveText 15s linear infinite;
  }
  #banner1 {
    min-height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
    transition: opacity .8s ease-in;
    padding-top: 100px;
    height: fit-content;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 800px) {
    .text-animation:nth-child(1) {
      font-size: 10vw;
    }
    .text-animation:nth-child(2) {
      font-size: 10vw;
    }
  }
  @media only screen and (min-width: 1201px) and (max-width: 1700px) {
    .text-animation:nth-child(1) {
      font-size: 4vw;
    }
    .text-animation:nth-child(2) {
      font-size: 4vw;
    }
  }
  @media only screen and (min-width: 1701px) {
    .text-animation:nth-child(1) {
      font-size: 5vw;
    }
    .text-animation:nth-child(2) {
      font-size: 5vw;
    }
  }
  </style>
  