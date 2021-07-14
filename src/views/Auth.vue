<template>
  <div class="v-auth">
    <v-row>
      <v-col cols="0" lg="3"></v-col>
      <v-col cols="12" lg="6">
        <v-form @submit.prevent="login" ref="form">
          <h3>Mockup Login</h3>
          <v-text-field
            label="Email"
            class="mt-5"
            v-model="email"
            validate-on-blur
            :rules="validation.requiredRules"
          />
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            validate-on-blur
            :rules="validation.requiredRules"
          />
          <v-btn block color="orange lighten-2" @click="login" class="mt-5">
            Login
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="0" lg="3"></v-col>
    </v-row>
  </div>
</template>

<script>
import { token } from "../config/mockupToken";
export default {
  name: "auth",
  data() {
    return {
      email: "anzalladd@gmail.com",
      password: "12345678",
    };
  },
  computed: {
    validation() {
      return {
        requiredRules: [(v) => !!v || "Field Harus Diisi"],
      };
    },
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        if (
          this.email == "anzalladd@gmail.com" &&
          this.password == "12345678"
        ) {
          window.localStorage.setItem("token", token);
          this.$vueEventBus.$emit("on-change-token", true);
          this.$router.push({ name: "home" });
          this.$snotify.success("Success");
        } else {
          this.$snotify.error("Email atau password Salah");
        }
      }
    },
  },
};
</script>
