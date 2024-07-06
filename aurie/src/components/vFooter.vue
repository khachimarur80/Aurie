<template>
  <footer id="footer">
    <div class="row">
      <div class="col">
        <h6>CONTACTO</h6>
        <p>+34 665 54 25 94</p>
        <p>contacto@aurie.es</p>
        <a style="text-decoration: underline;">Agendar reunión</a>
      </div>
      <div class="col">
        <h6>RECURSOS</h6>
        <a href="/nosotros">Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="/proyectos">Proyectos</a>
        <a href="/contacto">Contacto</a>
        <a href="/kit-digital">Kit Digital</a>
      </div>
      <div class="col">
        <h6>PRODUCTOS</h6>
        <a>Kit Digital</a>
        <a>Diseño y desarrollo web</a>
        <a>Marketing Digital</a>
      </div>
    </div>
    <div style="width: 90%;  height: 1px; background: #6D6D6D;;"></div>
    <div class="row" style="margin-bottom: 20px; align-items: center; justify-content: center;">
      <div style="width: 28%; display: flex; justify-content: center;">
        <p t>© 2024 Aurie. Todos los derechos reservados</p>
      </div>
      <div style="width: 28%; display: flex; justify-content: center;">
        <img height="50px" width="50px" src="@/assets/logos/logo.webp">
      </div>
      <div style="width: 28%; display: flex; justify-content: flex-end;">
        <div style="display: flex; gap: 10px; padding-right: 20px;">
          <img class="social-icon" height="25px" width="25px" src="@/assets/icons/logotipo-de-instagram_3.webp">
          <img class="social-icon" height="25px" width="25px" src="@/assets/icons/tik-tok_1.webp">
          <img class="social-icon" height="25px" width="25px" src="@/assets/icons/logotipo-de-linkedin.webp">
          <img class="social-icon" height="25px" width="25px" src="@/assets/icons/youtube_1.webp">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'vFooter',
  data: ()=>({
    socials: [
      {
        name: 'Instagram',
        icon: require('@/assets/icons/instagram.webp'),
        link: '',
      },
      {
        name: 'Facebook',
        icon: require('@/assets/icons/facebook.webp'),
        link: '',
      },
      {
        name: 'Twitter',
        icon: require('@/assets/icons/twitter.webp'),
        link: '',
      },
      {
        name: 'YouTube',
        icon: require('@/assets/icons/youtube.webp'),
        link: '',
      },
    ]
  }),
  props: {
    links: {
      required: true
    }
  }
}
</script>

<style scoped>
#footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 10;
}
h6 {
  color: white;
}
p, a {
  color: #6D6D6D;
  margin: 2px;
  text-align: center;
  text-decoration: none;
}
.row {
  min-height: 30px;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
}
@media only screen and (max-width: 600px) {
  .social-icon {
    height: 20px;
    width: 20px;
  }
  p[t] {
    font-size: 13px;
  }
}
</style>
