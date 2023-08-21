import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// router
import { createRouter, createWebHistory } from "vue-router";

// route
import Home from "./views/Home.vue";
import Sejarah from "./views/Sejarah.vue";
import VisiMisi from "./views/VisiMisi.vue";
import Dosen from "./views/Dosen.vue";
import Berita from "./components/Berita.vue";
import Beasiswa from "./views/Beasiswa.vue";

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
    {
      path: "/visimisi",
      name: "Visi Misi",
      component: VisiMisi,
    },
    {
      path: "/dosen",
      name: "Dosen",
      component: Dosen,
    },
    {
      path: "/berita",
      name: "Berita",
      component: Berita,
    },
    {
      path: "/beasiswa",
      name: "Beasiswa",
      component: Beasiswa,
    },
  ],
});

createApp(App).use(router).mount("#app");
