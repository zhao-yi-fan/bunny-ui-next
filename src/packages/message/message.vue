<template>
  <div class="messages" v-if="messages.length">
    <div v-for="m in messages" :key="m.id">
      {{ m.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "BnMessage",
  data() {
    return {
      messages: [
        {
          id: "",
          message: "",
        },
      ],
      id: 0,
    };
  },
  mounted() {
    this.id = 0; // 表示当前弹层的唯一标识
  },
  methods: {
    add(options) {
      let id = this.id++;
      let layer = { ...options, id };
      this.messages.push(layer);
      layer.timer = setTimeout(() => {
        this.remove(layer);
      }, options.duration);
    },
    remove(layer) {
      clearTimeout(layer.timer);
      this.messages = this.messages.filter(
        (message) => message.id !== layer.id
      );
    },
  },
});
</script>
<style lang="css" scoped>
</style>
