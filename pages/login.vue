<script setup lang="ts">
import { ref } from 'vue';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const { $auth } = useNuxtApp();
const router = useRouter();

const email = ref('');
const password = ref('');
const phoneNumber = ref('');
const otp = ref('');
const confirmationResult = ref<any>(null);
const error = ref('');

function signInWithGoogle() {
  signInWithPopup($auth, new GoogleAuthProvider())
    .then(() => router.replace('/dashboard'))
    .catch((error) => {
      console.error('Error signing in:', error);
    });
}

function register() {
  createUserWithEmailAndPassword($auth, email.value, password.value)
    .then((userCredential) => {
      console.log('User registered:', userCredential.user);
      router.replace('/dashboard');
    })
    .catch((err) => {
      error.value = err.message;
    });
}

async function sendOTP() {
  try {
    const appVerifier = new RecaptchaVerifier($auth, 'recaptcha-container', { size: 'invisible' });
    const result = await signInWithPhoneNumber($auth, phoneNumber.value, appVerifier);
    confirmationResult.value = result;
    alert('OTP sent successfully!');
  } catch (err: any) {
    error.value = err.message;
  }
}

async function verifyOTP() {
  try {
    if (!confirmationResult.value) {
      throw new Error('No OTP confirmation result. Please request a new OTP.');
    }
    const result = await confirmationResult.value.confirm(otp.value);
    alert('OTP verified!');
    console.log('User:', result.user);
    router.replace('/dashboard');
  } catch (err: any ) {
    error.value = err.message;
  }
}
</script>

<template>
  <button @click="signInWithGoogle" class="w-2/4 mt-4 border border-[#E1E4EA] rounded-[10px] p-4 mx-auto text-sm font-medium cursor-pointer items-center flex hover:bg-slate-700 justify-center">
    <img src="public/icons8-google.svg" alt="">
    <p>Sign in with Google</p>
  </button>

  <div class="mt-4 border border-[#E1E4EA] rounded-[10px] w-2/4 p-4 mx-auto text-sm font-medium cursor-pointer items-center">
    <div class="flex items-center justify-center gap-4 p-2">
      <img src="public/email-svgrepo-com (1).svg" alt="">
      <h1 class="text-2xl">Register with email</h1>
    </div>
    <form @submit.prevent="register" class="grid mx-auto w-3/4">
      <label for="email">Enter your email:</label>
      <input class="border h-7" v-model="email" type="email" id="email" name="email">

      <label for="password">Password:</label>
      <input class="border h-7" v-model="password" type="password" id="password" name="password">

      <input class="border mt-4 hover:bg-slate-700 cursor-pointer rounded-lg w-4/5 mx-auto p-2" type="submit" value="Register">
    </form>
  </div>

  <div class="mt-4 border border-[#E1E4EA] rounded-[10px] w-2/4 p-4 mx-auto text-sm font-medium cursor-pointer items-center mb-4">
    <div class="flex items-center justify-center gap-4 p-2">
      <img src="public/phone-rounded-svgrepo-com.svg">
      <h1 class="text-2xl">Register with phone</h1>
    </div>
    <form @submit.prevent="verifyOTP" class="grid mx-auto w-3/4 gap-3">
      <label for="phoneNumber">Enter your phone number:</label>
      <input class="border h-7" v-model="phoneNumber" type="tel" id="phoneNumber" name="phoneNumber">

      <button class="border mt-4 hover:bg-slate-700 cursor-pointer rounded-lg w-4/5 mx-auto p-2" @click.prevent="sendOTP">Send OTP</button>

      <label for="otp">Enter the OTP sent to your phone:</label>
      <input class="border h-7" v-model="otp" type="text" id="otp" name="otp">

      <input class="border mt-4 hover:bg-slate-700 cursor-pointer rounded-lg w-4/5 mx-auto p-2" type="submit" value="Verify OTP">

      <p v-if="error" class="text-red-500">{{ error }}</p>
    </form>
    <div id="recaptcha-container"></div>
  </div>
</template>
