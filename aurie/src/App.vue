<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    theme: {
      primary: "#6913a1",
      secondary: "#C07F00",
      text: "#FFFFFF",
      background: "#171717",
      backgroundDark: "#000000",
      success: "#0F9D58",
      error: "#DB4437",
      accent: "#4285F4",
      warning: "#7E57C2",
      backgroundLight: "#FFFFFF",
      textDark: "#000000",
    }
  }),
  mounted() {
    document.documentElement.style.setProperty('--primary', this.theme.primary)
    document.documentElement.style.setProperty('--text', this.theme.text)
    document.documentElement.style.setProperty('--background', this.theme.background)
    document.documentElement.style.setProperty('--background-dark', this.theme.backgroundDark)
    document.documentElement.style.setProperty('--success', this.theme.success)
    document.documentElement.style.setProperty('--error', this.theme.error)
    document.documentElement.style.setProperty('--secondary', this.theme.secondary)
    document.documentElement.style.setProperty('--accent', this.theme.accent)
    document.documentElement.style.setProperty('--warning', this.theme.warning)
    document.documentElement.style.setProperty('--background-light', this.theme.backgroundLight)
    document.documentElement.style.setProperty('--text-dark', this.theme.textDark)
  }
}
</script>

<style>
  @font-face {
    font-family: 'Poppins';
    src: url('~@/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Hanson';
    src: url('~@/assets/fonts/Hanson/Hanson-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100h;
    font-weight: lighter;
    font-family: var(--text-font);
  }
  textarea {
    font-family: var(--text-font);
  }

  ::-webkit-scrollbar {
    height: 0;
  }
  * {
    font-family: 'Helvetica';
  }
  h1, h2, h3, h4,  h5, h6 {
    font-family: 'Hanson';
  }
</style>
