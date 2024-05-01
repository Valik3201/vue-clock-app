<template>
  <div
    class="flex flex-row md:flex-col items-center md:items-start justify-between md:gap-2"
  >
    <p class="text-h8 md:text-h7 lg:text-h6 uppercase">{{ label }}</p>
    <p class="text-h4 md:text-abbreviation lg:text-h2 font-bold">
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Number],
  },
};
</script>
