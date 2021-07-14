<template>
  <v-layout column align-center justify-center class="text-center mt-5">
    <h3 class="grey--text text--ligthen-1">Page Not Found</h3>
    <h1 class="pink--text text--ligthen-1">404!</h1>
    <v-btn
      color="orange lighten-2 mt-5"
      @click="$router.push({ name: 'home' })"
    >
      Go Home
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: "Not Found",
};
</script>
