<template>
  <button
    @click="toggle"
    class="flex items-center group bg-white text-h7 md:text-button text-black/50 gap-2 md:gap-3 rounded-full p-1 md:p-2 pl-5 md:pl-6 font-bold uppercase"
  >
    {{ buttonText }}
    <span
      class="flex items-center justify-center bg-dark-gray rounded-full w-8 h-8 md:w-10 md:h-10 group-hover:bg-[#999999] transition ease-in-out duration-300"
      :class="{ 'rotate-180 transform duration-500': showInfo }"
      ><icon name="arrow"
    /></span>
  </button>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon,
  },
  props: {
    buttonText: String,
    showInfo: Boolean,
    toggleInfo: Function,
  },
  methods: {
    toggle() {
      this.toggleInfo();
    },
  },
};
</script>
