<template>
    <div id="kitdigital" @scroll="handleScroll" ref="pageContents">
        <vNavbar :links="links"/>
        <vBanner/>
        <br><br>
        <vSolicitar/>
        <vLabor/>
        <vPaquetes/>
        <vFooter :links="footerLinks"/>
        <vGoToTop :show="show"/>
    </div>
  </template>
  
  <script>
  import vNavbar from "@/components/vNavbar.vue"
  import vBanner from "@/components/kitdigital/vBanner.vue"
  import vSolicitar from "@/components/kitdigital/vSolicitar.vue"
  import vLabor from "@/components/kitdigital/vLabor.vue"
  import vPaquetes from "@/components/kitdigital/vPaquetes.vue"
  import vFooter from "@/components/vFooter.vue"
  import vGoToTop from '@/components/vGoToTop.vue'
  
  export default {
    name: 'KitDigitalView',
    components: {
        vNavbar,
        vSolicitar,
        vLabor,
        vPaquetes,
        vFooter,
        vGoToTop,
        vBanner,
    },
    data: () => ({
      show: false,
      links: [
        {
          'name': 'Inicio',
          'url': '/',
        },
        {
          'name': 'Nosotros',
          'url': '/nosotros',
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
      background-color: #171717;
    }
  
    #kitdigital::-webkit-scrollbar {
      width: 7px;
      background: rgba(255, 150, 150, .5);
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
  