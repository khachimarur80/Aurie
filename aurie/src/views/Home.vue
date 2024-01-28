<template>
  <div id="home" @scroll="handleScroll">
    <vNavbar/>
    <vWelcoming v-if="!visitedBefore"/>
    <vBanner/>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" id="firstSvg">
      <rect width="100%" height="100%" fill="var(--background)" />
      <path d="M0 50 C100 90, 200 10, 300 50 S500 90, 600 50 S800 10, 1000 50 V0 H0 Z" fill="var(--primary)" />
    </svg>

    <vNosotros/>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      <rect width="100%" height="100%" fill="white" />
      <path d="M0 50 C100 80, 200 20, 300 50 S500 80, 600 50 S800 20, 1000 50 V0 H0 Z" fill="var(--background)"/>
    </svg>

    <vServicios/>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      <rect width="100%" height="100%" fill="var(--primary)" />
      <path d="M0 50 C100 70, 200 30, 300 50 S500 70, 600 50 S800 30, 1000 50 V0 H0 Z" fill="white" />
    </svg>

    <vProyectos/>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      <rect width="100%" height="100%" fill="var(--background)" />
      <path d="M0 50 C100 60, 200 40, 300 50 S500 60, 600 50 S800 40, 1000 50 V0 H0 Z" fill="var(--primary)" />
    </svg>

    <vEquipo/>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      <rect width="100%" height="100%" fill="white" />
      <path d="M0 50 C100 40, 200 60, 300 50 S500 40, 600 50 S800 60, 1000 50 V0 H0 Z" fill="var(--background)" />
    </svg>

    <vContacto/>
    <vFooter/>

    <vGoToTop :show="show"/>
  </div>
</template>

<script>
import vNavbar from "@/components/vNavbar.vue"
import vWelcoming from "@/components/vWelcoming.vue"
import vBanner from '@/components/vBanner.vue'
import vNosotros from '@/components/vNosotros.vue'
import vServicios from '@/components/vServicios.vue'
import vProyectos from '@/components/vProyectos.vue'
import vEquipo from '@/components/vEquipo.vue'
import vContacto from '@/components/vContacto.vue'
import vFooter from '@/components/vFooter.vue'
import vGoToTop from '@/components/vGoToTop.vue'

export default {
  name: 'HomeView',
  components: {
    vNavbar,
    vWelcoming,
    vBanner,
    vNosotros,
    vServicios,
    vProyectos,
    vEquipo,
    vContacto,
    vFooter,
    vGoToTop,
  },
  data: () => ({
    visitedBefore: false,
    show: false,
  }),
  methods: {
    handleScroll() {
      this.show = parseInt(document.getElementById("home").scrollTop) > 300
    }
  },
  mounted() {
    let smallScreen = window.innerWidth < 980

    if (smallScreen) {
      document.getElementById('welcome').style.display = 'none'
      document.getElementById('firstSvg').style.opacity = '1'
      document.getElementById('banner').style.opacity = '1'
      document.getElementById('navbar').classList.remove('hide')
      document.getElementById('navbar').classList.add('show')
      document.getElementById('home').style.overflowY = 'scroll'
    }
      else {
      this.visitedBefore = localStorage.getItem('visitedBefore');

      if (!this.visitedBefore) {
        localStorage.setItem('visitedBefore', true);
        setTimeout(()=>{
          document.getElementById('banner').style.opacity = '1'
          document.getElementById('firstSvg').style.opacity = '1'
          document.getElementById('navbar').classList.remove('hide')
          document.getElementById('navbar').classList.add('show')
          document.getElementById('home').style.overflowY = 'scroll'
        }, 3000)
        setTimeout(()=>{
          document.getElementById('welcome').style.display = 'none'
        }, 3500)
      }
      else {
        document.getElementById('firstSvg').style.opacity = '1'
        document.getElementById('banner').style.opacity = '1'
        document.getElementById('navbar').classList.remove('hide')
        document.getElementById('navbar').classList.add('show')
        document.getElementById('home').style.overflowY = 'scroll'
      }
    }
  }
}
</script>

<style>
  #home {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 120px;
    user-select: none;
    background: var(--primary);
  }
  #home::-webkit-scrollbar {
    display: none;
  }
  svg {
    overflow: hidden;
    margin: 0px;

  }
  h1 {
    font-weight: lighter;
    font-size: 40px;
  }
  hr {
    border-bottom: none;
    border-color: var(--background-dark);
  }
  #firstSvg {
    opacity: 0;
    transition: opacity .8s ease-in;
  }
</style>
