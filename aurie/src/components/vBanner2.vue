<template>
    <div id="banner" ref="banner">
      <div class="hero-background">
      </div>
      <div class="banner-contents">
        <div class="text">
          <div class="text-row" style="flex-direction: column; gap: 0px;">
            <h2>ALIMENTANDO</h2>
            <h2>MENTES</h2>
            <h2>INQUIETAS</h2><br><br>
          </div>
        </div>
        <a class="ver-mas" href="#nosotros">Conócenos</a>
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
  .ver-mas {
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 5px 10px 5px 10px;
    background: none;
    color: var(--primary);
    text-decoration: none;
    font-size: 24px;
    margin-left: 50px;
    transition: all .2s ease-out;
  }
  .ver-mas:hover {
    color: #171717;
    background-color: var(--primary);
}
  #banner {
    min-height: 450px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    z-index: 0;
    transition: opacity .8s ease-in;
    width: 100%;
    aspect-ratio: 5/2;
    background-size: cover;
    position: relative;
    padding-top: 100px;
    box-sizing: border-box;
  }
  .hero-background {
    background: url('@/assets/images/cerebro2.webp');
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
    top: 0;
    bottom: 0;
    right: 40%;
    left: 10%;
    opacity: .3;
    filter: blur(1px);
  }
  .banner-contents {
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 0;
    transition: opacity .8s ease-in;
    width: 100%;
    height: 100%;
  }
  
  .slogan {
    border: 1px solid red;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 50%;
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
    font-size: 40px;
    font-weight: 300;
    margin: 0px;
    width: 100%;
    font-style: italic;
  }
  h2:nth-child(2) {
    text-align: end;
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
    flex-direction: column;
    width: calc(100% - 40px);
    max-width: 300px;
  }
  .hero-image {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
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
    .hero-background {
      left: 0%;
      right: 0%;
    }
    .ver-mas {
      margin-left: 0px;
      font-size: 18px;
    }
    .banner-contents {
      flex-direction: column !important;
      padding-bottom: 50px;
    }
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
    h2 {
      font-size: 60px;
    }
  }
  @media only screen and (min-width: 901px) and (max-width: 1700px) {
    h2 {
      font-size: 90px;
    }
    .text-row {
      max-width: 500px;
    }
  }
  @media only screen and (min-width: 1701px) {
    h2 {
      font-size: 120px;
    }
    .text-row {
      max-width: 500px;
    }
  }
  </style>
  