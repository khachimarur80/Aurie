<template>
  <div class="section" id="contacto">
    <div class="section-inner">
      <h1>
        Contacto
      </h1>
      <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between;" class="form-img-container">
        <form class="contact-form" id="contact-form" @submit="submitForm" ref="contactForm">
          <div class="form-contents">
            <div class="form-row">
              <label for="from_name">Nombre:</label>
              <input 
                type="text" 
                id="from_name" 
                name="from_name" 
                required 
                aria-describedby="username-error" 
                placeholder="Introduce tu nombre" 
                v-model="formData.from_name" 
                @focusout="validateField('from_name')" 
                @keyup="validateField('from_name')">
              <div id="name-error" class="error-message" aria-live="polite">{{ errors.from_name }}</div>
            </div>
            <div class="form-row">
              <label for="user_email">Email:</label>
              <input 
                type="email" 
                id="user_email" 
                name="user_email" 
                required 
                aria-describedby="email-error" 
                placeholder="Introduce tu email" 
                v-model="formData.user_email" 
                @focusout="validateField('user_email')" 
                @keyup="validateField('user_email')">
              <div id="email-error" class="error-message" aria-live="polite">{{ errors.user_email }}</div>
            </div>
            <div class="form-row">
              <label for="message">Mensaje:</label>
              <textarea
                type="text" 
                id="message" 
                name="message" 
                required 
                aria-describedby="message-error" 
                placeholder="Introduce tu mensaje" 
                v-model="formData.message" 
                @focusout="validateField('message')" 
                @keyup="validateField('message')"></textarea>
              <div id="message-error" class="error-message" aria-live="polite">{{ errors.message }}</div>
            </div>
            <div style="display: flex; width: 100%">
              <div style="flex-grow: 1;"></div>
              <button
                type="submit"
                :style="{'--color' : sendColor}"
                id="send"
                tabindex="-1" 
                :disabled="!validForm"
              >
                <span v-if="!sending">{{ sendText }}</span>
                <span class="loader" v-else></span>
              </button>
            </div>
          </div>
          <div class="contact-image">
            <img src="@/assets/vectors/ilustracion-concepto-contactanos/3778874.webp" alt="Mujer atendiendo a cliente"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',

  data: () => ({
    validForm: false,
    formData: {
      from_name: '',
      user_email: '',
      message: '',
    },    
    errors: {
      from_name: '',
      user_email: '',
      message: '',
    },
    sending: false,
    sendText: 'Enviar',
    sendColor: 'var(--primary)',
  }),

  methods: {
    resetForm() {
      this.$refs.contactForm.reset();
      this.formData = {
        from_name: '',
        user_email: '',
        message: '',
      };
    },
    submitForm(event) {
      event.preventDefault()
      this.validForm = false
      this.sending = true
      const vm = this
      emailjs.init('WkI3DSJE1qYxuj1gL')

      emailjs.sendForm("service_ugxtn1e", "template_3qsuwob", '#contact-form')
      .then(function () {
        vm.sendColor = 'var(--success)'
        vm.sendText = 'Enviado!'

        setTimeout(()=>{
          vm.sendColor = 'var(--primary)'
          vm.sendText = 'Enviar'
          vm.resetForm();
        }, 3000)

        vm.sending = false
      })
      .catch(function () {
        vm.sendColor = 'var(--error)'
        vm.sendText = 'Error'

        setTimeout(()=>{
          vm.sendColor = 'var(--primary)'
          vm.sendText = 'Enviar'
          vm.resetForm();
        }, 3000)

        vm.sending = false
      });
    },
    validateAllFields() {
      let valid = true

      if (!this.formData.user_email.trim()) {
        valid = false
      } 
      else if (!/\S+@\S+\.\S+/.test(this.formData.user_email)) {
        valid = false
      } 
      if (!this.formData.from_name.trim()) {
        valid = false
      } 
      if (!this.formData.message.trim()) {
        valid = false
      } 

      return valid
    },
    validateField(field) {
      let fields = ['user_email', 'from_name', 'message']

      switch (fields.indexOf(field)) {
        case 0:
          if (!this.formData.user_email.trim()) {
            this.errors.email = 'Introduce tu email!';
          } 
          else if (!/\S+@\S+\.\S+/.test(this.formData.user_email)) {
            this.errors.user_email = 'Email inválido!';
          } 
          else {
            this.errors.user_email = '';
          }
          break;
        case 1:
          if (!this.formData.from_name.trim()) {
            this.errors.from_name = 'Introduce tu  nombre!';
          } 
          else {
            this.errors.from_name = '';
          }
          break;
        case 2:
          if (!this.formData.message.trim()) {
            this.errors.message = 'Escribe tu mensaje!';
          } 
          else {
            this.errors.message = '';
          }
          break;
      }

      this.validForm = this.validateAllFields()

      if (this.validForm) {
        this.sendColor = "var(--accent)"
      }
    },
  },

};
</script>
<style scoped>
  #contacto {
    margin-top: -5px;
    margin-bottom: 50px;
  }
  textarea, input {
    background: white;
    color: var(--text);
    border: 1px solid #333;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    background: transparent;
    margin-top: -30px;
  }
  textarea:focus, input:focus {
    outline: 1px solid var(--primary);
  }
  textarea {
    resize: none;
  }
  .contact-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom right, #171717 50%, #311212 100%);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 0px #333;
    max-height: 400px;
  }
  .contact-image {
    height: 400px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  img {
    height: 100%;
  }
  .form-contents {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    height: fit-content;
    width: fit-content;
    flex-direction: column;
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
    cursor: pointer;
    background: var(--color);
    padding: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 8px;
    border: none;
    width: 80px;
    height: 35px;
    color: white;
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
    color: rgb(253, 76, 56);
    font-size: 35px;
    margin: 0px;
    font-weight: 900;
    text-shadow: 0px 0px 4px rgb(253, 76, 56);
    position: relative;
    margin-top: 50px;
    margin-bottom: 80px;
  }
  h1::after {
    content: '';
    background: rgb(253, 76, 56);
    height: 4px;
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
      width: 100%;
    }
    .form-contents {
      width: calc(100% - 20px);
    }
    input, textarea {
      width: 100%;
    }
    img, .contact-image {
      display: none;
    }
    .form-img-container {
      width: 100%;
    }
    label::before {
      height: 4px !important;
      transform: translateY(-2px) !important;
      background: #171717 !important;
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
    img, .contact-image  {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1179px) {
    img, .contact-image  {
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

  .error-message {
    color: var(--error);
    font-size: 12px;
    margin: 0px;
    margin-top: -15px;
    margin-bottom: -10px;
    width: 100%;
    height: 24px;
    font-weight: bold;
  }
  #send[disabled] {
    cursor: not-allowed;
  }

  .loader {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 3px solid var(--primary);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }

  label {
    transform: translateX(30px);
    font-size: 13px;
    width: fit-content;
    padding-left: 10px;
    color: #AAA;
    position: relative;
  }
  label::before {
    content: '';
    width: 100%;
    height: 2px;
    background: #171717;
    position: absolute;
    top: 50%;
    z-index: -1;
    left: 6px;
    transform: translateY(calc(-50%));
  }
</style>
