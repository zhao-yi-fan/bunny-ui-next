<template>
  <bn-button type="primary">主要的</bn-button>
  <bn-button type="danger">危险的</bn-button>
  <bn-button type="warning">警告</bn-button>
  <bn-button type="success">成功</bn-button>
  <bn-button type="info">信息</bn-button>
  <bn-button-group></bn-button-group>
  <bn-icon></bn-icon>

  <button @click="addMessage">消息框</button>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  inject,
  toRefs,
  reactive,
  computed,
  onMounted,
} from "vue";

import { Message } from "../packages";

export default defineComponent({
  name: "Home",
  components: {},
  setup(props, context) {
    const addMessage = function () {
      Message.success({
        message: "文本文本",
        duration: 3000,
      });
    };

    return {
      addMessage,
    };
  },
});
</script>
