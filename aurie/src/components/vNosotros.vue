<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <br>
    <div class="contents">
      <div class="card" id="creatividad">
        <div class="card-img">
        </div>
        <div class="card-text">
          <h2>
            <img src="@/assets/icons/creatividad.webp" height="40px" alt="Mano con pintura colorida"/>
            <span>Creatividad</span>
          </h2>
          <hr style="border-top: 1px solid var(--accent)">
          <p>Transformamos ideas en experiencias visuales únicas. Con nuestra creatividad, daremos vida a la identidad digital de tu empresa.</p>
        </div>
      </div>
      <div class="card" id="calidad">
        <div class="card-img">
        </div>
        <div class="card-text">
          <h2>
            <img src="@/assets/icons/calidad.webp" height="40px" alt="Teclado de cerca"/>
            <span>Calidad</span>
          </h2>
          <hr style="border-top: 1px solid var(--error)">
          <p>Nuestra promesa es ofrecer trabajos de alta calidad. No comprometemos la excelencia mientras impulsamos tu empresa digitalmente.</p>
        </div>
      </div>
      <div class="card" id="eficiencia">
        <div class="card-img">
        </div>
        <div class="card-text">
          <h2>
            <img src="@/assets/icons/eficiencia.webp" height="40px" alt="MacBook en mesa de cafetería"/>
            <span>Eficiencia</span>
          </h2>
          <hr style="border-top: 1px solid var(--warning)">
          <p>Nos comprometemos a resultados rápidos y eficientes. Cada paso es optimizado para asegurar un viaje sin contratiempos hacia tu presencia digital.</p>
        </div>
      </div>
      <div class="card" id="comunicacion">
        <div class="card-img">
        </div>
        <div class="card-text">
          <h2>
            <img src="@/assets/icons/comunicacion.webp" height="40px" alt="Antenta de satélite"/>
            <span>Comunicación</span>
          </h2>
          <hr style="border-top: 1px solid var(--success)">
          <p>Valoramos la comunicación constante y profesional. Estamos aquí para entender tus necesidades y expectativas, garantizando un proceso claro y transparente.</p>
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
  color: var(--text);
}
h1::after {
  content: '';
  background: var(--text);
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
}
hr {
  width: calc(100% - 50px);
  margin-bottom: 40px;
}
#nosotros {
  padding-top: 20px;
  padding-bottom: 20px;
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
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.card {
  width: 100%;
  max-width: 800px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 1px 2px 3px 0px #444;
}
#creatividad {
  background: linear-gradient(to bottom left, var(--background) 0%, rgba(66, 133, 244, 0.8) 100%);
}
#eficiencia {
  background: linear-gradient(to bottom left, var(--background) 0%, rgba(165, 119, 196, 0.8) 100%);
}
#comunicacion {
  background: linear-gradient(to bottom right, var(--background) 0%, rgba(15, 157, 88, 0.8) 100%);
  flex-direction: row-reverse;
}
#calidad {
   background: linear-gradient(to bottom right, var(--background) 0%, rgba(219, 68, 55, 0.8) 100%);
  flex-direction: row-reverse;
}

.card-text {
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px;
  line-height: 20px;
  flex-direction: column;
  color: var(--text);
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 35px;
}
.card-img {
  flex: 1;
  height: 80%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 0px #444;
}

#creatividad .card-img {
  background: url("@/assets/images/creatividad.webp");
  background-size: cover;
  background-position: center center;
}
#eficiencia .card-img {
  background: url("@/assets/images/eficiencia.webp");
  background-size: cover;
  background-position: center center;
}
#comunicacion .card-img {
  background: url("@/assets/images/comunicacion.webp");
  background-size: cover;
  background-position: center center;
}
#calidad .card-img {
  background: url("@/assets/images/calidad.webp");
  background-size: cover;
  background-position: center center;
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
  .contents {
    gap: 5px;
  }
  .card {
    height: fit-content;
  }
  .card .card-text {
    flex-direction: column !important;
    height: fit-content;
  }
  #creatividad .card-text {
  background: linear-gradient(to bottom left, var(--background) 0%, rgba(66, 133, 244, 0.8) 100%);
  }
  #eficiencia .card-text {
    background: linear-gradient(to bottom left, var(--background) 0%, rgba(165, 119, 196, 0.8) 100%);
    flex-direction: row-reverse;
  }
  #comunicacion .card-text {
    background: linear-gradient(to bottom right, var(--background) 0%, rgba(15, 157, 88, 0.8) 100%);
  }
  #calidad .card-text {
     background: linear-gradient(to bottom right, var(--background) 0%, rgba(219, 68, 55, 0.8) 100%);
    flex-direction: row-reverse;
  }
  .card-text {
    width: 70%;
    max-width: 400px;
    min-height: 240px;
    position: absolute;
    padding: 0px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  h2 {
    font-size: 20px;
    width: 65%;
  }
  p {
    font-size: 14px;
  }
  .card-img {
    width: 100%;
    height: 350px;
    border-radius: 0px;
    box-shadow: none;
    margin-top: 0px;
    margin: 0px;
  }
}
@media only screen and (min-width: 791px) and (max-width: 820px) {
  .contents {
    gap: 0px;
  }
}
</style>
