<script setup>
import Navbar from "./components/Navbar.vue";
import Topbar from "./components/Topbar.vue";
import Home from "./views/Home.vue";
</script>

<template>
  <Topbar />
  <Navbar />
  <router-view></router-view>
</template>

<style scoped></style>
