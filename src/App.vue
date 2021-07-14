<template>
  <v-app>
    <vue-snotify></vue-snotify>
    <AppBar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>
