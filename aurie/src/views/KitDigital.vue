<template>
    <div id="kitdigital" @scroll="handleScroll" ref="pageContents">
        <vNavbar :links="links"/>
        <br><br>
        <h1 style="color: white; text-align: center;">KIT DIGITAL</h1>
        <div style="width: 100%; display: flex; justify-content: center">
          <img id="bannerkitdigital" src="@/assets/images/Logo-digitalizadores.png"/>
        </div>
        <vSolicitar/>
        <vPaquetes/>
        <vFooter :links="footerLinks"/>
        <vGoToTop :show="show"/>
    </div>
  </template>
  
  <script>
  import vNavbar from "@/components/kitdigital/vNavbar.vue"
  import vSolicitar from "@/components/kitdigital/vSolicitar.vue"
  import vPaquetes from "@/components/kitdigital/vPaquetes.vue"
  import vFooter from "@/components/vFooter.vue"
  import vGoToTop from '@/components/kitdigital/vGoToTop.vue'
  
  export default {
    name: 'KitDigitalView',
    components: {
        vNavbar,
        vSolicitar,
        vPaquetes,
        vFooter,
        vGoToTop,
    },
    data: () => ({
      show: false,
      links: [
        {
          name: 'Inicio',
          url: '/'
        },
        {
          'name': 'Servicios',
          'url': '/servicios',
        },
        {
          'name': 'Nosotros',
          'url': '/nosotros',
        },
        {
          'name': 'Proyectos',
          'url': '/proyectos',
        },
        {
          'name': 'Contacto',
          'url': '/contacto',
        },
      ],
      footerLinks: [
        {
          'name': 'Solicitar',
          'url': '#solicitar',
        },
        {
          'name': 'Labor',
          'url': '#labor',
        },
        {
          'name': 'Paquetes',
          'url': '#paquetes',
        },
      ]
    }),
    methods: {
      handleScroll() {
        this.show = parseInt(document.getElementById("kitdigital").scrollTop) > 300
      },
    },
    mounted() {
    },
  
  }
  </script>
  
  <style>
    #bannerkitdigital {
      width: 90%;
      max-width: 800px;
    }
    .section-text {
        margin: 0px;
        color: #E3E3E3;
        opacity: .7;
        width: 50%;
        margin-left: 15px;
        text-align: center;
    }
    #kitdigital {
      height: calc(100vh);
      width: 100h !important;
      overflow: hidden;
      overflow-y: scroll;
      scroll-behavior: smooth;
      user-select: none;
      position: relative;
      background-color: #000;
    }
  
    #kitdigital::-webkit-scrollbar {
      width: 7px;
      background: rgba(208, 150, 255, 0.5) !important;
    }
    #kitdigital::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 7px;
      border: 1px solid rgba(255, 255, 255, .5);
    }
  
  
    #kitdigital::-webkit-scrollbar-track-piece:start {
      background: transparent;
    }
  
    #kitdigital::-webkit-scrollbar-track-piece:end {
      background: transparent;
    }

  
  </style>
  