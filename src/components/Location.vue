<template>
  <div>
    <p class="text-h3 uppercase font-bold">In {{ city }}, {{ country }}</p>
    <BackgroundImage :city="city" :country="country" />
  </div>
</template>

<script>
import axios from "axios";
import BackgroundImage from "./BackgroundImage.vue";

export default {
  components: {
    BackgroundImage,
  },
  data() {
    return {
      city: "",
      country: "",
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      const apiUrl = "https://freeipapi.com/api/json";

      axios
        .get(apiUrl)
        .then((response) => {
          this.city = response.data.cityName;
          this.country = response.data.countryName;
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
          this.city = "Unknown";
          this.country = "Unknown";
        });
    },
  },
};
</script>
