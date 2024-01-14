<template>
  <v-form id="contact-form" @submit.prevent="submitForm" class="pb-10" ref="contactForm">
    <v-card width="100%" height="100%" max-width="600" flat class="d-flex flex-column pa-3">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="formData.from_name"
            label="Name"
            required
            :rules="nameRules"
            variant="outlined"
            density="compact"
            name="from_name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="formData.user_email"
            label="Email"
            required
            type="email"
            :rules="emailRules"
            variant="outlined"
            density="compact"
            name="user_email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            regular
            v-model="formData.message"
            label="Message"
            required
            :rules="messageRules"
            no-resize
            auto-grow
            variant="outlined"
            density="compact"
            name="message"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex">
          <v-spacer></v-spacer>
          <v-btn type="submit" :color="sendColor" variant="outlined" :loading="sending" id="send" :disabled="(sendText!='Enviar') || (!validFields)">{{ sendText }}</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',

  methods: {
    resetForm() {
      this.$refs.contactForm.reset();
    },
    submitForm() {
      this.sending = true
      const vm = this
      emailjs.init('Ifjg_oR_H0mMlRnTI')

      emailjs.sendForm("service_p4b392o", "template_wokpaeh", '#contact-form')
      .then(function () {
        document.getElementById('contact-form').reset();
        vm.sendColor = 'success'
        vm.sendText = 'Enviado!'

        setTimeout(()=>{
          vm.sendColor = 'teal-lighten-2'
          vm.sendText = 'Enviar'
          vm.resetForm();
        }, 3000)

        vm.sending = false
      })
      .catch(function (error) {
        document.getElementById('contact-form').reset();
        vm.sendColor = 'error'
        vm.sendText = 'Error'

        setTimeout(()=>{
          vm.sendColor = 'teal-lighten-2'
          vm.sendText = 'Enviar'
          vm.resetForm();
        }, 3000)

        vm.sending = false
        console.error("Email sending failed:", error);
      });
    },
  },

  data: () => ({
    formData: {
      from_name: '',
      user_email: '',
      message: '',
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ],
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 500) || 'Message must be less than 500 characters',
    ],
    sending: false,
    sendColor: 'secondary',
    sendText: 'Enviar',
  }),

  computed: {
    validFields() {
      const isNameValid = this.nameRules.every(rule => rule(this.formData.from_name) === true);
      const isEmailValid = this.emailRules.every(rule => rule(this.formData.user_email) === true);
      const isMessageValid = this.messageRules.every(rule => rule(this.formData.message) === true);

      return isNameValid && isEmailValid && isMessageValid;
    }
  }

};
</script>
<style scoped>
#contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
#send.v-btn[disabled] {
  opacity: 1;
}
</style>
