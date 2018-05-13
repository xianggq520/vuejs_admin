<template>
    <div class="view-wrap">
        <transform-button></transform-button>
    </div>
</template>
<script>
import transformButton from "@/components/transformButton";
export default {
    name:'buttons',
    components:{
        transformButton
    }
}
</script>
<style lang="scss" scoped>
    .view-wrap {
        padding: 15px;
    }
</style>