<template>
  <div
    class="flex flex-col justify-between h-screen py-20 font-inter text-white"
    :class="{
      'py-0': showInfo,
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
        'h-1/2 py-20': showInfo,
      }"
    >
      <div class="flex items-end justify-between">
        <div>
          <div class="flex gap-4">
            <icon :name="greeting.icon" />
            <p class="text-h4 uppercase">{{ greeting.text }}</p>
          </div>

          <h1 class="font-bold text-h1">
            {{ formattedTime }}
            <span class="font-light text-abbreviation">{{ abbreviation }}</span>
          </h1>

          <Location />
        </div>

        <div>
          <button
            @click="toggleInfo"
            class="flex items-center bg-white text-black/50 gap-3 rounded-full p-2 pl-6 font-bold uppercase"
          >
            {{ buttonText }}
            <span
              class="flex items-center justify-center bg-dark-gray rounded-full w-10 h-10"
              ><icon name="arrow"
            /></span>
          </button>
        </div>
      </div>
    </div>

    <div
      id="info"
      v-if="showInfo"
      class="flex items-center h-1/2 text-dark-gray bg-white backdrop-filter backdrop-blur-xl bg-opacity-50 firefox:bg-opacity-30"
    >
      <div
        class="container grid grid-cols-2 gap-x-24 divide-x-2 divide-[#979797]"
      >
        <div class="flex flex-col gap-9">
          <div>
            <p class="text-h6 uppercase">Current Timezone</p>
            <p class="text-h2 font-bold">{{ timezone }}</p>
          </div>
          <div>
            <p class="text-h6 uppercase">Day Of The Year</p>
            <p class="text-h2 font-bold">{{ dayOfTheYear }}</p>
          </div>
        </div>
        <div class="flex flex-col gap-9 pl-24">
          <div>
            <p class="text-h6 uppercase">Day Of The Week</p>
            <p class="text-h2 font-bold">{{ dayOfTheWeek }}</p>
          </div>
          <div>
            <p class="text-h6 uppercase">Week Number</p>
            <p class="text-h2 font-bold">{{ weekNumber }}</p>
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
        greetingText = "GOOD MORNING, IT’S CURRENTLY";
        icon = "sun";
      } else if (hour >= 12 && hour < 18) {
        greetingText = "GOOD AFTERNOON, IT’S CURRENTLY";
        icon = "sun";
      } else {
        greetingText = "GOOD EVENING, IT’S CURRENTLY";
        icon = "moon";
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
