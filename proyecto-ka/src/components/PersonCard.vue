<template>
  <v-card>
    <v-card-title>
      {{ person.name }}
    </v-card-title>
    <v-card-subtitle class="ml-1">
      {{ person.titulation }}
    </v-card-subtitle>
    <v-card-text>
      {{ person.age }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props : {
    person : {
      required: true
    }
  },

  data: () => ({
  }),
};
</script>
