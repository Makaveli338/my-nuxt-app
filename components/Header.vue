<template>
    <div
      class="px-[48px] flex flex-col md:flex-row md:items-center justify-between flex-1 mt-7"
    >
      <img src="/img/logo.svg" class="max-w-[270px]" />

      <div class="flex items-center justify-end gap-4">
        <button class="btn-outline">OTP Log in</button>
        <button @click="navigateToLogin" class="btn-primary">eCitizen Log in</button>
      </div>
    </div>
  </template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToLogin() {
  router.push('/login');
}
</script>
  