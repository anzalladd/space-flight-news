import Vue from "vue";
import Snotify, { SnotifyPosition } from "vue-snotify";

const options = {
  toast: {
    position: SnotifyPosition.centerTop,
    showProgressBar: false,
  },
  global: {
    oneAtTime: true,
  },
};

Vue.use(Snotify, options);
