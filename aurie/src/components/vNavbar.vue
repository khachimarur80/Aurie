<template>
  <div id="navbar" :class="'isSmall' ? 'small' : ''">
    <div class="navbar-header">
      <a id="navbar-logo" href="/">
        <img src="@/assets/logos/logo.svg" alt="Aurie logo" height="100%" width="100%"/>
      </a>
      <a id="navbar-title" href="/">
        Aurie
      </a>
    </div>
    <div class="spacer">
    </div>
    <div class="navbar-items" v-if="!isSmall">
      <a class="navbar-item" @click="scrollToSection('nosotros')">
        Nosotros
      </a>
      <!--<a class="navbar-item" @click="scrollToSection('proyectos')">
        Proyectos
      </a>-->
      <a class="navbar-item" @click="scrollToSection('servicios')">
        Servicios
      </a>
      <a class="navbar-item" @click="scrollToSection('equipo')">
        Equipo
      </a>
      <a class="navbar-item" @click="scrollToSection('contacto')">
        Contacto
      </a>
    </div>
    <div :class="['dropdown', showDropdown ? 'show' : '']" v-else>
      <div class="dropdown-toggle">
        <button @click="showDropdown = !showDropdown">
          <img src="@/assets/icons/menu.svg" height="30px" width="30px" alt="Menu icon"/>
        </button>
      </div>
      <div class="dropdown-items">
        <a class="dropdown-item" @click="scrollToSection('nosotros')">
          Nosotros
        </a>
        <!--<a class="dropdown-item" @click="scrollToSection('proyectos')">
          Proyectos
        </a>-->
        <a class="dropdown-item" @click="scrollToSection('servicios')">
          Servicios
        </a>
        <a class="dropdown-item" @click="scrollToSection('equipo')">
          Equipo
        </a>
        <a class="dropdown-item" @click="scrollToSection('contacto')">
          Contacto
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vNavbar',
  data: () => ({
    isSmall: false,
    showDropdown: false,
  }),
  mounted() {
    this.isSmall = parseInt(window.innerWidth) < 800

    window.addEventListener('resize',()=>{
      this.isSmall = parseInt(window.innerWidth) < 800
    })
  },
  methods: {
    scrollToSection(item) {
      let home = document.getElementById('home')
      let target = document.getElementById(item.toLowerCase())
      home.scrollTop = target.offsetTop - 100
    }
  }
}
</script>

<style scoped>
#navbar {
  width: 100h;
  height: 60px;
  z-index: 2;
  padding: 10px;
  display: flex;
  position: absolute;
  transition: background .15s ease-in-out;
  top: 0;
  right: 0;
  left: 0;
  background: var(--background);
}
.spacer {
  flex: 1;
}
#navbar-title {
  font-size: 30px;
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
  gap: 5px;
  align-items: center;
}
.navbar-header {
  height: 100%;
  display: flex;
  align-items: center;
}
.navbar-item {
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 5px;
  margin-top: 0px;
  border-radius: 5px;
  color: var(--text);
  user-select: none;
  text-decoration: none;
  transition: background .5s ease;
  font-size: 16px;
}

.navbar-item:hover {
  background: #eee;
}

#navbar-logo {
  height: 60px;
  width: 60px !important;
}
.dropdown {
  height: 80px;
  width: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
  margin-top: -10px;
}
.dropdown .dropdown-items {
  opacity: 0;
  display: flex;
  flex-direction: column;
  transition: transform .3s ease-out, opacity .2s ease-out;
  transform: translateY(0px);
  pointer-events: none;
  z-index: 0;
  top: 0;
  right: -10px;
  position: absolute;
  background: var(--background);
  border-bottom-left-radius: 10px;
}
.dropdown.show .dropdown-items {
  opacity: 1;
  display: flex;
  flex-direction: column;
  transform: translateY(80px);
  pointer-events: auto;
}

.dropdown-item {
  text-decoration: none;
  color: var(--text);
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 5px;
  margin-top: 0px;
  border-radius: 5px;
  transition: background .15s ease-out
}
.dropdown-item:hover {
  background: #eee;
}

.dropdown-toggle {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  background: var(--background);
}
.dropdown-toggle button {
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;
}
.dropdown-toggle button:hover {
  background: #ddd;
  cursor: pointer;
}
</style>
