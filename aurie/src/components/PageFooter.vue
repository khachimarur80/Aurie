<template>
  <v-footer color="primary">
    <v-card flat tile class="text-center" width="100%" color="primary" light>
        <v-card-text>
          <v-btn v-for="social in socials" :key="social.icon" class="mx-4" icon :href="social.href">
            <v-icon size="24px">
              {{ social.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0">
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          ©{{ new Date().getFullYear() }} — <strong>Aurie</strong>
        </v-card-text>
      </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'PageFooter',

  data: () => ({
    socials: [
      {
        href: "#",
        icon: "mdi-twitter",
        alt: "Twitter icon",
      },
      {
        href: "#",
        icon: "mdi-linkedin",
        alt: "LinkedIn icon",
      },
      {
        href: "#",
        icon: "mdi-instagram",
        alt: "Instagram icon",
      },
    ],
  }),

  methods: {
  }
};
</script>
<style>
</style>