<template>
  <span class="bn-tag" :class="classes">
    <slot></slot>
    <button v-if="closable" class="bn-tag__close" type="button" @click="$emit('close')">
      <bn-icon name="close" :size="12"></bn-icon>
    </button>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'BnTag',
  emits: ['close'],
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => ['default', 'success', 'warning', 'danger', 'info'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => [
      `bn-tag--${props.type}`,
      `bn-tag--${props.size}`,
      { 'is-closable': props.closable }
    ])

    return {
      classes
    }
  }
})
</script>
