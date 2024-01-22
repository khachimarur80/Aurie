<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.setRouteTitle(this.$route);

    this.$router.beforeEach((to, from, next) => {
      document.title = to.meta.title || 'Aurie';
      next();
    });
  },
  methods: {
    setRouteTitle(route) {
      document.title = route.meta.title || 'Aurie';
    },
  },
};
</script>
<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100h;
  height: 100vh;
  overflow: hidden;
}
</style>