<template>
  <component :is="dynamicComponent" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    dynamicComponent() {
      const name = this.name.charAt(0).toUpperCase() + this.name.slice(1);

      return defineAsyncComponent(() => import(`../icons/${name}.vue`));
    },
  },
};
</script>
