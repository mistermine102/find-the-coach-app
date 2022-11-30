import { createRouter, createWebHistory } from 'vue-router'

import CoachesPage from '../pages/CoachesPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{path: "/coaches", component: CoachesPage}]
})

export default router
