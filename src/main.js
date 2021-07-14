import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import MixinGlobal from "./mixins/MixinGlobal";

import "./plugins/snotify";
import "@/assets/scss/style.scss";

Vue.prototype.$vueEventBus = new Vue();
Vue.config.productionTip = false;
Vue.mixin(MixinGlobal);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
