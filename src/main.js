import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// router
import { createRouter, createWebHistory } from "vue-router";

// route
import Home from "./views/Home.vue";
import Sejarah from "./views/Sejarah.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/sejarah",
      name: "Sejarah",
      component: Sejarah,
    },
  ],
});

createApp(App).use(router).mount("#app");
