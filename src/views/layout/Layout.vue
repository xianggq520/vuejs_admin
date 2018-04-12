<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">

    <Headerbar class="headerbar-container"></Headerbar>

    <Sidebar class="sidebar-container"></Sidebar>

    <div class="main-container">

      <header class="header-wrap">
        <Breadcrumb class="breadcrumb-container"></Breadcrumb>
        <Blankbar></Blankbar>
      </header>

      <Contentview></Contentview>

    </div>

  </div>
</template>

<script>
  import { Headerbar, Sidebar, Contentview, Blankbar } from "./components";
  import Breadcrumb from "@/components/Breadcrumb";

  export default {
    name: "layout",
    components: {
      Breadcrumb,
      Headerbar,
      Sidebar,
      Contentview,
      Blankbar
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar;
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
