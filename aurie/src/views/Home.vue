<template>
  <div id="home" @scroll="handleScroll" ref="pageContents">
    <div 
      class="parallax" 
      ref="parallaxContainer">

      <!--<div :style="{ backgroundImage: 'url(' + parallax.lazy + ')' }" class="parallax-image" ref="lowResImage"></div>
      <div ref="highResImage" :style="{ backgroundImage: 'url(' + parallax.image + ')' }" class="parallax-image" loading="lazy"></div>-->

      <!--<div :style="{ backgroundImage: 'url(' + parallax1.lazy + ')' }" class="parallax-image" ref="lowResImage1"></div>
     <div ref="highResImage1" :style="{ backgroundImage: 'url(' + parallax1.image + ')' }" class="parallax-image" loading="lazy"></div>

      <div :style="{ backgroundImage: 'url(' + parallax2.lazy + ')' }" class="parallax-image" ref="lowResImage2"></div>
      <div ref="highResImage2" :style="{ backgroundImage: 'url(' + parallax2.image + ')' }" class="parallax-image" loading="lazy"></div>-->


    </div>

    <vNavbar/>
    <vBanner/>
    <vNosotros/>
    <vProyectos/>
    <vServicios/>
    <vEquipo/>
    <vContacto/>
    <vFooter/>

    <vGoToTop :show="show"/>
  </div>
</template>

<script>
import vNavbar from "@/components/vNavbar.vue"
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
    show: false,
    parallax: {
      image: require('@/assets/images/parallax.webp'),
      lazy: require('@/assets/images/parallax-lazy.webp')
    },
    parallax1: {
      image: require('@/assets/images/parallax1.webp'),
      lazy: require('@/assets/images/parallax1-lazy.webp')
    },
    parallax2: {
      image: require('@/assets/images/parallax2.webp'),
      lazy: require('@/assets/images/parallax2-lazy.webp')
    },
    animationFrameId: null,
  }),
  methods: {
    handleScroll() {
      this.show = parseInt(document.getElementById("home").scrollTop) > 300

      if (!this.animationFrameId) {
        this.animationFrameId = requestAnimationFrame(() => {
          const contentScrollTop = this.$refs.pageContents.scrollTop;
          this.$refs.parallaxContainer.scrollTop = contentScrollTop*.8;
          this.animationFrameId = null;
        });
      }

      let row1 = document.getElementById('row-1')
      let row2 = document.getElementById('row-2')
      let mysetup = document.getElementById('MySetup')
      let kawebs = document.getElementById('KAwebs')
      let cto = document.getElementById('CTO')
      let ceo = document.getElementById('CEO')

      if (row1) {
        const rect = row1.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFrameInViewport = rect.top >= -rect.height/2 && rect.bottom <= windowHeight + rect.height/2

        if (isFrameInViewport) {
          row1.classList.add('show')
        }
        else {
          row1.classList.remove('show')
        }
      }
      if (row2) {
        const rect = row2.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFrameInViewport = rect.top >= -rect.height/1.5 && rect.bottom <= windowHeight + rect.height/1.5

        if (isFrameInViewport) {
          row2.classList.add('show')
        }
        else {
          row2.classList.remove('show')
        }
      }
      if (mysetup) {
        const rect = mysetup.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFrameInViewport = rect.top >= -rect.height/1.5 && rect.bottom <= windowHeight + rect.height/1.5

        if (isFrameInViewport) {
          mysetup.classList.add('show')
        }
        else {
          mysetup.classList.remove('show')
        }
      }
      if (kawebs) {
        const rect = kawebs.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFrameInViewport = rect.top >= -rect.height/2 && rect.bottom <= windowHeight + rect.height/2

        if (isFrameInViewport) {
          kawebs.classList.add('show')
        }
        else {
          kawebs.classList.remove('show')
        }
      }
      if (ceo) {
        const rect = ceo.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFrameInViewport = rect.top >= -rect.height/1.5 && rect.bottom <= windowHeight + rect.height/1.5

        if (isFrameInViewport) {
          ceo.classList.add('show')
        }
        else {
          ceo.classList.remove('show')
        }
      }
      if (cto) {
        const rect = cto.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFrameInViewport = rect.top >= -rect.height/1.5 && rect.bottom <= windowHeight + rect.height/1.5

        if (isFrameInViewport) {
          cto.classList.add('show')
        }
        else {
          cto.classList.remove('show')
        }
      }
    }
  },
  mounted() {
    /*const highResImage = this.$refs.highResImage;
    if (highResImage) {
      setTimeout(() => {
        highResImage.style.display = 'block';
        this.$refs.lowResImage.style.display = 'none';
      }, 1000);
    }*/

    /*const highResImage1 = this.$refs.highResImage1;
    if (highResImage1) {
      setTimeout(() => {
        highResImage1.style.display = 'block';
        this.$refs.lowResImage1.style.display = 'none';
      }, 1000);
    }

    const highResImage2 = this.$refs.highResImage2;
    if (highResImage2) {
      setTimeout(() => {
        highResImage2.style.display = 'block';
        this.$refs.lowResImage2.style.display = 'none';
      }, 1000);
    }*/
  },
  head() {
      return {
        link: [
          {
            rel: "preload",
            fetchpriority: "high",
            as: "image",
            href: this.parallax.image,
            type: "image/webp"
          },
          {
            rel: "preload",
            fetchpriority: "high",
            as: "image",
            href: this.parallax.lazy,
            type: "image/webp"
          },
          {
            rel: "preload",
            fetchpriority: "high",
            as: "image",
            href: this.parallax1.image,
            type: "image/webp"
          },
          {
            rel: "preload",
            fetchpriority: "high",
            as: "image",
            href: this.parallax1.lazy,
            type: "image/webp"
          },
          {
            rel: "preload",
            fetchpriority: "high",
            as: "image",
            href: this.parallax2.image,
            type: "image/webp"
          },
          {
            rel: "preload",
            fetchpriority: "high",
            as: "image",
            href: this.parallax2.lazy,
            type: "image/webp"
          },
        ],
      }
  },
}
</script>

<style>
  #home {
    height: calc(100vh);
    width: 100h !important;
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-padding-top: 120px;
    user-select: none;
  }

  #home::-webkit-scrollbar {
    width: 7px;
    display: none;
  }
  #home::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 10rem;
    border: 1px solid var(--primary);
  }


  #home::-webkit-scrollbar-track-piece:start {
    background: transparent;
  }

  #home::-webkit-scrollbar-track-piece:end {
    background: transparent;
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
  .parallax {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    filter: brightness(1.05);
  }
  .parallax-image, .parallax-image-low-res {
    background-size: cover;
    background-position: 50% 50%;
    height: 2400px;
  }

</style>
