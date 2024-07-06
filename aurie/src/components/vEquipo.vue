<template>
  <div id="equipo">
    <div class="col">
      <div class="name-card">
        Antón Loredo González
      </div>
      <p>
        Actualmente cursando un grado superior en ASIR y cuento con un grado medio en Microinformática y redes.
      </p>
      <p>
        Soy un apasionado del hardware y los videojuegos.
      </p>
      <p>
        En mi tiempo libre, disfruto haciendo deporte, escuchando música y aprendiendo habilidades nuevas.
      </p>
    </div>
    <div class="col col-img" >
      <div class="image-row">
        <div class="img" b>

        </div>
        <div class="conector">

        </div>
        <div class="img" a>

        </div>
      </div>
    </div>
    <div class="col">
      <div class="name-card" style="text-align: end" b>
        Kei Rodríguez Hachimaru
      </div>
      <p>
        Actualmente cursando un grado superior en ASIR y cuento con un grado medio en Microinformática y redes.
      </p>
      <p>
        Soy un apasionado del hardware y los videojuegos.
      </p>
      <p>
        En mi tiempo libre, disfruto haciendo deporte, escuchando música y aprendiendo habilidades nuevas.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vEquipo',
  mounted() {
  }
}
</script>

<style scoped>
.col-img {
  width: 50%; 
  justify-content: center; 
  display: flex;
}
#equipo {
  padding: 30px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
}
.name-card {
  font-size: 26px;
  font-weight: bold;
  padding: 10px 25px 10px 25px;
  border: 1px solid #5B5B5B;
  border-radius: 20px;
}
p {
  opacity: .7;
}
.col:nth-child(2n+1) {
  width: 25%;
  max-width: 300px;
}
.image-row {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
}
.img {
  border: 1px solid white;
  aspect-ratio: 1 !important;
  flex: 1;
  z-index: 2;
  background-size: cover;
}
.img[b] {
  background: url('@/assets/images/retrato_anton.webp');
  background-size: cover;
}
.img[a] {
  background: url('@/assets/images/retrato_kei.webp');
  background-size: cover;
}
.conector {
  width: 10%;
  height: 2px;
  background: white;
  box-shadow: 0px 0px 4px 4px rgb(135, 17, 231);
}
@media only screen and (max-width: 1000px) {
  #equipo {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  .col {
    max-width: 500px;
  }
  .col:nth-child(2n+1) {
    width: 25%;
    max-width: 500px;
  }
  .image-row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
  .col-img {
    width: 60%;
  }
  .conector {
    width: 1px;
    height: 50px;
  }
  .img {
    min-width: 250px;
    max-width: 300px;
    width: 100%;
  }
  .col:nth-child(2n+1) {
    width: 90%;
    margin-left: 5%;
  }
  .name-card, .name-card[b] {
    text-align: center !important;
  }
}

</style>
