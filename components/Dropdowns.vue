<template>
  <div
    class="flex mt-4 border border-[#E1E4EA] rounded-[10px] mx-25 h-12 relative text-sm font-medium cursor-pointer hover:bg-[#D6D3FF]"
    @click="toggleDropdown"
  >
    <div class="flex items-center">
      <div
        class="ml-4 w-6 h-6 bg-contain bg-no-repeat"
        :style="{ 'background-image': `url(${img})` }"
      ></div>
      <h2 class="ml-[10px]">{{ title }}</h2>
    </div>
    <svg
      class="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="iconPath" fill="#99A0AE" />
    </svg>
    <div
      v-if="isOpen"
      class="absolute z-10 w-full bg-white border border-[#E1E4EA] rounded-[10px] top-[48px] left-0"
    >
      <slot
        ><h3 class="ml-2 p-2">{{ card_title }}</h3></slot
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    card_title: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    iconPath() {
      return this.isOpen
        ? "M5 10h10" // "-" icon
        : "M10 5v10M5 10h10"; // "+" icon
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
