<script setup>
import { ref } from "vue";

const cardData = [
  {
    date: "17 Agustus 2023",
    title: "Dandi.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, deserunt. Ducimus, consectetur.",
  },
  {
    date: "18 Agustus 2023",
    title: "Lorem, ipsum dolor.",
    content: "Lorem ipsum dolor . Nemo, deserunt. Ducimus, consectetur.",
  },
  {
    date: "19 Agustus 2023",
    title: "Lorem, ipsum dolor.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. .",
  },
  // Add more card data objects here if needed
];
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center text-4xl font-bold text-amber-500 py-10 underline">
      Berita & Agenda
    </h1>
    <div class="flex gap-4 justify-center items-center mx-20">
      <div
        v-for="(card, index) in cardData"
        :key="index"
        class="card card-compact w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src="../assets/berita/students.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
          <p class="text-sm">{{ card.date }}</p>
          <h2 class="card-title">{{ card.title }}</h2>
          <p>{{ card.content }}</p>
        </div>
      </div>
    </div>
    <button class="py-2 px-4 bg-amber-500 text-white font-bold mt-8 rounded-md">
      Lihat Lainnya
    </button>
  </div>
</template>
