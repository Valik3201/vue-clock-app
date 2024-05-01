<template>
  <BackgroundImage :city="city" :country="country" />

  <div
    class="h-svh font-inter text-white py-12 lg:py-20 transform duration-500"
    :class="{
      '-translate-y-[40%] md:-translate-y-1/3 lg:-translate-y-1/2 ': showInfo,
      '-translate-y-0': !showInfo,
    }"
  >
    <div class="container flex flex-col justify-between h-full">
      <Quote />

      <div
        class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 md:gap-20"
      >
        <div class="flex flex-col gap-4 md:gap-0">
          <Greeting :hour="hourFromDateTime" />

          <TimeDisplay
            :formattedTime="formattedTime"
            :abbreviation="abbreviation"
          />

          <Location @locationChanged="handleLocationChanged" />
        </div>

        <ToggleInfoButton :buttonText="buttonText" :toggleInfo="toggleInfo" />
      </div>
    </div>

    <TimeInfo :timeInfo="timeInfo" :showInfo="showInfo" :dayTime="dayTime" />
  </div>
</template>

<script>
import axios from "axios";
import BackgroundImage from "./BackgroundImage.vue";
import Greeting from "./Greeting.vue";
import Location from "./Location.vue";
import TimeDisplay from "./TimeDisplay.vue";
import TimeInfo from "./TimeInfo.vue";
import ToggleInfoButton from "./ToggleInfoButton.vue";
import Quote from "./Quote.vue";

export default {
  components: {
    BackgroundImage,
    Greeting,
    Location,
    TimeDisplay,
    TimeInfo,
    ToggleInfoButton,
    Quote,
  },
  data() {
    return {
      datetime: "",
      abbreviation: "",
      timeInfo: {
        timezone: this.timezone,
        dayOfTheYear: this.dayOfTheYear,
        dayOfTheWeek: this.dayOfTheWeek,
        weekNumber: this.weekNumber,
      },
      city: "",
      country: "",
      showInfo: false,
      buttonText: "MORE",
      dayTime: true,
    };
  },
  mounted() {
    this.getCurrentTime();

    setInterval(this.getCurrentTime, 1000);
  },
  computed: {
    formattedTime() {
      if (!this.datetime) return "";

      const hours = this.datetime.slice(11, 13);
      const minutes = this.datetime.slice(14, 16);

      return `${hours}:${minutes}`;
    },
    hourFromDateTime() {
      if (!this.datetime) return 0;

      return parseInt(this.datetime.slice(11, 13));
    },
  },
  methods: {
    getCurrentTime() {
      const apiUrl = "https://worldtimeapi.org/api/ip";

      axios
        .get(apiUrl)
        .then((response) => {
          const {
            datetime,
            abbreviation,
            timezone,
            day_of_year,
            day_of_week,
            week_number,
          } = response.data;
          this.datetime = datetime;
          this.abbreviation = abbreviation;
          this.timeInfo = {
            timezone,
            dayOfTheYear: day_of_year,
            dayOfTheWeek: day_of_week,
            weekNumber: week_number,
          };
        })
        .catch((error) => {
          console.error("Error fetching current time:", error);
        });
    },
    handleLocationChanged(locationData) {
      this.city = locationData.city;
      this.country = locationData.country;
    },
    toggleInfo() {
      this.showInfo = !this.showInfo;
      this.buttonText = this.showInfo ? "LESS" : "MORE";
    },
  },
};
</script>
