<template>
  <div>
    <bn-button></bn-button>
    <bn-button-group></bn-button-group>
    <bn-icon></bn-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent,toRefs, reactive, computed, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup(ctx) {
    console.log(ctx, "ctx====");
    console.log(arguments, "ctx====");

    // $message.info({
    //   message: "我很帅",
    //   duration: 3000
    // })
  }
})
</script>

<style lang="scss">
</style>
