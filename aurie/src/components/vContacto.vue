<template>
  <div class="section" id="contacto">
    <div class="section-inner">
      <h1>
        Contacto
      </h1>
      <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between;" class="form-img-container">
        <form class="contact-form" id="contact-form" @submit="submitForm(event)" ref="contactForm">
        <div class="form-row">
          <label for="from_name">Nombre:</label>
          <input
            type="text"
            v-model="formData.from_name"
            required
            :rules="nameRules"
            class="outlined-input"
            name="from_name"
            id="from_name"
            placeholder="Introduce tu nombre ..."
          />
        </div>
        <div class="form-row">
          <label for="user_email">Email:</label>
          <input
            type="email"
            v-model="formData.user_email"
            required
            :rules="emailRules"
            class="outlined-input"
            name="user_email"
            id="user_email"
            placeholder="Introduce tu email ..."
          />
        </div>
        <div class="form-row">
          <label for="message">Mensaje:</label>
          <textarea
            v-model="formData.message"
            required
            :rules="messageRules"
            class="outlined-textarea"
            noresize
            name="message"
            id="message"
            placeholder="Introduce tu mensaje ..."
          ></textarea>
        </div>
        <div style="display: flex; width: 100%">
          <div style="flex-grow: 1;"></div>
          <button
            type="submit"
            :style="{'background' : sendColor}"
            id="send"
            :disabled="(sendText!='Enviar') || (!validFields)"
          >
            {{ sendText }}
          </button>
        </div>
        </form>
        <img src="@/assets/vectors/ilustracion-concepto-contactanos/3778874.webp" alt="Mujer atendiendo a cliente"/>
      </div>
    </div>
  </div>
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
        vm.sendColor = 'var(--success)'
        vm.sendText = 'Enviado!'

        setTimeout(()=>{
          vm.sendColor = 'var(--primary)'
          vm.sendText = 'Enviar'
          vm.resetForm();
        }, 3000)

        vm.sending = false
      })
      .catch(function (error) {
        document.getElementById('contact-form').reset();
        vm.sendColor = 'var(--error)'
        vm.sendText = 'Error'

        setTimeout(()=>{
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
    sendText: 'Enviar',
    sendColor: null,
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
  img {
    max-width: 40%;
  }
  #contacto {
    margin-top: -5px;
    margin-bottom: 50px;
  }
  textarea, input {
    background: white;
    color: var(--text);
    border: 1px solid #333;
    outline: none;
    border-radius: 5px;
    padding: 5px;
  }
  textarea:focus, input:focus {
    outline: 1px solid var(--primary);
  }
  textarea {
    resize: none;
  }
  .contact-form {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    height: fit-content;
    width: fit-content;
    flex-direction: column;
    background: var(--background);
    padding: 30px;
    border-radius: 10px;
    outline: 1px solid var(--primary);
    box-shadow: 2px 2px 6px 0px #777;
  }
  .form-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }


  #send {
    height: 30px;
    width: 80px;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    filter: brightness(1);
    background: var(--primary);
  }

  #send:not([disabled]) {
    cursor: pointer;
  }

  #send:not([disabled]):active {
    outline: 1px solid var(--primary);
    background: var(--background-dark);
    color: var(--primary);
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding-top: 0px !important;
  }
  .section-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    flex-direction: column;
  }
  h1 {
    color: var(--background);
    text-align: center;
    font-size: 40px;
    width: calc(100% - 30px);
    margin-top: 50px;
    margin-bottom: 100px;
    position: relative;
  }
  h1::after {
    content: '';
    background: var(--background);
    height: 3px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    position: absolute;
  }
  textarea {
    height: 100px;
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 26px;
      text-align: center;
    }
    .contact-form {
      max-width: 80%;
      margin-bottom: 50px;
    }
    input, textarea {
      max-width: 100%;
      width: 300px;
    }
    img {
      display: none;
    }
    .form-img-container {
      width: 90%;
      align-items: center;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .section {
      padding: 35px;
    }
    h1 {
      font-size: 30px;
    }
    input, textarea {
      width: 400px;
    }
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1179px) {
    img {
      display: none;
    }
    .section {
      padding: 50px;
    }
    h1 {
      font-size: 40px;
    }
    input, textarea {
      width: 433px;
    }
  }
  @media only screen and (min-width: 1178px) and (max-width: 1279px) {
    .section {
      padding: 50px;
    }
    h1 {
      font-size: 40px;
    }
    input, textarea {
      width: 433px;
    }
  }
  @media only screen and (min-width: 1280px) and (max-width: 1439px) {
    .section {
      padding: 70px;
    }
    h1 {
      font-size: 50px;
    }
    input, textarea {
      width: 466px;
    }
  }
  @media only screen and (min-width: 1440px) {
    .section {
      padding: 100px;
    }
    h1 {
      font-size: 60px;
    }
    input, textarea {
      width: 500px;
    }
  }
</style>
