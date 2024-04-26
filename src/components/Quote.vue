<template>
  <div v-for="quote in data" :key="quote.id">
    <p v-for="quote in data">"{{ quote.content }}"</p>
    <p v-for="quote in data">{{ quote.author }}</p>

    <button @click="getRandomQuote">Refresh</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
