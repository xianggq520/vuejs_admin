<template>
  <header>
    <el-menu class="navbar" mode="horizontal">
      
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
      
      <div class="right-menu">

        <error-log class="errLog-container right-menu-item"></error-log>

        <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
          <screenfull class="screenfull right-menu-item"></screenfull>
        </el-tooltip>

        <lang-select class="right-menu-item"></lang-select>

        <el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">
          <theme-picker class="theme-switch right-menu-item"></theme-picker>
        </el-tooltip>

        <el-dropdown class="avatar-container right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <!-- <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'"> -->
            <svg-icon class="user-avatar" icon-class="user"/>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided>
              <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </header>
</template>

<script>
  import { mapGetters } from "vuex";
  import Hamburger from "@/components/Hamburger";
  import ErrorLog from "@/components/ErrorLog";
  import Screenfull from "@/components/Screenfull";
  import LangSelect from "@/components/LangSelect";
  import ThemePicker from "@/components/ThemePicker";

  export default {
    name: "Headerbar",
    data(){
      return {}
    },
    components: {
      Hamburger,
      ErrorLog,
      Screenfull,
      LangSelect,
      ThemePicker
    },
    computed: {
      ...mapGetters(["sidebar", "name", "avatar", "pendings"]),
      /* loading(){
        return this.$store.state.pendings && this.$store.state.pendings.length;
      } */
    },
    mounted(){
      this.$store.dispatch("ajaxPending", 1);
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch("toggleSideBar");
      },
      logout() {
        this.$store.dispatch("LogOut").then(() => {
          location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
        });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  $header_height: 50px;
  $header_line_height: 50px;

  .navbar {
    height: 50px;
    border-radius: 0px !important;
    z-index: 1002;
    .hamburger-container {
      height: $header_height;
      line-height: $header_line_height;
      padding: 0 10px;
      float: left;
    }
    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }
    .right-menu {
      float: right;
      height: 100%;
      &:focus {
        outline: none;
      }
      .right-menu-item {
        display: inline-block;
        margin: 0 8px;
        line-height: 50px;
        vertical-align: middle;
      }
      .screenfull {
        height: $header_height;
      }
      .avatar-container {
        height: 50px;
        margin-right: 30px;
        .avatar-wrapper {
          cursor: pointer;
          position: relative;
          .user-avatar {
            width: 26px;
            height: 26px;
            vertical-align: middle;
          }
          .el-icon-caret-bottom {
            position: absolute;
            right: -8px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
