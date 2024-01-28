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
      primary: "#FFD95A",
      secondary: "#C07F00",
      text: "#4C3D3D",
      background: "#FFF7D4",
      backgroundDark: "#4C3D3D",
      success: "#0F9D58",
      error: "#DB4437",
      accent: "#4285F4",
      warning: "#7E57C2",
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
  }
}
</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100h;
    font-family: "Verdana";
    font-weight: lighter;
  }
</style>
