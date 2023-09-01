<script setup>
// Vue
import { ref } from "vue";
import { useRouter } from "vue-router";

// google
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();

// normal register
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Register");
      console.log(auth.currentUser);
      router.push({ name: "Home" }); // redirect after register
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

// google register
const signInWithGoogle = () => {};
</script>

<template>
  <div class="flex justify-center items-center mx-20 py-10">
    <form class="border-2 px-20 py-8 rounded-md shadow-sm text-lg">
      <h1 class="text-4xl font-bold pb-10">Register</h1>
      <div class="flex flex-col gap-2">
        <label for="email" aria-label="email">Email:</label>
        <input
          type="text"
          name="email"
          v-model="email"
          class="border-2 active:border-emerald-500 rounded-md"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="border-2 active:border-emerald-500 rounded-md"
        />
      </div>
      <div class="flex gap-5 mt-4 justify-between">
        <button
          @click="register"
          class="bg-emerald-500 px-4 py-2 rounded-md font-bold text-white"
        >
          Register
        </button>
        <button
          @click="signInWithGoogle"
          class="bg-yellow-500 px-4 py-2 rounded-md font-bold text-white"
        >
          Sign In With Google
        </button>
      </div>
    </form>
  </div>
</template>
