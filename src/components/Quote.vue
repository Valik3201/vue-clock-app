<template>
  <div class="container">
    <div class="flex justify-between">
      <div class="flex items-start gap-4 text-h7 md:text-h5">
        <div class="max-w-[33.75rem]" aria-label="Random Quotes">
          <div v-if="data.length">
            <p v-for="quote in data" :key="quote._id" class="mb-3">
              "{{ quote.content }}"
            </p>
            <p v-for="quote in data" :key="quote._id" class="font-bold">
              {{ quote.author }}
            </p>
          </div>
          <div v-else>
            <p class="mb-3">
              "The only way to do great work is to love what you do."
            </p>
            <p class="font-bold">Steve Jobs</p>
          </div>
        </div>
        <button v-if="data.length" @click="getRandomQuote" class="pt-1">
          <icon name="refresh" />
          <span class="sr-only">Refresh Quote</span>
        </button>
      </div>
      <p class="text-h2 font-bold hidden lg:block" aria-label="Logo Clock.">
        clock.
      </p>
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
          this.data = response.data.length ? response.data : [];
        })
        .catch((error) => {
          console.error("Error fetching quote:", error);
          this.data = [];
        });
    },
  },
};
</script>
