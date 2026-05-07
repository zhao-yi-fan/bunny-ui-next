<template>
  <div class="bn-watermark">
    <div class="bn-watermark__content">
      <slot></slot>
    </div>
    <div class="bn-watermark__mask" :style="maskStyle"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'BnWatermark',
  props: {
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    gap: {
      type: Array as PropType<number[]>,
      default: () => [120, 120]
    },
    rotate: {
      type: Number,
      default: -22
    },
    opacity: {
      type: Number,
      default: 0.15
    },
    zIndex: {
      type: Number,
      default: 9
    }
  },
  setup(props) {
    const svgToDataUrl = (value: string) => `data:image/svg+xml;utf8,${encodeURIComponent(value)}`

    const svgMarkup = computed(() => {
      const text = props.content || 'Bunny UI Next'
      const width = props.gap[0] || 120
      const height = props.gap[1] || 120

      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <g transform="translate(${width / 2}, ${height / 2}) rotate(${props.rotate})">
            <text
              x="0"
              y="0"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#111827"
              font-size="16"
              font-family="Arial, sans-serif"
            >${text}</text>
          </g>
        </svg>
      `.trim()
    })

    const maskStyle = computed(() => ({
      backgroundImage: props.image ? `url(${props.image})` : `url("${svgToDataUrl(svgMarkup.value)}")`,
      backgroundSize: `${props.gap[0] || 120}px ${props.gap[1] || 120}px`,
      opacity: props.opacity,
      zIndex: props.zIndex
    }))

    return {
      maskStyle
    }
  }
})
</script>
