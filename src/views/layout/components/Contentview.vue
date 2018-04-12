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
  let computeClientHeight = function() {
    let clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return { "max-height": (clientHeight-119) + "px" };
  };

  export default {
    name: "AppMain",
    data:function(){
      return {
        //clientStyle : {"max-height": (this.$store.state.app.client.newheight - 119) + "px" }
      };
    },
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews;
      }/* ,
      clientStyle(){
        console.log(this.$store.state.app.client.newheight);
        return {"max-height": (this.$store.state.app.client.newheight - 119) + "px" };
      } */
      // key() {
      //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      // }
    },
    mounted() {
      /* let _this = this;
      window.onresize = function onresize() {
        _this.$nextTick(() => {
          setTimeout(() => {
            _this.clientStyle = computeClientHeight();
          }, 50);
        });
      }; */
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

