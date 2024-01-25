<template>
  <div id="app">
    <vNavbar/>
    <div id="contents">
        <PageFooter/>
    </div>
  </div>
</template>

<script>
import vNavbar from '@/components/vNavbar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'ServicesView',

  components: {
    vNavbar,
    PageFooter
  },

  data: () => ({
  }),

  methods: {
  }
};
</script>
<style>
</style>