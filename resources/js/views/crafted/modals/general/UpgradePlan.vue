<template>
  <KTModalCard
    title="Upgrade Plan Modal Example"
    description="Click on the below buttons to launch <br/>a upgrade plan example."
    :image="getIllustrationsPath('8.png')"
    button-text="Upgrade Plan"
    modal-id="kt_modal_upgrade_plan"
  ></KTModalCard>
  <KTUpgradePlanModal></KTUpgradePlanModal>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTModalCard from "@/Components/cards/Card.vue";
import KTUpgradePlanModal from "@/Components/modals/general/UpgradePlanModal.vue";

export default defineComponent({
  name: "upgrade-plan",
  components: {
    KTModalCard,
    KTUpgradePlanModal,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
