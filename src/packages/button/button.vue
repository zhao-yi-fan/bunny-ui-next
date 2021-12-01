<template>
  <button :class="classes">
    <!-- 默认插槽 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BnButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(type: string) {
        const map = ['warning', 'danger', 'success', 'info', 'primary'];
        if (!map.includes(type)) {
          throw new Error(`button的type只能是${map.join(',')}`);
        }
        return true;
      }
    }
  },
  setup(props: any) {
    const classes = computed(() => {
      return ['bn-button', `bn-button-${props.type}`];
    });

    return {
      classes
    };
  }
});
</script>

<style lang="scss" scoped></style>
