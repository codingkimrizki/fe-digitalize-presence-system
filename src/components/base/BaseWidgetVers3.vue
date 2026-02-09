<template>
  <a-col v-bind="colProps">
    <a-flex vertical align="start" gap="small" style="width: 100%;">

      <!-- IMAGE (pakai div) -->
      <div
        v-if="image"
        class="image-wrapper"
        :style="computedImageStyle"
      ></div>

      <!-- TITLE & VALUE -->
      <div class="text-wrapper">
        <span class="stat-title">{{ title }}</span>
        <span class="stat-value">{{ value }} {{ suffix }}</span>
      </div>

      <!-- DESCRIPTION -->
      <a-typography-text
        v-if="description"
        type="secondary"
        style="text-align: center"
      >
        {{ description }}
      </a-typography-text>

      <slot name="description" />
    </a-flex>
  </a-col>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: { type: String, default: null },
  height: { type: [String, Number], default: null },
  imageStyle: { type: Object, default: () => ({}) },
  description: { type: String },
  title: { type: String, required: true },
  value: { type: [String, Number] },
  suffix: { type: String },
  col: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 6,
    }),
  },
})

const colProps = computed(() => props.col)

const computedImageStyle = computed(() => {
  const baseStyle = {
    width: '100%',
    height: props.height
      ? typeof props.height === 'number'
        ? `${props.height}px`
        : props.height
      : 'auto',
    borderRadius: '16px',
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return { ...baseStyle, ...props.imageStyle }
})
</script>

<style scoped>
.image-wrapper {
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  background-color: #f5f7fa;
}

.text-wrapper {
  width: 90%;
  text-align: start;
}

.stat-title {
  display: block;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2px;
  color: var(--text-color);
}

.stat-value {
  display: block;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--secondary-color, grey);
}
</style>
