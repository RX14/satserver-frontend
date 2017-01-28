import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Index from "views/Index"
import Pass from "views/Pass"

const routes = [
  { path: "/", component: Index },
  { path: "/pass/:id", component: Pass, props: true }
]

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "is-active",
  routes
})

export default router
