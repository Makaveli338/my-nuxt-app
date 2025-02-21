export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    ['nuxt-vuefire', {
      config: {
        apiKey: "AIzaSyDTbLZTdMPftm7kVvc2XxzyldGUEK1IaNs",
        authDomain: "my-firebase-project-6bcd2.firebaseapp.com",
        projectId: "my-firebase-project-6bcd2",
        storageBucket: "my-firebase-project-6bcd2.firebasestorage.app",
        messagingSenderId: "25014099018",
        appId: "1:25014099018:web:7e3e7e0a48805cf142dab3",
        measurementId: "G-C26MZ5C3Y5"
      }
    }]
  ],

  plugins: ['~/plugins/firebase.js'],
  compatibilityDate: "2025-02-20",
});