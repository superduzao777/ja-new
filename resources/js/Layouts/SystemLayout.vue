<template>
  <!--begin::System Layout-->
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <slot />
  </div>
  <!--end::System Layout-->
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useBodyStore } from "@/stores/body";

const store = useBodyStore();

onMounted(() => {
  store.addBodyClassname("app-blank");
  store.addBodyClassname("bgi-size-cover");
  store.addBodyClassname("bgi-position-center");
  store.addBodyClassname("bgi-no-repeat");
});
</script>
