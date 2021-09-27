<template>
  <bn-button></bn-button>
  <bn-button-group></bn-button-group>
  <bn-icon></bn-icon>
</template>

<script lang="ts">
import { defineComponent,getCurrentInstance,inject, toRefs, reactive, computed, onMounted } from "vue";
interface Data {
  [key: string]: unknown;
}
interface SetupContext {
  attrs: Data;
  // slots: Slots;
  emit: (event: string, ...args: unknown[]) => void;
}

export default defineComponent({
  name: "App",
  setup(props: Data, context: SetupContext) {
    const message =inject('$message')
    // const { proxy } = getCurrentInstance()
    message.info({
      message: "我很帅",
      duration: 3000
    })
  },
});
</script>

<style lang="scss">
</style>
