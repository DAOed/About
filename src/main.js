import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import ZeitUI from "@zeit-ui/vue"
import VueScrollTo from "vue-scrollto"

import "@zeit-ui/vue/dist/zeit-ui.css" // require style
import "./index.css"

Vue.use(ZeitUI)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
