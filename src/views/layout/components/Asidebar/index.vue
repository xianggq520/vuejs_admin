<template>
  <aside>
    <scroll-bar>
      <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse">
        <aside-menu :routes="permission_routers"></aside-menu>
      </el-menu>
    </scroll-bar>
  </aside>
</template>

<script>
  import { mapGetters } from "vuex"
  import AsideMenu from "./AsideMenu.vue"
  import ScrollBar from "@/components/ScrollBar"

  export default {
    name:"asidebar",
    components: { AsideMenu, ScrollBar },
    computed: {
      ...mapGetters(["permission_routers", "sidebar"]),
      isCollapse() {
        return !this.sidebar.opened;
      }
    }
  };
</script>
