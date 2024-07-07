<template>
    <div id="banner23">
      <div class="banner-contents">
        <div class="text">
          <div class="text-row">
            En Aurie, transformamos tus ideas en realidad, <span style="opacity: .6; font-weight: normal;"> si lo puedes imaginar, lo podemos diseñar.</span>
          </div><br>
        </div>
        <h2 style="text-align: center; color: white;">Proyectos</h2><br><br>
        <div class="cards-row">
          <div class="card">
            <div class="card-img" a>
              <img src="@/assets/logos/Mysetup.webp" width="50%">
            </div>
            <h5>MySetup (2023)</h5>
            <p>MySetup es un proyecto creado para tal y cual de los mejores sisisi ok lorem ipsum</p>
          </div>
          <div class="card">
            <div class="card-img" b>
              <img src="@/assets/logos/logo.webp" width="50%">
            </div>
            <h5>Aurie (2024)</h5>
            <p>Aurie es un proyecto creado para tal y cual de los mejores sisisi ok lorem ipsum.</p>
          </div>
          <div class="card">
            <div class="card-img" c>
              <img src="@/assets/icons/more.png" width="30%">
            </div>
            <h5>Próximamente...</h5>
            <p>Coming soon.


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
  .cards-row {
    display: flex; 
    gap: 20px; 
    width: 100%;
  }
  .card-img {
    width: calc(100% - 40px);
    aspect-ratio: 9/6;
    margin: 20px;
    box-sizing: border-box;
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  #banner23 {
    min-height: 450px;
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
    flex-direction: column !important;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 0;
    transition: opacity .8s ease-in;
    width: 100%;
    height: 100%;
    max-width: 800px;
  }
  
  .slogan {
    border: 1px solid red;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
  }
  h1 {
    color: rgb(253, 76, 56);
    font-size: 45px;
    margin: 0px;
    font-weight: 900;
    margin-bottom: -30px;
    text-shadow: 0px 0px 4px rgb(253, 76, 56);
  }
  h3 {
    color: var(--text);
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
    width: 100%;
  }
  h3:nth-child(2) {
    color: var(--text);
    opacity: .6;
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
    width: calc(50%);
    min-width: 450px;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
  .hero-image {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .card {
    box-shadow: 0px 0px 2px 0px var(--text);
    flex: 1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    aspect-ratio: 4/5;
    background: #101010;
  }
  h5 {
    color: var(--text);
    text-align: center;
    font-family: 'Helvetica';
    font-size: 16px;
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
    .text-row, .text {
      width: 100%;
    }
    .text {
      display: flex;
      align-items: center;
    }
    .text-row {
      font-size: 20px;
      max-width: 100%;
      transform: none;
      min-width: 0px !important;
      max-width: 350px;
    }
    .cards-row {
      width: 80%;
      flex-direction: column;
      align-items: center;
    }
    .card {
      width: 80%;
      min-width: 300px;
      max-width: 350px;
    }
    .banner-contents {
      width: 100vh;
      padding: 20px;
      overflow: hidden;
      height: fit-content;
    }
  }
  @media only screen and (min-width: 801px) and (max-width: 900px) {
    .banner-contents {
      width: 90%;
    }
  }
  @media only screen and (min-width: 901px) and (max-width: 1700px) {
    .banner-contents {
      max-width: 800px;
    }
  }
  @media only screen and (min-width: 1701px) {
    .text-row {
      font-size: 30px;
    }
    .banner-contents {
      max-width: 1100px;
    }
    h5 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
  </style>
  