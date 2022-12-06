import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "../pages/CoachesPage.vue";
import CoachDetailsPage from "../pages/CoachDetailsPage.vue";
import RequestsList from "../pages/RequestsList.vue";
import CoachRegister from "../pages/CoachRegister.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesPage },
    { path: "/coaches/:id", component: CoachDetailsPage },
    { path: "/register", component: CoachRegister },
    { path: "/requests", component: RequestsList },
    { path: "/notFound(*)", component: null },
  ],
});

export default router;
