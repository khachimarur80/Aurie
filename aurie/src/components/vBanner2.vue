<template>
    <div id="banner23">
      <div class="banner-contents">
        <div class="text">
          <div class="text-row">
            Tu éxito empieza aquí, <span style="opacity: .6; font-weight: normal;">diseña tu futuro al mismo ritmo que tu empresa.</span>
          </div><br>
        </div>
        <div class="cards-row">
          <div class="card">
            <div class="card-img" a></div>
            <h5>Diseños mejorados</h5>
            <p>Diseños únicos y personalizados. Cada diseño es creado para ofrecer al cliente una mezcla entre inmersión y detalle.</p>
          </div>
          <div class="card">
            <div class="card-img" b></div>
            <h5>Introduce IA a tu proyecto</h5>
            <p>Consigue contenido profesional gracias a nuestra herramientas IA: imágenes, textos mejorados y mucho más.</p>
          </div>
          <div class="card">
            <div class="card-img" c></div>
            <h5>Optimiza y analiza</h5>
            <p>Descubre herramientas avanzadas para optimizar tus procesos y analizar datos de tu empresa con precisión.</p>
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
  .card-img[a] {
    background: url('@/assets/images/diseno.jpg');
    background-size: cover;
  }
  .card-img[b] {
    background: url('@/assets/images/ia.jpg');
    background-size: cover;
  }
  .card-img[c] {
    background: url('@/assets/images/optimiza.jpg');
    background-size: cover;
    background-position: center center;
  }
  .card-img {
    width: 100%;
    aspect-ratio: 8/6;
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
    width: calc(100% - 20px);
    margin: 0px;
    font-size: 14px;
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
    max-width: 400px;
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
      font-size: 40px;
      min-width: 800px;
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
  