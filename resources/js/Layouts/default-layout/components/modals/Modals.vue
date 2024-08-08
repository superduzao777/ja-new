<template>
  <KTUpgradePlanModal />
  <KTCreateAppModal />
  <KTNewTargetModal />
  <KTViewUsersModal />
  <KTInviteFriendsModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTUpgradePlanModal from "@/Components/modals/general/UpgradePlanModal.vue";
import KTCreateAppModal from "@/Components/modals/wizards/CreateAppModal.vue";
import KTNewTargetModal from "@/Components/modals/forms/NewTargetModal.vue";
import KTViewUsersModal from "@/Components/modals/general/ViewUsersModal.vue";
import KTInviteFriendsModal from "@/Components/modals/general/InviteFriendsModal.vue";

export default defineComponent({
  name: "global-modals",
  components: {
    KTUpgradePlanModal,
    KTCreateAppModal,
    KTNewTargetModal,
    KTViewUsersModal,
    KTInviteFriendsModal,
  },
});
</script>
