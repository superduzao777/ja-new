<template>
  <!--begin::Feeds Widget 4-->
  <div class="card" :class="widgetClasses">
    <!--begin::Body-->
    <div class="card-body pb-0">
      <!--begin::Header-->
      <div class="d-flex align-items-center mb-5">
        <!--begin::User-->
        <div class="d-flex align-items-center flex-grow-1">
          <!--begin::Avatar-->
          <div class="symbol symbol-45px me-5">
            <img :src="getAssetPath('media/avatars/300-7.jpg')" alt="" />
          </div>
          <!--end::Avatar-->

          <!--begin::Info-->
          <div class="d-flex flex-column">
            <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold"
              >Carles Nilson</a
            >
            <span class="text-gray-500 fw-semibold">Last week at 10:00 PM</span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::User-->

        <!--begin::Menu-->
        <div class="my-0">
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
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Header-->

      <!--begin::Post-->
      <div class="mb-7">
        <!--begin::Text-->
        <div class="text-gray-800 mb-5">
          Outlines keep you honest. They stop you from indulging in poorly
          thought-out metaphors about driving and keep you focused on the
          overall structure of your post
        </div>
        <!--end::Text-->

        <!--begin::Toolbar-->
        <div class="d-flex align-items-center mb-5">
          <a
            href="#"
            class="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
          >
            <KTIcon icon-name="message-text-2" icon-class="fs-3" />
            22
          </a>

          <a
            href="#"
            class="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
          >
            <KTIcon icon-name="heart" icon-class="fs-2" />
            59
          </a>
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Post-->

      <!--begin::Separator-->
      <div class="separator mb-4"></div>
      <!--end::Separator-->

      <!--begin::Reply input-->
      <form class="position-relative mb-6">
        <textarea
          class="form-control border-0 p-0 pe-10 resize-none min-h-25px"
          data-kt-autosize="true"
          rows="1"
          placeholder="Reply.."
        ></textarea>

        <div class="position-absolute top-0 end-0 me-n5">
          <span class="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
            <KTIcon icon-name="paper-clip" icon-class="fs-3 mb-3" />
          </span>

          <span class="btn btn-icon btn-sm btn-active-color-primary ps-0">
            <KTIcon icon-name="geolocation" icon-class="fs-2 mb-3" />
          </span>
        </div>
      </form>
      <!--edit::Reply input-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Feeds Widget 4-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/Components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-4",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown3,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
