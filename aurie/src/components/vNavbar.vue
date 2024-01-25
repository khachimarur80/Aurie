<template>
  <v-app-bar color="primary" flat prominent light>
    <img :src="require('@/assets/images/sample.png')" contain height="80px" width="80px" style="margin-top: 20px; margin-left: 20px;"/>
    <a class="navbar-title" href="/">
      Aurie
    </a>
    <div class="navbar-items">
      <a class="navbar-item" href="/servicios">
        Servicios
      </a>
      <a class="navbar-item" href="/contacto">
        Contacto
      </a>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ContactsView',

  components: {
  },

  data: () => ({
  }),

  methods: {
  }
};
</script>
<style>
  .navbar-items {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    padding-right: 30px;
  }

  .navbar-title {
    height: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: black !important;
    text-decoration: none;
  }

  .navbar-item {
    transform: scaleX(1);
    position: relative;
    overflow: hidden;
    color: black !important;
    font-size: 24px;
    user-select: none;
    text-decoration: none;
    transition: color .5s ease;
    color: black;
    opacity: .8;
    font-size: 20px;
    position: relative;
  }

  .navbar-item:before {
    content: "";
    position: absolute;
    display: block;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, black, #000);
    height: 2px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  .navbar-item:hover {
    opacity: 1;
  }
  .navbar-item:before {
    background-image: linear-gradient(to right, black, #000);
  }  
  .navbar-item:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>