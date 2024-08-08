<template>
  <!--begin::App-->
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <KTHeader />
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <KTSidebar />
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <KTToolbar />
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <KTContent>
                <slot />
              </KTContent>
            </div>
          </div>
          <!--end::Content wrapper-->
          <KTFooter />
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
  <!--end::App-->

  <KTDrawers />
  <KTScrollTop />
  <KTModals />
  <KTCustomize />
</template>

<script lang="ts">
import { nextTick, onBeforeMount, onMounted, } from "vue";
import KTHeader from "@/Layouts/default-layout/components/header/Header.vue";
import KTSidebar from "@/Layouts/default-layout/components/sidebar/Sidebar.vue";
import KTContent from "@/Layouts/default-layout/components/content/Content.vue";
import KTToolbar from "@/Layouts/default-layout/components/toolbar/Toolbar.vue";
import KTFooter from "@/Layouts/default-layout/components/footer/Footer.vue";
import KTDrawers from "@/Layouts/default-layout/components/drawers/Drawers.vue";
import KTModals from "@/Layouts/default-layout/components/modals/Modals.vue";
import KTScrollTop from "@/Layouts/default-layout/components/extras/ScrollTop.vue";
import KTCustomize from "@/Layouts/default-layout/components/extras/Customize.vue";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import LayoutService from "@/core/services/LayoutService";

onBeforeMount(() => {
  LayoutService.init();
});

onMounted(() => {
  nextTick(() => {
    reinitializeComponents();
  });
});
</script>
