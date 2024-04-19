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
      <a class="navbar-item"  @click="scrollToSection(link.url)" v-for="(link, i) in links" :key="i">
        {{ link.name }}
      </a>
    </div>
    <div :class="['dropdown', showDropdown ? 'show' : '']" v-else>
      <div class="dropdown-toggle">
        <button @click="showDropdown = !showDropdown">
          <img src="@/assets/icons/menu.svg" height="30px" width="30px" alt="Menu icon" style="filter: invert(100%)"/>
        </button>
      </div>
      <div class="dropdown-items">
        <a class="dropdown-item" @click="scrollToSection(link.url)" v-for="(link, i) in links" :key="i">
          {{ link.name }}
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
  props: {
    links: {
      required: true
    }
  },
  mounted() {
    this.isSmall = parseInt(window.innerWidth) < 800

    window.addEventListener('resize',()=>{
      this.isSmall = parseInt(window.innerWidth) < 800
    })
  },
  methods: {
    scrollToSection(item) {
      let kitdigital = document.getElementById('kitdigital')
      let target = document.getElementById(item.toLowerCase())
      kitdigital.scrollTop = target.offsetTop - 100
    }
  }
}
</script>

<style scoped>
#navbar {
  width: 100h;
  height: 100px;
  box-sizing: border-box;
  z-index: 2;
  padding: 10px;
  display: flex;
  position: sticky;
  transition: background .15s ease-in-out;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(253, 76, 56, .15);
}
.spacer {
  flex: 1;
}
#navbar-title {
  font-size: 30px;
  color: #E3E3E3;
  font-weight: bold;
  margin-left: 16px;
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
  padding-left: 25px;
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
  color: #E3E3E3;
  user-select: none;
  text-decoration: none;
  transition: background .5s ease;
  font-size: 16px;
}

.navbar-item:hover {
  background: rgba(0, 0, 0, .3);
}

#navbar-logo {
  height: 60px;
  width: 60px !important;
}
.dropdown {
  height: 80px;
  width: 141px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: rgba(38, 38, 38, .5);
  border-bottom-left-radius: 10px;
}
.dropdown.show .dropdown-items {
  opacity: 1;
  display: flex;
  flex-direction: column;
  transform: translateY(90px);
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
  background: #262626;
}

.dropdown-toggle {
  height: calc(100% + 20px);
  width: calc(100% + 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
  z-index: 1;
  margin-right: -20px;
  background: transparent;
}
.show .dropdown-toggle {
  background: rgba(38, 38, 38, .5);
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
  background: #262626;
  cursor: pointer;
}
</style>
