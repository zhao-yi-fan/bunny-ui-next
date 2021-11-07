<template>
  <div class="messages" v-if="messages.length">
    <div v-for="m in messages" :key="m.id">
      {{ m.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  name: "BnMessage",
  setup(props) {
    const state = reactive({
      messages: [
        {
          id: "",
          message: "",
        },
      ],
      id: 0,
    });

    onMounted(() => {
      state.id = 0; // 表示当前弹层的唯一标识
    });

    const add = function (options) {
      let id = state.id++;
      let layer = { ...options, id };
      state.messages.push(layer);
      layer.timer = setTimeout(() => {
        remove(layer);
      }, options.duration);
    };
    const remove = function (layer) {
      clearTimeout(layer.timer);
      state.messages = state.messages.filter(
        (message) => message.id !== layer.id
      );
    };

    return {
      ...toRefs(state),
      add,
      remove,
    };
  },
});
</script>
<style lang="css" scoped>
</style>
