<template>
  <div
    class="absolute w-full h-screen bg-cover bg-center -z-10 inset-0"
    :style="{
      backgroundImage: `url(${backgroundImageUrl})`,
    }"
  >
    <div
      class="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50"
    ></div>
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

      const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

      const apiUrl = `https://api.unsplash.com/photos/random/?query=${city}&collections=${country}&client_id=${ACCESS_KEY}`;

      axios
        .get(apiUrl)
        .then((response) => {
          this.backgroundImageUrl = response.data.urls.regular;
        })
        .catch((error) => {
          console.error("Error fetching background image:", error.message);
          this.backgroundImageUrl = "/background/bg-image-daytime.jpg";
        });
    },
  },
};
</script>
