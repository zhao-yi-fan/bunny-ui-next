<template>
  <label class="bn-input" :class="classes">
    <span v-if="prefixIcon" class="bn-input__icon">
      <bn-icon :name="prefixIcon" :size="16"></bn-icon>
    </span>
    <input
      ref="inputRef"
      class="bn-input__inner"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @change="handleChange"
    />
    <button
      v-if="showClear"
      class="bn-input__clear"
      type="button"
      @click="clearValue"
    >
      <bn-icon name="close" :size="14"></bn-icon>
    </button>
    <span v-else-if="suffixIcon" class="bn-input__icon">
      <bn-icon :name="suffixIcon" :size="16"></bn-icon>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'

export default defineComponent({
  name: 'BnInput',
  emits: ['update:modelValue', 'change', 'clear'],
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const inputRef = ref(null) as any

    const classes = computed(() => [
      `bn-input--${props.size}`,
      {
        'is-disabled': props.disabled
      }
    ])

    const showClear = computed(() => Boolean(props.clearable && !props.disabled && props.modelValue))

    const emitValue = (event: Event, eventName: 'update:modelValue' | 'change') => {
      const target = event.target as HTMLInputElement
      emit(eventName, target.value)
    }

    const handleInput = (event: Event) => {
      emitValue(event, 'update:modelValue')
    }

    const handleChange = (event: Event) => {
      emitValue(event, 'change')
    }

    const clearValue = () => {
      emit('update:modelValue', '')
      emit('change', '')
      emit('clear')
      nextTick(() => {
        inputRef.value?.focus()
      })
    }

    return {
      inputRef,
      classes,
      showClear,
      handleInput,
      handleChange,
      clearValue
    }
  }
})
</script>
