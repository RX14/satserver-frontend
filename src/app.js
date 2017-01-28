import Vue from "vue"
import { sync } from "vuex-router-sync"
import store from "store"
import router from "router"
import App from "App"

sync(store, router)

export default new Vue({
  store,
  router,
  ...App
})
