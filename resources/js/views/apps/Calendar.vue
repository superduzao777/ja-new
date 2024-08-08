<template>
  <CalendarApp1></CalendarApp1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalendarApp1 from "@/Components/calendar/CalendarApp1.vue";

export default defineComponent({
  name: "apps-calendar",
  components: {
    CalendarApp1,
  },
});
</script>
