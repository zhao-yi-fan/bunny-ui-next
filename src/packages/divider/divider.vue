<template>
  <div class="bn-divider" :class="`is-${contentPosition}`">
    <span v-if="$slots.default" class="bn-divider__text">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BnDivider',
  props: {
    contentPosition: {
      type: String,
      default: 'center',
      validator: (value: string) => ['left', 'center', 'right'].includes(value)
    }
  }
})
</script>
