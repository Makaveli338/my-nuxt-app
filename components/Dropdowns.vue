<template>
  <div
    class=" grid mt-5 border border-[#E1E4EA] rounded-[10px] mx-25 h-12 relative text-sm font-medium cursor-pointer hover:bg-[#D6D3FF]"
    @click="toggleDropdown" 
    :class="dropdownContainerClass"
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
  </div>

    <div
      v-if="isOpen"
      class=" z-10  w-full p-1 bg-slate-300 border border-[#E1E4EA] rounded-[10px] top-[48px] left-0"
    >
      <slot>
        <h3 class="ml-2 ">{{ card_title }}</h3>
      </slot>
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
    dropdownContainerClass() {
      return {
        "border-[#D6D3FF] pb-2 ": this.isOpen,
      };
    },
    iconPath() {
      return this.isOpen
      ? "M10 12L6 8l-1.41 1.41L10 14.83l5.41-5.42L14 8z" // "-" icon
        : "M10 12l4-4-1.41-1.41L10 14.83 4.59 9.41 6 8z"; // "+" icon
    },  
    
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
.padding-open {
  margin-bottom: 20px;
  margin-top: 20px;
}

.padding-closed {
  margin-bottom: 0;
}
</style>
