<template>
  <div class="section" id="contacto">
    <h1>
      Contacto
    </h1>
    <p class="slogan">Hablemos sobre todo lo que podemos construir y crear juntos</p>
    <br><br><br>
    <div class="moon">
      <div class="col">
        <div class="circle">
          +34 664 54 25 94
        </div>
      </div>
      <div class="col">
        <div class="circle">
          contacto@aurie.es
        </div>
      </div>
      <div class="col">
        <div class="circle">
          <img src="@/assets/icons/reunion_1.webp" height="50px" a>
          <div class="next-button">
            <img src="@/assets/icons/arrow.png" style="transform: rotate(180deg)" height="15px" width="15px">
          </div>
        </div>
      </div>
      <div class="col">
        <div class="circle">
          <div class="grid">
            <img src="@/assets/icons/linkedin.png" height="30px">
            <img src="@/assets/icons/instagram.webp" height="30px">
            <img src="@/assets/icons/youtube.webp" height="30px">
            <img src="@/assets/icons/tiktok.png" height="30px">
          </div>
        </div>
      </div>
      <div class="moon-inner">

      </div>
    </div>
    <br><br>
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
  .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  }
  .next-button {
    background: white;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2px;
    transform: rotate(180deg);
    cursor: pointer;
    box-sizing: border-box;
  }
  .next-button:hover {
    outline: 2px solid var(--primary);
  }
  .circle {
    width: 60%;
    aspect-ratio: 1;
    background: #171717;
    position: absolute;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0px 0px 30px 1px #333;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    flex-direction: column;
  }
  .col:nth-child(1) .circle, .col:nth-child(4) .circle{
    top: 45%;
  }
  .col:nth-child(2) .circle, .col:nth-child(3) .circle{
    top: 22%;
  }
  .col:nth-child(1) .circle::before {
    content: 'Llámanos';
    position: absolute;
    top: -30px;
  }
  .col:nth-child(2) .circle::before  {
    content: 'Escríbenos';
    position: absolute;
    top: -50px;
  }
  .col:nth-child(3) .circle::before  {
    content: 'Programa una reunión';
    position: absolute;
    top: -50px;
    text-align: center;
  }
  .col:nth-child(4) .circle::before  {
    content: 'Síguenos';
    position: absolute;
    top: -30px;
  }
  .col {
    width: 25%;
    height: 100%;
    position: relative;
  }
  .moon {
    width: 100%;
    aspect-ratio: 30/9;
    position: relative;
    overflow: hidden;
    display: flex;
  }
  .moon-inner {
    position: absolute;
    top: 40%;
    right: 50%;
    transform: translateX(50%);
    width: 150%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid white;
  }
  .slogan {
    font-size: 20px;
    color: var(--text);
    font-weight: 100;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  #contacto {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    color: var(--text);
    font-size: 30px;
    margin: 0px;
    font-weight: 900;
    position: relative;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
  h1::after {
    content: '';
    background: var(--text);
    height: 4px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    position: absolute;
  }
  @media only screen and (max-width: 800px) {
    .moon {
      flex-direction: column;
      height: fit-content;
      min-height: unset;
      aspect-ratio: unset;
      align-items: center;
      gap: 60px;
      overflow: unset;
    }
    .col {
      width: 50%;
      max-width: 250px;
    }
    .moon-inner {
      display: none;
    }
    .circle {
      width: 100%;
      position: unset;
      transform: none;
    }
    .grid img {
      height: 40px;
      width: 40px;
    }
    .grid {
      gap: 20px;
    }
    img[a] {
      height: 80px;
      width: 80px;
    }
    .col:nth-child(1) .circle::before {
      top: 50px;
    }
    .col:nth-child(2) .circle::before  {
      top: 50px;
    }
    .col:nth-child(3) .circle::before  {
      top: -30px;
      text-align: center;
    }
    .col:nth-child(4) .circle::before  {
      top: -30px;
    }
    .moon::before {
      content: '';
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      background: white;
    }
  }
  @media only screen and (min-width: 801px) and (max-width: 1000px) {
    .circle {
      width: 75%;
    }
    .col:nth-child(1) .circle, .col:nth-child(4) .circle{
      top: 35%;
    }
    .col:nth-child(2) .circle, .col:nth-child(3) .circle{
      top: 22%;
    }
    .moon {
      aspect-ratio: 20/9;
    }
  }
  @media only screen and (min-width: 1401px) and (max-width: 1700px) {
    .circle {
      font-size: 20px;
    }
    .circle img[a] {
      height: 75px;
      width: 75px;
    }
    .next-button {
      height: 35px;
      width: 35px;
    }
    .next-button img {
      height: 20px;
      width: 20px;
    }
    .grid img {
      height: 40px;
      width: 40px;
    }
  }
  @media only screen and (min-width: 1701px) {
    .col:nth-child(1) .circle::before {
      top: -50px;
    }
    .col:nth-child(4) .circle::before  {
      top: -50px;
    }
    .circle {
      max-width: 200px;
    }
    .circle {
      font-size: 20px;
    }
    .circle img[a] {
      height: 60px;
      width: 60px;
    }
    .next-button {
      height: 35px;
      width: 35px;
    }
    .next-button img {
      height: 20px;
      width: 20px;
    }
    .grid img {
      height: 40px;
      width: 40px;
    }
  }
</style>
