<template>
  <div id="nosotros">
    <h1>Nosotros</h1>
    <div class="contents">
      Somos un equipo dedicado a la excelencia digital. Con una visión creativa y enfoque técnico, creamos soluciones web innovadoras que impulsan el éxito de tu negocio. Descubre el equipo detrás de tu presencia en línea excepcional.
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
