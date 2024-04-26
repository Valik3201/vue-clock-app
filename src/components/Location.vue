<template>
  <div>
    <p>In {{ city }}, {{ country }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      city: [],
      country: [],
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
