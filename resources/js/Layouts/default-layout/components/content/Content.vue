<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container" :class="{
      'container-fluid': contentWidthFluid,
      'container-xxl': !contentWidthFluid,
    }">
      <slot />
    </div>
    <!--end::Content container-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { contentWidthFluid } from "@/Layouts/default-layout/config/helper";

export default defineComponent({
  name: "default-layout-content",
  setup() {
    return {
      contentWidthFluid,
    };
  },
});
</script>