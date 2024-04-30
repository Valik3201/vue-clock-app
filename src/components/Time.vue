<template>
  <div
    class="flex flex-col justify-between h-screen font-inter text-white"
    :class="{
      'py-0': showInfo,
      'py-12 lg:py-20': !showInfo,
    }"
  >
    <div
      :class="{
        hidden: showInfo,
      }"
    >
      <Quote />
    </div>

    <div
      class="container"
      :class="{
        'h-3/4 lg:h-1/2 py-10 md:py-16 lg:py-20 flex items-end lg:block':
          showInfo,
      }"
    >
      <div
        class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 md:gap-20"
      >
        <div class="flex flex-col gap-4 md:gap-0">
          <div class="flex gap-4">
            <icon :name="greeting.icon" />
            <p class="text-h6 md:text-h5 lg:text-h4 uppercase">
              {{ greeting.text
              }}<span class="hidden md:inline-block">, it's currently</span>
            </p>
          </div>
          <div class="flex gap-1 md:gap-3 items-end">
            <h1 class="font-bold text-h1-3 md:text-h1-2 lg:text-h1">
              {{ formattedTime }}
            </h1>
            <p class="font-light text-h6 md:text-[2rem] lg:text-abbreviation">
              {{ abbreviation }}
            </p>
          </div>
          <Location />
        </div>

        <div>
          <button
            @click="toggleInfo"
            class="flex items-center group bg-white text-h7 md:text-button text-black/50 gap-2 md:gap-3 rounded-full p-1 md:p-2 pl-5 md:pl-6 font-bold uppercase"
          >
            {{ buttonText }}
            <span
              class="flex items-center justify-center bg-dark-gray rounded-full w-8 h-8 md:w-10 md:h-10 group-hover:bg-[#999999] transition ease-in-out duration-300"
              ><icon name="arrow"
            /></span>
          </button>
        </div>
      </div>
    </div>

    <div
      id="info"
      v-if="showInfo"
      :class="{
        'text-dark-gray bg-white': dayTime,
        'text-white bg-black': !dayTime,
      }"
      class="flex items-center h-1/2 backdrop-filter backdrop-blur-xl bg-opacity-75 firefox:bg-opacity-30"
    >
      <div
        class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 lg:gap-x-24 lg:divide-x-2 divide-[#979797]"
      >
        <div class="flex flex-col gap-4 md:gap-12 lg:gap-9 justify-start">
          <div
            class="flex flex-row md:flex-col items-center md:items-start justify-between md:gap-2"
          >
            <p class="text-h8 md:text-h7 lg:text-h6 uppercase">
              Current Timezone
            </p>
            <p class="text-h4 md:text-abbreviation lg:text-h2 font-bold">
              {{ timezone }}
            </p>
          </div>
          <div
            class="flex flex-row md:flex-col items-center md:items-start justify-between md:gap-2"
          >
            <p class="text-h8 md:text-h7 lg:text-h6 uppercase">
              Day Of The Year
            </p>
            <p class="text-h4 md:text-abbreviation lg:text-h2 font-bold">
              {{ dayOfTheYear }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:gap-9 md:pl-24">
          <div
            class="flex flex-row md:flex-col items-center md:items-start justify-between md:gap-2"
          >
            <p class="text-h8 md:text-h7 lg:text-h6 uppercase">
              Day Of The Week
            </p>
            <p class="text-h4 md:text-abbreviation lg:text-h2 font-bold">
              {{ dayOfTheWeek }}
            </p>
          </div>
          <div
            class="flex flex-row md:flex-col items-center md:items-start justify-between md:gap-2"
          >
            <p class="text-h8 md:text-h7 lg:text-h6 uppercase">Week Number</p>
            <p class="text-h4 md:text-abbreviation lg:text-h2 font-bold">
              {{ weekNumber }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Quote from "./Quote.vue";
import Location from "./Location.vue";
import Icon from "./Icon.vue";

export default {
  components: {
    Quote,
    Location,
    Icon,
  },
  data() {
    return {
      datetime: [],
      abbreviation: [],
      timezone: [],
      dayOfTheYear: [],
      dayOfTheWeek: [],
      weekNumber: [],
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
    greeting() {
      if (!this.datetime) return "";

      const hour = parseInt(this.datetime.slice(11, 13));
      let greetingText = "";
      let icon = "";

      if (hour >= 5 && hour < 12) {
        greetingText = "GOOD MORNING";
        icon = "sun";
      } else if (hour >= 12 && hour < 18) {
        greetingText = "GOOD AFTERNOON";
        icon = "sun";
      } else {
        greetingText = "GOOD EVENING";
        icon = "moon";
        this.dayTime = false;
      }

      return { text: greetingText, icon: icon };
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
          this.currentTime = "Failed to fetch time";
        });
    },
    toggleInfo() {
      this.showInfo = !this.showInfo;
      this.buttonText = this.showInfo ? "LESS" : "MORE";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
</style>
