<script setup>
import { ArrowRightCircleIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="mx-20 py-10">
    <h1 class="text-5xl font-bold text-amber-500 underline text-center pb-8">
      Login
    </h1>
    <div
      class="flex flex-col justify-center items-center py-10 border-2 rounded-md"
    >
      <h2 class="text-3xl py-4 font-bold">Universitas Pat Petulai</h2>
      <div class="flex flex-col">
        <div class="flex flex-col gap-2">
          <label for="username">Username</label>
          <input type="text" name="username" class="border-2 rounded-md" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password">Password</label>
          <input type="password" name="password" class="border-2 rounded-md" />
        </div>
      </div>
      <span class="pt-10 pb-4">Or</span>
      <div
        class="py-2 px-8 bg-slate-400 rounded-md hover:bg-slate-200 cursor-pointer"
      >
        <span class="flex justify-center items-center gap-2 font-bold"
          ><ArrowRightCircleIcon class="w-10" />Login with google</span
        >
      </div>
    </div>
  </div>
</template>
