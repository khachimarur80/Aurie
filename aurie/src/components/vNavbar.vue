<template>
  <div id="navbar" class="hide">
    <a id="navbar-logo" href="/">
      <img src="@/assets/logo.svg" alt="Aurie logo" height="100%" width="100%"/>
    </a>
    <a id="navbar-title" href="/">
      Aurie
    </a>
    <div class="spacer">
    </div>
    <div class="navbar-items">
      <a class="navbar-item" href="#nosotros">
        Nosotros
      </a>
      <a class="navbar-item" href="#servicios">
        Servicios
      </a>
      <a class="navbar-item" href="#proyectos">
        Proyectos
      </a>
      <a class="navbar-item" href="#equipo">
        Equipo
      </a>
      <a class="navbar-item" href="#contacto">
        Contacto
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vNavbar',
  mounted() {
  }
}
</script>

<style scoped>
#navbar {
  width: 100h;
  height: 100px;
  background: var(--primary);
  z-index: 2;
  padding: 10px;
  display: flex;
  position: absolute;
  transition: opacity .5s ease-in-out;
  top: 0;
  right: 0;
  left: 0;
}
.spacer {
  flex: 1;
}
#navbar.show {
  opacity: 1;
  pointer-events: auto;
}
#navbar.hide {
  opacity: 0;
  pointer-events: none;
}
#navbar-title {
  font-size: 50px;
  color: var(--text);
  font-weight: bold;
  margin-left: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.navbar-items {
  padding: 10px;
  display: flex;
  gap: 50px;
  align-items: center;
}

.navbar-item {
  transform: scaleX(1);
  position: relative;
  overflow: hidden;
  color: var(--text) !important;
  user-select: none;
  text-decoration: none;
  transition: color .5s ease;
  font-size: 24px;
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
  background-image: linear-gradient(to right, var(--text), var(--text));
  height: 2px;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.navbar-item:hover {
  opacity: 1;
}
.navbar-item:before {
  background-image: linear-gradient(to right, var(--text), var(--text));
}  
.navbar-item:hover:before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
#navbar-logo {
  height: 100px;
  width: 100px !important;
}

@media only screen and (max-width: 680px) {
  #navbar {
    height: 90px;
    align-items: center;
    justify-content: center;
    flex-direction: column !important;
  }
  #navbar-title {
    font-size: 30px;
    margin-left: 20px;
    margin-top: -50px;
    transform: translateX(20px);
  }
  #navbar-logo {
    height: 50px;
    width: 50px;
    transform: translateX(-60px);
  }
  .navbar-item {
    font-size: 16px;
  }
  .navbar-items {
    justify-content: space-around;
    padding: 0px;
    margin: 0px;
    gap: 10px;
    margin-top: 20px;
    flex: 1;
  }
  .spacer {
    display: none;
  }
}

@media only screen and (min-width: 681px) and (max-width: 1080px) {
  #navbar-title {
    font-size: 40px;
    margin-top: -100px;
    transform: translateX(30px);
  }
  #navbar-logo {
    height: 80px;
    width: 80px;
    float: left;
    transform: translateX(-60px);
  }
  #navbar {
    align-items: center;
    justify-content: center;
    height: 150px;
    flex-direction: column;
  }
  .navbar-items {
    width: 100%;
    justify-content: center;
    justify-content: center;
  }
  .navbar-item {
    font-size: 20px;
  }
  .spacer {
    display: none;
  }
}
</style>
