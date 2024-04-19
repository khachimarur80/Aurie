<template>
  <button id="gototop" @click="scrollTop" :class="show ? 'show' : ''">
    <img src="@/assets/icons/chevron-up.svg" alt="Chevron Up" height="30px"/>
  </button>
</template>

<script>
export default {
  name: 'vNosotros',
  props: {
    show: {
      required: true,
      type: Boolean,
    }
  },
  mounted() {
  },
  methods: {
    scrollTop() {
      document.getElementById('home').scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
#gototop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 45px;
  width: 45px;
  background: var(--primary);
  border: 1px solid var(--background);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  pointer-events: none;
  z-index: 5;
}
#gototop:active {
  border-color: var(--text);
}
#gototop.show {
  pointer-events: auto;
  opacity: 1;
}
@media only screen and (max-width: 560px) {
  #gototop {
    bottom: 15px;
    right: 15px;
  }
}
</style>
