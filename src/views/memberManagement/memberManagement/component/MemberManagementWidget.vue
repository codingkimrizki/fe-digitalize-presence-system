<template>
  <a-row :gutter="[24, 24]" :wrap="true">
    <BaseWidget
      :height="110"
      title="Production Engineering"
      :value="machineStore.totalMachine"
      :icon="SettingOutlined"
    />
    <BaseWidget
      :height="110"
      title="Part Manufacturing"
      :value="machineStore.totalMachine"
      :icon="RobotOutlined"
    />
    <BaseWidget
      :height="110"
      title="Assembly"
      :value="machineStore.totalMachine"
      :icon="MergeCellsOutlined"
    />
    <BaseWidget
      :height="110"
      title="Quality Assurance"
      :value="machineStore.totalMachine"
      :icon="CarryOutOutlined"
    />
    <BaseWidget
      :height="110"
      title="Production Control"
      :value="machineStore.totalMachine"
      :icon="DesktopOutlined"
    />
    <BaseWidget
      :height="110"
      title="Purchasing"
      :value="machineStore.totalMachine"
      :icon="DeliveredProcedureOutlined"
    />
    <BaseWidget
      :height="110"
      title="Finance"
      :value="machineStore.totalMachine"
      :icon="DollarCircleOutlined"
    />
    <BaseWidget
      :height="110"
      title="HRD PGA"
      :value="machineStore.totalMachine"
      :icon="TeamOutlined"
    />
  </a-row>
</template>

<script setup>
import BaseWidget from '@/components/base/BaseWidget.vue'
import { useMachineStore } from '@/stores/machine'
import {
  SettingOutlined,
  MergeCellsOutlined,
  CarryOutOutlined,
  RobotOutlined,
  DesktopOutlined,
  DeliveredProcedureOutlined,
  DollarCircleOutlined,
  TeamOutlined
} from '@ant-design/icons-vue'
const machineStore = useMachineStore()
</script>

<style scoped></style>
