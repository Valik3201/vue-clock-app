<template>
  <div>
    <p>{{ formattedTime }} {{ abbreviation }}</p>
    <Location />
    <p>Current Timezone {{ timezone }}</p>
    <p>Day Of The Year {{ dayOfTheYear }}</p>
    <p>Day Of The Week {{ dayOfTheWeek }}</p>
    <p>Week Number {{ weekNumber }}</p>
  </div>
</template>

<script>
import axios from "axios";
import Location from "./Location.vue";

export default {
  components: {
    Location,
  },
  data() {
    return {
      datetime: [],
      abbreviation: [],
      timezone: [],
      dayOfTheYear: [],
      dayOfTheWeek: [],
      weekNumber: [],
    };
  },
  mounted() {
    this.getCurrentTime();
  },
  computed: {
    formattedTime() {
      if (!this.datetime) return "";

      const date = new Date(this.datetime);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      return `${hours}:${minutes}`;
    },
  },
  methods: {
    getCurrentTime() {
      const apiUrl = "https://worldtimeapi.org/api/ip";

      axios
        .get(apiUrl)
        .then((response) => {
          this.datetime = response.data.datetime;
          this.abbreviation = response.data.abbreviation;
          this.timezone = response.data.timezone;
          this.dayOfTheYear = response.data.day_of_year;
          this.dayOfTheWeek = response.data.day_of_week;
          this.weekNumber = response.data.week_number;
        })
        .catch((error) => {
          console.error("Error fetching current time:", error);
          // Опционально: можно установить сообщение об ошибке для пользователя
          this.currentTime = "Failed to fetch time";
        });
    },
  },
};
</script>
