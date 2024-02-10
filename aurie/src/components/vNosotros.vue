<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <br>
    <div class="contents">
      <div class="content-row" id="row-1">
        <div class="card" id="creatividad">
          <h2><span>Creatividad</span></h2>
          <div class="card-text">
            <img src="@/assets/icons/creatividad.webp" height="40px" alt="Mano con pintura colorida"/>
            <hr style="border-top: 1px solid var(--accent)">
            Transformamos ideas en experiencias visuales únicas. Con nuestra creatividad, daremos vida a la identidad digital de tu empresa.
          </div>
        </div>
        <div class="card" id="eficiencia">
          <h2><span>Eficiencia</span></h2>
          <div class="card-text">
            <img src="@/assets/icons/eficiencia.webp" height="40px" alt="MacBook en mesa de cafetería"/>
            <hr style="border-top: 1px solid var(--warning)">
            Nos comprometemos a resultados rápidos y eficientes. Cada paso es optimizado para asegurar un viaje sin contratiempos hacia tu presencia digital.
          </div>
        </div>
      </div>
      <div class="content-row" id="row-2">
        <div class="card" id="comunicacion">
          <h2><span>Comunicación</span></h2>
          <div class="card-text">
            <img src="@/assets/icons/comunicacion.webp" height="40px" alt="Antenta de satélite"/>
            <hr style="border-top: 1px solid var(--error)">
            Valoramos la comunicación constante y profesional. Estamos aquí para entender tus necesidades y expectativas, garantizando un proceso claro y transparente.
          </div>
        </div>
        <div class="card" id="calidad">
          <h2><span>Calidad</span></h2>
          <div class="card-text">
            <img src="@/assets/icons/calidad.webp" height="40px" alt="Teclado de cerca"/>
            <hr style="border-top: 1px solid var(--success)">
            Nuestra promesa es ofrecer trabajos de alta calidad. No comprometemos la excelencia mientras impulsamos tu empresa digitalmente.
          </div>
        </div>
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
}
</script>

<style scoped>
h1 {
  text-align: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 150px;
  color: var(--background);
}
h1::after {
  content: '';
  background: var(--background);
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
}
hr {
  width: calc(100% - 50px);
  margin-top: 20px;
  margin-bottom: 20px;
}
#nosotros {
  padding: 20px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 100h;
}
.contents {
  font-size: 24px;
  text-align: center;
  width: 100%;
  max-width: 1250px;
}
.card {
  border: 2px solid var(--primary);
  width: 400px;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.card-text {
  width: 250px;
  aspect-ratio: 25/21;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px;
  position: absolute;
  background: var(--background);
  line-height: 20px;
  flex-direction: column;
  color: #777;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
}
.card:nth-child(2) {
  transform: translateY(100px);
}
.card:nth-child(3) {
  transform: translateY(100px);
}

.content-row:nth-child(1) .card:nth-child(1) .card-text {
  bottom: -100px;
  right: -100px;
  box-shadow: 2px 4px 3px 0px #aaa;
  border: 2px solid var(--primary);
}
.content-row:nth-child(1) .card:nth-child(2) .card-text {
  top: -120px;
  left: -180px;
  box-shadow: -2px 2px 3px 0px #aaa;
  border: 2px solid var(--primary);
}
.content-row:nth-child(2) .card:nth-child(1) .card-text {
  bottom: -100px;
  right: -100px;
  box-shadow: 2px 4px 3px 0px #aaa;
  border: 2px solid var(--primary);
}
.content-row:nth-child(2) .card:nth-child(2) .card-text {
  top: -100px;
  left: -200px;
  box-shadow: -2px 2px 3px 0px #aaa;
  border: 2px solid var(--primary);
}

#creatividad {
  border: 2px solid var(--primary);
}
#eficiencia {
  border: 2px solid var(--primary);
}
#comunicacion {
  border: 2px solid var(--primary);
}
#calidad {
  border: 2px solid var(--primary);
}

.content-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 150px;
  height: 600px;
}

#creatividad {
  background: url("@/assets/images/creatividad.webp");
  background-size: cover;
  background-position: center center;
}
#eficiencia {
  background: url("@/assets/images/eficiencia.webp");
  background-size: cover;
  background-position: center center;
}
#comunicacion {
  background: url("@/assets/images/comunicacion.webp");
  background-size: cover;
  background-position: center center;
}
#calidad {
  background: url("@/assets/images/calidad.webp");
  background-size: cover;
  background-position: center center;
}

h2 {
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
}

#creatividad h2 {
  background-color: var(--primary);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}
#eficiencia h2 {
  background-color: var(--primary);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}
#comunicacion h2 {
  background-color: var(--primary);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}
#calidad h2 {
  background-color: var(--primary);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}

#creatividad span { 
  /*background: url("@/assets/images/creatividad.webp") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;*/
  display:block;
  color: black;
}
#eficiencia span { 
  /*background: url("@/assets/images/eficiencia.webp") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;*/
  display:block;
  color: black;
}
#comunicacion span { 
  /*background: url("@/assets/images/comunicacion.webp") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;*/
  color: black;
  display:block;
}
#calidad span { 
  /*background: url("@/assets/images/calidad.webp") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;*/
  color: black;
  display:block;
}

.show {
}

#creatividad {
  transform: translate(-200px, 40px);
  transition: transform .3s ease-in-out;
}
#eficiencia {
  transform: translate(200px, 40px);
  transition: transform .3s ease-in-out;
}
#row-1 {
  opacity: .5;
}
#row-1 h2 {
  opacity: 0;
  transition: opacity .6s ease-in-out;
}
#row-1 .card-text {
  opacity: 1;
  transition: opacity .6s ease-in-out;
}

#row-1.show #creatividad, #row-1.show #eficiencia {
  transform: none;
}
#row-1.show h2 {
  opacity: 1;
}
#row-1.show .card-text {
  opacity: 1;
}
#row-1.show {
  opacity: 1;
}


#comunicacion {
  transform: translate(-200px, 40px);
  transition: transform .3s ease-in-out;
}
#calidad {
  transform: translate(200px, 40px);
  transition: transform .3s ease-in-out;
}
#row-2 {
  opacity: .5;
}
#row-2 h2 {
  opacity: 0;
  transition: opacity .6s ease-in-out;
}
#row-2 .card-text {
  opacity: 1;
  transition: opacity .6s ease-in-out;
}

#row-2.show #comunicacion, #row-2.show #calidad {
  transform: none;
}
#row-2.show h2 {
  opacity: 1;
}
#row-2.show .card-text {
  opacity: 1;
}
#row-2.show {
  opacity: 1;
}

@media only screen and (max-width: 900px) {
  #comunicacion, #calidad, #eficiencia, #creatividad {
    transform: none !important;
  }
  #row-2 h2, #row-1 h2 {
    opacity: 1;
  }
  #row-2, #row-1 {
    opacity: 1;
  }
 .content-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 150px;
    gap: 100px;
    height: fit-content;
  }
  .card {
    height: 500px;
    width: calc(100% - 30px);
    max-width: 400px;
    flex-direction: column;
    justify-content: space-around;
  }

  .card-text {
    position: revert;
    width: calc(100% - 100px);
    max-width: 250px;
    height: 290px;
    color: var(--text);
  }
  h1 {
    margin-bottom: 50px;
  }
  #nosotros {
    padding-top: 0px;
  }
  h2 {
    font-size: 30px !important;
  }
}
@media only screen and (min-width: 901px) and (max-width: 1000px) {
  .card {
    height: 500px;
    width: calc(100% - 30px);
    max-width: 400px;
    flex-direction: column;
    justify-content: space-around;
  }
  .card-text {
    position: revert;
    width: calc(100% - 100px);
    max-width: 250px;
    color: var(--text);
    height: 280x;
  }
  h1 {
    margin-bottom: 50px;
  }
  h2 {
    font-size: 33px !important;
  }
}
@media only screen and (min-width: 1001px) and (max-width: 1200px) {
  h2 {
    font-size: 36px !important;
  }
  .card {
    height: 450px;
    width: 330px;
  }
  .card-text {
    width: 230px;
    height: 250px;
  }
}
</style>
