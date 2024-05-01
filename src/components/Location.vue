<template>
  <p
    class="text-h6 md:text-h5 lg:text-h3 uppercase font-bold"
    aria-label="Current Location"
  >
    In {{ city }}, {{ country }}
  </p>
</template>

<script>
import axios from "axios";

export default {
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

          this.$emit("locationChanged", {
            city: this.city,
            country: this.country,
          });
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
          this.city = "Unknown";
          this.country = "Unknown";

          this.$emit("locationChanged", {
            city: this.city,
            country: this.country,
          });
        });
    },
  },
};
</script>
