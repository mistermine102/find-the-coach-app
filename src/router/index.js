import { createRouter, createWebHistory } from 'vue-router'

import TheNavbar from "../components/TheNavbar.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{path: "/nav", component: TheNavbar}]
})

export default router
