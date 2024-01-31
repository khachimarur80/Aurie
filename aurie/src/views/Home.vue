<template>
  <div id="home" @scroll="handleScroll" ref="pageContents">
    <div 
      class="parallax" 
      ref="parallaxContainer">

      <div :style="{ backgroundImage: 'url(' + parallax.lazy + ')' }" class="parallax-image" loading="lazy"></div>

      <div ref="highResImage" :style="{ backgroundImage: 'url(' + parallax.image + ')' }" class="parallax-image" loading="lazy" style="display: none;"></div>
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
      image: require('@/assets/images/parallax.jpg'),
      lazy: require('@/assets/images/parallax.jpg')
    },
    animationFrameId: null,
  }),
  methods: {
    handleScroll() {
      this.show = parseInt(document.getElementById("home").scrollTop) > 300

      if (!this.animationFrameId) {
        this.animationFrameId = requestAnimationFrame(() => {
          const contentScrollTop = this.$refs.pageContents.scrollTop;
          this.$refs.parallaxContainer.scrollTop = contentScrollTop*.1;
          this.animationFrameId = null;
          console.log(contentScrollTop)
          console.log(this.$refs.parallaxContainer.scrollTop)
        });
      }
    }
  },
  mounted() {
    const highResImage = this.$refs.highResImage;
    if (highResImage) {
      highResImage.addEventListener('load', () => {
        highResImage.style.display = 'block';
        this.$el.querySelector('.parallax-image-low-res').style.display = 'none';
      });
    }
  }
}
</script>

<style>
  #home {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-padding-top: 120px;
    user-select: none;
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
  .parallax {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    filter: brightness(1.05);
  }
  .parallax-image {
    height: 1100px;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
