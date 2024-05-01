<template>
  <div class="flex gap-1 md:gap-3 items-end">
    <h1 class="font-bold text-h1-3 md:text-h1-2 lg:text-h1">
      {{ formattedTime }}
    </h1>
    <p
      class="font-light text-h6 md:text-[2rem] lg:text-abbreviation lg:leading-loose"
    >
      {{ abbreviation }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    formattedTime: String,
    abbreviation: String,
  },
};
</script>
