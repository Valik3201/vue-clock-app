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
      const apiUrl = "http://ip-api.com/json/";

      axios
        .get(apiUrl)
        .then((response) => {
          this.city = response.data.city;
          this.country = response.data.country;
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
