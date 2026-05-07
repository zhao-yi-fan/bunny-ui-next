<template>
  <span
    class="bn-icon"
    :class="{ 'is-spin': spin }"
    :style="iconStyle"
    role="img"
    aria-hidden="true"
    v-html="iconMarkup"
  ></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import icons from './icons';

export default defineComponent({
  name: 'BnIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: ''
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const iconMarkup = computed(() => {
      const path = icons[props.name] || icons.info;
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
    });

    const iconStyle = computed(() => {
      const size = typeof props.size === 'number' ? `${props.size}px` : props.size;
      return {
        width: size,
        height: size,
        color: props.color || 'currentColor'
      };
    });

    return {
      iconMarkup,
      iconStyle
    };
  }
});
</script>
