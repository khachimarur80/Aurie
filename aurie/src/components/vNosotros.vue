<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <div class="contents">
      <div class="content-row">
        <div class="card" id="creatividad">
          <h2><span>Creatividad</span></h2>
          <p class="card-text">
            Transformamos ideas en experiencias visuales únicas. Con nuestra creatividad, daremos vida a la identidad digital de tu empresa.
          </p>
        </div>
        <div class="card" id="eficiencia">
          <h2><span>Eficiencia</span></h2>
          <p class="card-text">
            Nos comprometemos a resultados rápidos y eficientes. Cada paso es optimizado para asegurar un viaje sin contratiempos hacia tu presencia digital.
          </p>
        </div>
      </div>
      <div class="content-row">
        <div class="card" id="comunicacion">
          <h2><span>Comunicación</span></h2>
          <p class="card-text">
            Valoramos la comunicación constante y profesional. Estamos aquí para entender tus necesidades y expectativas, garantizando un proceso claro y transparente.
          </p>
        </div>
        <div class="card" id="calidad">
          <h2><span>Calidad</span></h2>
          <p class="card-text">
            Nuestra promesa es ofrecer trabajos de alta calidad. No comprometemos la excelencia mientras impulsamos tu empresa digitalmente.
          </p>
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
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 100px;
}
h1::after {
  content: '';
  background: var(--background-dark);
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
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
}
.card {
  height: 500px;
  border: 2px solid var(--primary);
  width: 400px;
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
  font-size: 18px;
  border-radius: 20px;
  padding: 10px;
  position: absolute;
  background: var(--background);
  line-height: 25px;
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
  border: 2px solid var(--accent);
}
.content-row:nth-child(1) .card:nth-child(2) .card-text {
  top: -120px;
  left: -180px;
  box-shadow: -2px 2px 3px 0px #aaa;
  border: 2px solid var(--warning);
}
.content-row:nth-child(2) .card:nth-child(1) .card-text {
  bottom: -100px;
  right: -100px;
  box-shadow: 2px 4px 3px 0px #aaa;
  border: 2px solid var(--success);
}
.content-row:nth-child(2) .card:nth-child(2) .card-text {
  top: -100px;
  left: -200px;
  box-shadow: -2px 2px 3px 0px #aaa;
  border: 2px solid var(--error);
}

#creatividad {
  border: 2px solid var(--accent);
}
#eficiencia {
  border: 2px solid var(--warning);
}
#comunicacion {
  border: 2px solid var(--success);
}
#calidad {
  border: 2px solid var(--error);
}

.content-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 150px;
}

#creatividad {
  background: url("@/assets/images/creatividad.jpg");
  background-size: cover;
  background-position: center center;
}
#eficiencia {
  background: url("@/assets/images/eficiencia.jpg");
  background-size: cover;
  background-position: center center;
}
#comunicacion {
  background: url("@/assets/images/comunicacion.jpg");
  background-size: cover;
  background-position: center center;
}
#calidad {
  background: url("@/assets/images/calidad.jpg");
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
  background-color: var(--accent);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}
#eficiencia h2 {
  background-color: var(--warning);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}
#comunicacion h2 {
  background-color: var(--success);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}
#calidad h2 {
  background-color: var(--error);
  overflow:hidden;
  display:inline-block; 
  font-weight:bold;
  color:transparent;
  font-size: 40px;
}

#creatividad span { 
  background: url("@/assets/images/creatividad.jpg") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display:block;
}
#eficiencia span { 
  background: url("@/assets/images/eficiencia.jpg") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display:block;
}
#comunicacion span { 
  background: url("@/assets/images/comunicacion.jpg") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display:block;
}
#calidad span { 
  background: url("@/assets/images/calidad.jpg") -20px -20px repeat;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display:block;
}
</style>
