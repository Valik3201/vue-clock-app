<template>
  <div
    :class="{
      'text-dark-gray bg-white': dayTime,
      'text-white bg-black': !dayTime,
    }"
    class="flex items-center w-full h-1/3 lg:h-1/2 backdrop-filter backdrop-blur-xl bg-opacity-75 firefox:bg-opacity-30 absolute -bottom-1/3 lg:-bottom-1/2 right-0"
  >
    <div
      class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 lg:gap-x-24 lg:divide-x-2 divide-[#979797]"
    >
      <div class="flex flex-col gap-4 md:gap-12 lg:gap-9 justify-start">
        <TimeInfoItem
          v-for="key in firstTwoItems"
          :key="key"
          :label="getLabel(key)"
          :value="timeInfo[key]"
        />
      </div>

      <div class="flex flex-col gap-4 md:gap-9 md:pl-24">
        <TimeInfoItem
          v-for="key in nextTwoItems"
          :key="key"
          :label="getLabel(key)"
          :value="timeInfo[key]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TimeInfoItem from "./TimeInfoItem.vue";

export default {
  components: {
    TimeInfoItem,
  },
  props: {
    timeInfo: Object,
    showInfo: Boolean,
    dayTime: Boolean,
  },
  computed: {
    firstTwoItems() {
      const keys = Object.keys(this.timeInfo);
      return keys.slice(0, 2);
    },
    nextTwoItems() {
      const keys = Object.keys(this.timeInfo);
      return keys.slice(2, 4);
    },
  },
  methods: {
    getLabel(key) {
      const labels = {
        timezone: "Current Timezone",
        dayOfTheYear: "Day Of The Year",
        dayOfTheWeek: "Day Of The Week",
        weekNumber: "Week Number",
      };
      return labels[key] || "";
    },
  },
};
</script>
