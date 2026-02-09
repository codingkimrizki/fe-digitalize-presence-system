<template>
  <a-row :gutter="[24, 24]" :wrap="true">
    <BaseWidget
      :height="110"
      title="Assembly Today Presence % "
      :value="machineStore.totalMachine"
      :icon="SettingOutlined"
    />
    <BaseWidget
      :height="110"
      title="Late"
      :value="machineStore.totalMachine"
      :icon="SettingOutlined"
    />
    <BaseWidget
      :height="110"
      title="Sick"
      :value="machineStore.totalMachine"
      :icon="ExclamationCircleOutlined"
    />
    <BaseWidget
      :height="110"
      title="Paid Leave"
      :value="machineStore.totalMachine"
      :icon="ExclamationCircleOutlined"
    />
  </a-row>
</template>

<script setup>
import BaseWidget from '@/components/base/BaseWidget.vue'
import { useMachineStore } from '@/stores/machine'
import {
  SettingOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons-vue'
const machineStore = useMachineStore()
</script>

<style scoped></style>
