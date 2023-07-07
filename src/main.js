import Vue from "vue";
import App from "./App.vue";
import VueCodemirrorLite from "vue-codemirror-lite";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueCodemirrorLite);

library.add(faCopy, faClipboard);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
