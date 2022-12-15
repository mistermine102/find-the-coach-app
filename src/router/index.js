import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "../pages/CoachesPage.vue";
import CoachDetailsPage from "../pages/CoachDetailsPage.vue";
import RequestsPage from "../pages/RequestsPage.vue";
import CoachRegister from "../pages/CoachRegister.vue";
import CoachContact from "../pages/CoachContact.vue";
import RequestsSent from "../components/requests/RequestsSent.vue";
import RequestsReceived from "../components/requests/RequestsReceived.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesPage },
    //children routing so I can display 'coachContact' page on the coach deatils page using router-view
    { path: "/coaches/:id", component: CoachDetailsPage, children: [{ path: "/coaches/:id/contact", component: CoachContact }] },
    { path: "/register", component: CoachRegister },
    {
      path: "/requests",
      component: RequestsPage,
      children: [
        { path: "/requests/sent", component: RequestsSent },
        { path: "/requests/received", component: RequestsReceived },
      ],
    },
    { path: "/notFound(*)", component: null },
  ],
});

export default router;
