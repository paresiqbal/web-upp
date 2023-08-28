<script setup>
import { ArrowUpTrayIcon, ShareIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="mx-20 py-10 flex flex-col justify-center items-center">
    <h1 class="text-5xl font-bold text-amber-500 underline text-center pb-8">
      Upload Berita
    </h1>
    <div class="w-96 items-center">
      <div class="flex flex-col">
        <label for="judul" class="text-xl font-semibold">Judul</label>
        <input type="text" name="label" class="border-2 rounded-md" />
      </div>
      <div class="flex flex-col">
        <label for="teks" class="text-xl font-semibold">Teks:</label>
        <textarea
          name="teks"
          cols="30"
          rows="10"
          class="border-2 rounded-md"
        ></textarea>
        <div class="flex gap-2">
          <ArrowUpTrayIcon class="w-6 pt-2" />
          <ShareIcon class="w-6 pt-2" />
        </div>
      </div>
      <button
        class="py-2 w-full mt-4 rounded-md bg-slate-800 active:bg-slate-900 text-white font-bold"
      >
        Submit
      </button>
    </div>
  </div>
</template>
