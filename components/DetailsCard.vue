<!-- DetailsCard.vue -->
<template>
  <div
    :style="{ backgroundColor: bg_color }"
    class="details-card text-xl flex flex-col gap-4"
  >
    <div
      :class="['h-[300px] bg-cover bg-no-repeat', img_class]"
      :style="`background-image: url(${img})`"
    ></div>
    <div
      :style="{ boxShadow: `0 -80px 5px ${shadow_color}` }"
      class="-ml-[20px] -mr-[20px]"
    >
      <h2 class="font-semibold text-black mx-4">{{ heading }}</h2>
      <h3 class="font-normal text-[#475467] mx-4">{{ card_title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true, // Ensure the image URL is provided
    },
    img_class: {
      type: String,
      default: "",
    },
    bg_color: {
      type: String,
    },
    shadow_color: {
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
