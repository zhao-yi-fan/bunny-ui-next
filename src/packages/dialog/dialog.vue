<template>
  <transition name="bn-dialog-fade">
    <div v-if="modelValue" class="bn-dialog__wrapper" @click.self="handleWrapperClick">
      <div class="bn-dialog" role="dialog" aria-modal="true">
        <div class="bn-dialog__header">
          <span class="bn-dialog__title">{{ title }}</span>
          <button class="bn-dialog__close" type="button" @click="closeDialog">
            <bn-icon name="close" :size="16"></bn-icon>
          </button>
        </div>
        <div class="bn-dialog__body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="bn-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, watch } from 'vue'

export default defineComponent({
  name: 'BnDialog',
  emits: ['update:modelValue', 'open', 'close'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const setBodyOverflow = (visible: boolean) => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = visible ? 'hidden' : ''
      }
    }

    const closeDialog = () => {
      emit('update:modelValue', false)
    }

    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        closeDialog()
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.modelValue && props.closeOnPressEscape) {
        closeDialog()
      }
    }

    watch(
      () => props.modelValue,
      (value) => {
        setBodyOverflow(value)
        emit(value ? 'open' : 'close')
      }
    )

    onMounted(() => {
      setBodyOverflow(props.modelValue)
      if (typeof document !== 'undefined') {
        document.addEventListener('keydown', handleKeydown)
      }
    })

    onBeforeUnmount(() => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleKeydown)
      }
      setBodyOverflow(false)
    })

    return {
      closeDialog,
      handleWrapperClick
    }
  }
})
</script>
