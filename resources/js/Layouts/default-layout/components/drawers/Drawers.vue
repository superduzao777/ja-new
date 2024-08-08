<template>
  <KTMessengerDrawer />
  <KTActivityDrawer />
  <KTToolButtons />
  <KTHelpDrawer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTMessengerDrawer from "@/Layouts/default-layout/components/extras/MessengerDrawer.vue";
import KTActivityDrawer from "@/Layouts/default-layout/components/drawers/ActivityDrawer.vue";
import KTHelpDrawer from "@/Layouts/default-layout/components/extras/HelpDrawer.vue";
import KTToolButtons from "@/Layouts/default-layout/components/extras/ToolButtons.vue";

export default defineComponent({
  name: "global-drawers",
  components: {
    KTMessengerDrawer,
    KTActivityDrawer,
    KTHelpDrawer,
    KTToolButtons,
  },
});
</script>
