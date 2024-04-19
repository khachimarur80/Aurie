<template>
    <div id="home" @scroll="handleScroll" ref="pageContents" @mousemove="handleMouse">
      <!--<div class="blob" v-for="(blob, i) in blobs" :style="{'top':blob.top+'px', 'left':blob.left+'px'}" :key="i">
      </div>
      <div id="blob" :style="{'top':blob.top+'px', 'left':blob.left+'px', 'transform': 'scale('+blob.scale+')'}"></div>-->
      <vNavbar :links="links"/>
      <vContacto/>
      <br><br>
      <vFooter :links="footerLinks"/>
      <vGoToTop :show="show"/>
    </div>
  </template>
  
  <script>
  import vNavbar from "@/components/contacto/vNavbar.vue"
  import vContacto from '@/components/vContacto.vue'
  import vFooter from '@/components/vFooter.vue'
  import vGoToTop from '@/components/vGoToTop.vue'
  
  export default {
    name: 'HomeView',
    components: {
      vNavbar,
      vContacto,
      vFooter,
      vGoToTop,
    },
    data: () => ({
      links: [
      ],
      footerLinks: [
      ],
      show: false,
      animationFrameId: null,
      blobs: [],
      speed: 20,
      blob: {
        top: 100,
        left: 100,
        scale: 1,
      },
      currentScroll: 0,
    }),
    methods: {
      handleMouse(event) {
        this.blob = {
          top: event.y + document.getElementById('home').scrollTop,
          left: event.x,
          scale: 2,
        }
        setTimeout(()=>{
          this.blob.scale = 1
        }, 250)
      },
      handleScroll() {
        this.blob.top += document.getElementById("home").scrollTop - this.currentScroll
        this.currentScroll = document.getElementById("home").scrollTop
        this.show = parseInt(document.getElementById("home").scrollTop) > 300
      },
      initializeBlobs() {
        let height = document.getElementById('footer').getBoundingClientRect().top;
        let width = document.body.getBoundingClientRect().width;
        for (let i = 0; i < Math.floor(height / 400); i++) {
            if (i % 2 == 0) {
                this.blobs.push({
                    top: i * 500 + Math.floor(Math.random() * 100) - 50,
                    left: Math.floor(Math.random() * -width / 2) + width / 4
                });
            } else {
                this.blobs.push({
                    top: i * 500 + Math.floor(Math.random() * 100) - 50,
                    left: Math.floor(Math.random() * -width / 2) + width / 4 + width
                });
            }
        }
      },
      updateBlobPosition() {
        let height = document.getElementById('footer').getBoundingClientRect().top;
        let width = document.body.getBoundingClientRect().width;
  
        this.blobs.forEach(blob => {
            blob.top += (Math.random() - 0.5) * this.speed;
            blob.left += (Math.random() - 0.5) * this.speed;
  
            blob.top = Math.max(0, Math.min(height - 100, blob.top));
            blob.left = Math.max(0, Math.min(width - 100, blob.left));
        });
  
        requestAnimationFrame(this.updateBlobPosition);
      }
    },
    mounted() {
      this.initializeBlobs();
      //this.updateBlobPosition();
    },
  
  }
  </script>
  
  <style>
    .blob {
      position: fixed;
      height: 300px;
      background: var(--primary);
      border-radius: 50%;
      filter: blur(150px);
      z-index: -3;
      aspect-ratio: 2/5 !important;
    }
    #blob {
      position: absolute;
      height: 100px;
      background: var(--primary);
      border-radius: 50%;
      filter: blur(80px);
      z-index: 0;
      aspect-ratio: 2/5 !important;
      transition: top .25s ease-out, left .25s ease-out, transform .25s ease-out;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
    #home {
      height: calc(100vh);
      width: 100h !important;
      overflow: hidden;
      overflow-y: scroll;
      scroll-behavior: smooth;
      user-select: none;
      position: relative;
      background-color: #171717;
    }
  
    #home::-webkit-scrollbar {
      width: 7px;
      background: rgba(255, 150, 150, .5);
    }
    #home::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 7px;
      border: 1px solid rgba(255, 255, 255, .5);
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
  