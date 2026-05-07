<template>
  <button
    class="bn-button"
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="bn-button__loading"></span>
    <bn-icon
      v-else-if="icon"
      :name="icon"
      :size="16"
      class="bn-button__icon"
    ></bn-icon>
    <span class="bn-button__content">
      <slot>按钮</slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue';

type ButtonSize = '' | 'small' | 'medium' | 'large'
type ButtonGroupContext = {
  size?: ButtonSize
}

export default defineComponent({
  name: 'BnButton',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const buttonGroup = inject<ButtonGroupContext | null>('bnButtonGroup', null);

    const classes = computed(() => {
      const groupSize = buttonGroup?.size || '';
      const size = groupSize || props.size;
      return [
        `bn-button--${props.type}`,
        `bn-button--${size}`,
        {
          'is-disabled': props.disabled,
          'is-loading': props.loading,
          'is-grouped': Boolean(buttonGroup)
        }
      ];
    });

    const handleClick = (event: MouseEvent) => {
      if (props.disabled || props.loading) return;
      emit('click', event);
    };

    return {
      classes,
      handleClick
    };
  }
});
</script>
