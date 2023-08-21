<script setup>
import Navbar from "./components/Navbar.vue";
import Topbar from "./components/Topbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Topbar />
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
