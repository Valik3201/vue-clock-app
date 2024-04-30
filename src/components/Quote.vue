<template>
  <div v-for="quote in data" :key="quote.id" class="container">
    <div class="flex justify-between">
      <div class="flex items-start gap-4 text-h7 md:text-h5">
        <div class="max-w-[33.75rem]">
          <p v-for="quote in data" class="mb-3">"{{ quote.content }}"</p>
          <p v-for="quote in data" class="font-bold">{{ quote.author }}</p>
        </div>

        <button @click="getRandomQuote" class="pt-1">
          <icon name="refresh" />
        </button>
      </div>
      <p class="text-h2 font-bold hidden lg:block">clock.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Icon from "./Icon.vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getRandomQuote();
  },
  methods: {
    getRandomQuote() {
      const apiUrl = "https://api.quotable.io/quotes/random";

      axios
        .get(apiUrl)
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
