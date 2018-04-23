<template>
  <section class="app-main" style="min-height: 100%" :style="clientStyle()">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
   
  export default {
    name: "AppMain",
    data:function(){
      return {
         
      };
    },
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews;
      } 
    },
    mounted() {
       
    },
    methods:{
      clientStyle(){ 
        return {"max-height": (this.$store.state.app.client.newheight - 119) + "px" }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .app-main {
    overflow-y: auto;
  }
</style>

