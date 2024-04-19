<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="footer-top-1">
        <div class="footer-header">
          <a id="footer-logo" href="/">
            <img src="@/assets/logos/logo.svg" alt="Aurie logo" height="100%" width="100%"/>
          </a>
          <a id="footer-title" href="/">
            Aurie
          </a>
        </div>
        <div class="footer-contact">
          <img src="@/assets/icons/phone.webp" height="36px" width="36px" id="phone"/>
          <div class="phone">
            <div class="contact-phone">
              664 54 25 94
            </div>
            <div class="phone-info">
              Lunes a Viernes de 9:00 a 20:30
            </div>
          </div>
        </div>
        <div class="footer-socials">
          <a :class="['social', social.link=='' ? 'inactive' : '']"  v-for="(social, i) in socials" :href="social.link" :key="i">
            <img :src="social.icon" :alt="social.name+' logo'" height="100%" width="100%"/>
          </a>
        </div>
      </div>
      <div class="footer-top-2">
        <div class="footer-col">
          <h4>Navegación</h4>
          <a href="/">Inicio</a>
          <a :href="link.url" v-for="(link, i) in links" :key="i">
            {{ link.name }}
          </a>
        </div>
        <div class="footer-col">
          <h4>Información</h4>
          <a href="https://www.acelerapyme.gob.es/kit-digital" target="_blank">KIT Digital</a>
          <a>Términos y condiciones</a>
          <a>Políticas de privacidad</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-text" style="pointer-events: none; opacity: 0;">
        <a href="https://lordicon.com/" style="text-decoration: none; color: var(--text); font-weight: normal !important;">Icons by Lordicon.com</a>
      </span>
      <span class="footer-text">
        ©2024 Aurie
      </span>
      <span class="footer-text">
        <a href="https://lordicon.com/" style="text-decoration: none; color: var(--text); font-weight: normal !important;">Icons by Lordicon.com</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'vFooter',
  data: ()=>({
    socials: [
      {
        name: 'Instagram',
        icon: require('@/assets/icons/instagram.webp'),
        link: '',
      },
      {
        name: 'Facebook',
        icon: require('@/assets/icons/facebook.webp'),
        link: '',
      },
      {
        name: 'Twitter',
        icon: require('@/assets/icons/twitter.webp'),
        link: '',
      },
      {
        name: 'YouTube',
        icon: require('@/assets/icons/youtube.webp'),
        link: '',
      },
    ]
  }),
  props: {
    links: {
      required: true
    }
  }
}
</script>

<style scoped>
  .footer-socials {
    display: flex;
    align-items: center;
    padding-left: 50px;
    height: 30px;
    gap: 20px;
    padding-bottom: 30px;
    opacity: 0;
  }
  .footer-contact {
    display: flex;
    padding-left: 30px;
    align-items: center;
    gap: 10px;
  }
  .phone {
    padding-left: 10px;
  }
  .contact-phone {
    font-weight: bold;
    color: var(--text);
    font-size: 20px;
  }
  .phone-info {
    color: #999;
    font-size: 16px;
    padding-left: 15px;
  }
  #phone {
    filter: invert(55%) sepia(67%) saturate(4276%) hue-rotate(333deg) brightness(101%) contrast(98%);
  }
  #footer {
    user-select: none;
    height: 320px;
    padding: 20px;
    background: rgba(253, 76, 56, .15);
    display: flex;
    flex-direction: column;
  }
  .footer-col h4 {
    color: var(--text)
  }
  .footer-col a {
    color: #999;
    text-decoration: none;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .footer-top {
    flex: 1;
    display: flex;
  }
  .footer-bottom {
    height: fit-content;
    border-top: 1px solid #777;
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-top: 10px;
    padding-right: 50px;
  }
  .footer-title {
    font-weight: bold;
    font-size: 24px;
    color: var(--background-dark);
  }
  .footer-text {
    font-size: 14px;
    color: var(--background-dark);
  }
  .socials {
    display: flex;
    gap: 20px;
    margin: 10px;
  }
  .social {
    height: 25px;
    width: 25px;
    overflow: hidden;
    border-radius: 50%;
  }
  .footer-top-1 {
    width: 50%; 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    height: 100%;
  }
  .footer-top-2 {
    width: 50%; 
    display: flex; 
    justify-content: space-around; 
    flex-direction: row; 
    height: 100%;
  }
  button {
    height: 30px;
    width: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border-radius: 50%;
  }
  button:hover {
    background: var(--background);
    cursor: pointer;
  }
  button:active {
    border: 1px solid var(--background-dark);
  }
  .footer-header {
    height: 100px;
    width: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  #footer-title {
    font-size: 30px;
    color: #E3E3E3;
    font-weight: bold;
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  #footer-logo {
    height: 80px;
    width: 80px !important;
  }
  .footer-bottom a {
    font-weight: bold;
    color: var(--primary);
  }
  .inactive {
    cursor: not-allowed !important;
    filter: saturate(0%);
    pointer-events: none;
  }

  @media only screen and (max-width: 670px) {
    .footer-bottom {
      flex-direction: column;
      padding: 0px;
      gap: 5px;
      align-items: center;
      padding-bottom: 20px;
    }
    #footer {
      height: fit-content;
    }
    .footer-top {
      flex-direction: column;
    }
    .footer-top-1 {
      width: 100%;
      margin-bottom: -50px;
      align-items: center;
    }
    .footer-top-2 {
      width: 100%;
      padding-bottom: 20px;
    }
    .contact-phone {
      font-size: 18px;
    }
    .phone-info {
      font-size: 14px;
    }
  }
</style>
