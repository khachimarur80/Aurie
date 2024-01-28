<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <div class="contents">
      Imagina un grupo apasionado por hacer que tu negocio brille en el mundo digital. Nosotros, con nuestra creatividad y habilidades técnicas, creamos soluciones web innovadoras para impulsar el éxito de tu empresa. Nos aseguramos de que cada paso sea claro y sencillo para el cliente. Nuestra promesa es proporcionar trabajos eficientes y rápidos sin comprometer la calidad. Valoramos la comunicación constante y profesional con nuestros clientes, asegurándonos de entender tus necesidades y expectativas, así, poder lograr resultados excepcionales.
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
  margin-bottom: 40px;
  position: relative;
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
  background: var(--background);
  padding: 20px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contents {
  padding: 30px;
  font-size: 24px;
  max-width: 400px;
  text-align: center;
}
</style>
