<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'App',
    mounted() {
      let _this = this;
      window.onresize = function onresize() {
        _this.$nextTick(() => {
           _this.$store.dispatch('windowResizeHandler')
        });
      };
    }
  }
</script>
<style lang="scss" scoped>
  #app {
    overflow: hidden;
  }
</style>
 


