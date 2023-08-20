import { createRouter, createWebHistory } from "vue-router/auto";

const routes = [
  {
    path: "/Sejarah",
    name: "Sejarah",
    component: () => import("../views/Sejarah.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
