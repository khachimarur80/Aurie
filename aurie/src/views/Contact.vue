<template>
  <div id="app">
    <vNavbar/>
    <div id="contents">
      <div id="contact" class="section">
        <div class="section-inner">
          <div class="text-h4 my-5 section-title">
            Contáctanos
          </div>
          <v-divider class="mb-5"></v-divider>
          <ContactForm>
          </ContactForm>
        </div>
      </div>
      <PageFooter/>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import vNavbar from '@/components/vNavbar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'ContactView',

  components: {
    vNavbar,
    ContactForm,
    PageFooter
  },

  data: () => ({
  }),

  methods: {
  }
};
</script>
<style scoped>
  .section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .section-inner {
    width: 80%;
  }
</style>