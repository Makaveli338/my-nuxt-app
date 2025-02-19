<script setup>
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNuxtApp } from '#app'; // Import useNuxtApp

const { $auth } = useNuxtApp(); // Access the auth object
const router = useRouter()

function signInWithGoogle() {
  signInWithPopup($auth, new GoogleAuthProvider())
    .then(() => router.replace('/dashboard'))

    .catch((error) => {
      // Handle errors
      console.error('Error signing in:', error);
    });
}
</script>

<template>    
  <button @click="signInWithGoogle" class="mt-4 border border-[#E1E4EA] rounded-[10px] w-56 p-4 mx-auto text-sm font-medium cursor-pointer items-center flex hover:bg-slate-700">
    <img src="public/icons8-google.svg" alt="">
    <p>Login with your email</p>
  </button>
</template>