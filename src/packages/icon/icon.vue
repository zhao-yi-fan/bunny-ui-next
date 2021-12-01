<template>
  <svg class="bn-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './font';

export default defineComponent({
  name: 'BnIcon',
  props: {
    icon: {
      type: String
    }
  }
});
</script>

<style lang="scss" scoped></style>
