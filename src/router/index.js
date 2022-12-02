import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "../pages/CoachesPage.vue";
import SingleCoachPage from "../pages/SingleCoachPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/coaches", component: CoachesPage },
    { path: "/coaches/:id", component: SingleCoachPage },
    { path: "/notFound(*)", component: null },
  ],
});

export default router;
