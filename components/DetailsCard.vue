<!-- DetailsCard.vue -->
<template>
    <div :style="{ backgroundColor: bg_color }" class="details-card text-xl">
      <img :src=picture_src />
      <h2 class="font-semibold text-black mb-4">{{ heading }}</h2>
      <h3 class="font-normal text-[#475467]">{{ card_title }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      img: {
        type: String,
        required: true, // Ensure the image URL is provided
      },
      bg_color: {
        type: String,
      },
      heading: {
        type: String,
        required: true, // Ensure the heading is provided
      },
      card_title: {
        type: String,
      },
    },
  };
  </script>
  

  <style scoped>
    .details-card {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 24px;
      padding-bottom: 24px;
      border-radius: 8px;

    }
  </style>