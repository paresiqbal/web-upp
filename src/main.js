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
import Rps from "./views/Rps.vue";
import Jadwal from "./views/Jadwal.vue";
import Matakuliah from "./views/Matakuliah.vue";
import Mahasiswa from "./views/Mahasiswa.vue";
import Kontak from "./views/Kontak.vue";
import Login from "./views/Login.vue";
import CreateBerita from "./views/CreateBerita.vue";

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
    {
      path: "/rps",
      name: "Rps",
      component: Rps,
    },
    {
      path: "/jadwal",
      name: "Jadwal",
      component: Jadwal,
    },
    {
      path: "/matakuliah",
      name: Matakuliah,
      component: Matakuliah,
    },
    {
      path: "/mahasiswa",
      name: Mahasiswa,
      component: Mahasiswa,
    },
    {
      path: "/kontak",
      name: "Kontak",
      component: Kontak,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/createberita",
      name: "CreateBerita",
      component: CreateBerita,
    },
  ],
});

createApp(App).use(router).mount("#app");
