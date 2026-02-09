<template>
  <a-row :gutter="[24, 24]" :wrap="true">
    <BaseWidgetVers3
      title="Late"
      :value="machineStore.totalMachine"
      :image="partImg"
      :height="220"
      :imageStyle="{borderRadius: '8px'}"
    />
    <BaseWidgetVers3
      title="Sick"
      :value="machineStore.totalMachine"
      :image="partImg"
      :height="220"
      :imageStyle="{borderRadius: '8px'}"
    />
    <BaseWidgetVers3
      title="Paid Leave"
      :value="machineStore.totalMachine"
      :height="220"
      :image="partImg"
      :imageStyle="{borderRadius: '8px'}"
    />

  </a-row>
</template>

<script setup>
import BaseWidgetVers3 from '@/components/base/BaseWidgetVers3.vue'
import { useMachineStore } from '@/stores/machine'
import partImg from '@/assets/images/content-background1.jpg'
const machineStore = useMachineStore()
</script>

<style scoped></style>
