<template>
  <div
    class="absolute w-full h-screen bg-cover bg-center -z-10 inset-0"
    :style="{
      backgroundImage: `url(${backgroundImageUrl})`,
    }"
  >
    <div
      class="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    city: String,
    country: String,
  },
  data() {
    return {
      backgroundImageUrl: "",
    };
  },
  computed: {
    shouldFetchBackground() {
      return this.city && this.country;
    },
  },
  watch: {
    shouldFetchBackground: {
      handler(newValue) {
        if (newValue) {
          this.getBackgroundImage();
        }
      },
      immediate: true,
    },
  },
  methods: {
    getBackgroundImage() {
      const city = this.city;
      const country = this.country;

      const ACCESS_KEY = "6_r1Q1jbNOtDV-cy7O_R-stjwlmv7MCALLuGeeW6RJ4";

      const apiUrl = `https://api.unsplash.com/photos/random/?query=${city}&collections=${country}&client_id=${ACCESS_KEY}`;

      axios
        .get(apiUrl)
        .then((response) => {
          this.backgroundImageUrl = response.data.urls.regular;
        })
        .catch((error) => {
          console.error("Error fetching background image:", error);
          this.backgroundImageUrl = "/background/desktop/bg-image-daytime.jpg";
        });
    },
  },
};
</script>
