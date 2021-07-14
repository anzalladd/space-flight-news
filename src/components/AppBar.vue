<template>
  <v-app-bar app color="#4C4B63" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Space news logo"
        class="shrink mr-4"
        contain
        :src="require('@/assets/logo.jpg')"
        transition="scale-transition"
        width="40"
      />
      <h2>Space flight news</h2>
    </div>
    <v-spacer></v-spacer>
    <v-btn color="red" v-if="isAuth" @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "appBar",
  data() {
    return {
      isAuth: !!window.localStorage.getItem("token"),
    };
  },
  mounted() {
    this.$vueEventBus.$on("on-change-token", (payload) => {
      this.isAuth = payload;
    });
  },
  methods: {
    logout() {
      window.localStorage.removeItem("token");
      this.$router.push({ name: "auth" });
      this.$vueEventBus.$emit("on-change-token", false);
    },
  },
};
</script>
