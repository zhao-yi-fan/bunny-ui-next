<template>
  <div class="bn-message" :class="classes">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  name: "BnMessage",
  props: {
    type: {
      type: String,
      default: "success",
    },
    message: {
      type: String,
    },
  },
  setup(props) {
    let classes = computed(() => {
      return `bn-message-${props.type}`;
    });
    
    const state = reactive({});

    onMounted(() => {});

    return {
      ...toRefs(state),
      classes,
    };
  },
});
</script>
<style lang="scss" scoped>
.bn-message {
  display: flex;
  box-sizing: border-box;
  transition: opacity .3s, transform .4s, top .4s;
  padding: 15px 25px;
  border-radius: 4px;
  align-items: center;

  &-success {
    background-color: #67c23a;
  }
  &-info {
    background-color: #909399;
  }
  &-warning {
    background-color: #E6A23C;
  }
  &-error {
    background-color: #F56C6C;
  }
}
</style>
