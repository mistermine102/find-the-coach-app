import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "../pages/CoachesPage.vue";
import CoachDetailsPage from "../pages/CoachDetailsPage.vue";
import RequestsPage from "../pages/RequestsPage.vue";
import CoachRegister from "../pages/CoachRegister.vue";
import CoachContact from "../pages/CoachContact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesPage },
    { path: "/coaches/:id", component: CoachDetailsPage, children: [{ path: "/coaches/:id/contact", component: CoachContact }] },
    { path: "/register", component: CoachRegister },
    { path: "/requests", component: RequestsPage },
    { path: "/notFound(*)", component: null },
  ],
});

export default router;
