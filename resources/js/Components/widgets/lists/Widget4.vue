<template>
  <!--begin::List Widget 4-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold text-gray-900">Trends</span>

        <span class="text-muted mt-1 fw-semibold fs-7">Latest tech trends</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-7': list.length - 1 !== index }"
          class="d-flex align-items-sm-center"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-50px me-5">
            <span class="symbol-label">
              <img :src="item.image" class="h-50 align-self-center" alt="" />
            </span>
          </div>
          <!--end::Symbol-->

          <!--begin::Section-->
          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="flex-grow-1 me-2">
              <a
                href="#"
                class="text-gray-800 text-hover-primary fs-6 fw-bold"
                >{{ item.title }}</a
              >

              <span class="text-muted fw-semibold d-block fs-7">{{
                item.text
              }}</span>
            </div>

            <span class="badge badge-light fw-bold my-2">{{ item.badge }}</span>
          </div>
          <!--end::Section-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 4-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Dropdown3 from "@/Components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-4",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        image: getAssetPath("media/svg/brand-logos/plurk.svg"),
        title: "Top Authors",
        text: "Mark, Rowling, Esther",
        badge: "+82$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/telegram.svg"),
        title: "Popular Authors",
        text: "Randy, Steve, Mike",
        badge: "+280$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/vimeo.svg"),
        title: "New Users",
        text: "John, Pat, Jimmy",
        badge: "+4500$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/bebo.svg"),
        title: "Active Customers",
        text: "Mark, Rowling, Esther",
        badge: "+4500$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/kickstarter.svg"),
        title: "Bestseller Theme",
        text: "Disco, Retro, Sports",
        badge: "+4500$",
      },
      {
        image: getAssetPath("media/svg/brand-logos/fox-hub.svg"),
        title: "Fox Broker App",
        text: "Finance, Corporate, Apps",
        badge: "+145$",
        space: "",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
