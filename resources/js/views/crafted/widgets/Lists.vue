<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <ListsWidget1 widget-classes="card-xl-stretch mb-xl-8"></ListsWidget1>
    </div>
    <div class="col-xl-4">
      <ListsWidget2 widget-classes="card-xl-stretch mb-xl-8"></ListsWidget2>
    </div>
    <div class="col-xl-4">
      <ListsWidget3
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></ListsWidget3>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <ListsWidget4 widget-classes="card-xl-stretch mb-xl-8"></ListsWidget4>
    </div>
    <div class="col-xl-4">
      <ListsWidget5 widget-classes="card-xl-stretch mb-xl-8"></ListsWidget5>
    </div>
    <div class="col-xl-4">
      <ListsWidget6
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></ListsWidget6>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <ListsWidget7 widget-classes="card-xl-stretch mb-xl-8"></ListsWidget7>
    </div>
    <div class="col-xl-6">
      <ListsWidget8
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
      ></ListsWidget8>
    </div>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListsWidget1 from "@/Components/widgets/lists/Widget1.vue";
import ListsWidget2 from "@/Components/widgets/lists/Widget2.vue";
import ListsWidget3 from "@/Components/widgets/lists/Widget3.vue";
import ListsWidget4 from "@/Components/widgets/lists/Widget4.vue";
import ListsWidget5 from "@/Components/widgets/lists/Widget5.vue";
import ListsWidget6 from "@/Components/widgets/lists/Widget6.vue";
import ListsWidget7 from "@/Components/widgets/lists/Widget7.vue";
import ListsWidget8 from "@/Components/widgets/lists/Widget8.vue";

export default defineComponent({
  name: "widgets-lists",
  components: {
    ListsWidget1,
    ListsWidget2,
    ListsWidget3,
    ListsWidget4,
    ListsWidget5,
    ListsWidget6,
    ListsWidget7,
    ListsWidget8,
  },
});
</script>
