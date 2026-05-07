<template>
  <div class="bn-button-group" :class="classes" role="group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, toRefs } from 'vue'

type ButtonSize = '' | 'small' | 'medium' | 'large'

export default defineComponent({
  name: 'BnButtonGroup',
  props: {
    size: {
      type: String,
      default: '',
      validator: (value: string) => ['', 'small', 'medium', 'large'].includes(value)
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const groupContext = reactive({
      size: props.size as ButtonSize
    })

    provide('bnButtonGroup', groupContext)

    const classes = computed(() => ({
      [`bn-button-group--${props.size}`]: Boolean(props.size),
      'is-vertical': props.vertical
    }))

    return {
      ...toRefs(groupContext),
      classes
    }
  }
})
</script>
