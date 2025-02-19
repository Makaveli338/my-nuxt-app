<script setup>
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '~/plugins/firebase'; // Import the auth object

function signInWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      // Handle successful sign-in
      console.log('User signed in:', result.user);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error signing in:', error);
    });
}
</script>
<template>    
      <button @click="signInWithGoogle" class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-56 p-4 mx-auto text-sm font-medium cursor-pointer items-center flex hover:bg-slate-700">
       <img src="public/icons8-google.svg" alt="">
      <p>login with your email</p>
      </button>
      
  </template>