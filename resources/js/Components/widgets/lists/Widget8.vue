<template>
  <!--begin::List Widget 8-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bold text-gray-900">Latest Products</span>

        <span class="text-muted mt-1 fw-semibold fs-7">Gifts and more</span>
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
    <div class="card-body pt-3">
      <template v-for="(item, index) in list" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-7': list.length - 1 !== index }"
          class="d-flex align-items-sm-center"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-60px symbol-2by3 me-4">
            <div
              class="symbol-label"
              :style="{
                backgroundImage: `url(${item.image})`,
              }"
            ></div>
          </div>
          <!--end::Symbol-->

          <!--begin::Content-->
          <div
            class="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2"
          >
            <!--begin::Title-->
            <div class="flex-grow-1 my-lg-0 my-2 me-2">
              <a
                href="#"
                class="text-gray-800 fw-bold text-hover-primary fs-6"
                >{{ item.title }}</a
              >

              <span class="text-muted fw-semibold d-block pt-1">{{
                item.desc
              }}</span>
            </div>
            <!--end::Title-->

            <!--begin::Section-->
            <div class="d-flex align-items-center">
              <div class="me-6">
                <i class="fa fa-star-half-alt me-1 text-warning fs-5"></i>

                <span class="text-gray-800 fw-bold">{{ item.rate }}</span>
              </div>

              <a href="#" class="btn btn-icon btn-light btn-sm border-0">
                <KTIcon
                  icon-name="arrow-right"
                  icon-class="fs-2 text-primary"
                />
              </a>
            </div>
            <!--end::Section-->
          </div>
          <!--end::Content-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 8-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Dropdown3 from "@/Components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-6",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = ref([
      {
        image: getAssetPath("media/stock/600x400/img-17.jpg"),
        title: "Cup & Green",
        desc: "Visually stunning",
        rate: "4.2",
      },
      {
        image: getAssetPath("media/stock/600x400/img-17.jpg"),
        title: "Pink Patterns",
        desc: "Feminine all around",
        rate: "5.0",
      },
      {
        image: getAssetPath("media/stock/600x400/img-1.jpg"),
        title: "Abstract Art",
        desc: "The will to capture readers",
        rate: " 5.7",
      },
      {
        image: getAssetPath("media/stock/600x400/img-9.jpg"),
        title: "Desserts platter",
        desc: "Food trends & inspirations",
        rate: "3.7",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
