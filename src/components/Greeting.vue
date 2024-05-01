<template>
  <div class="flex gap-4">
    <icon :name="icon" />
    <p class="text-h6 md:text-h5 lg:text-h4 uppercase">
      {{ text }}<span class="hidden md:inline-block">, it's currently</span>
    </p>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon,
  },
  props: {
    hour: Number,
  },
  computed: {
    text() {
      if (this.hour >= 5 && this.hour < 12) {
        return "Good morning";
      } else if (this.hour >= 12 && this.hour < 18) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    },
    icon() {
      return this.hour >= 5 && this.hour < 18 ? "sun" : "moon";
    },
  },
};
</script>
