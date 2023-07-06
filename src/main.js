import Vue from "vue";
import App from "./App.vue";
import VueCodemirrorLite from "vue-codemirror-lite";

Vue.use(VueCodemirrorLite);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
