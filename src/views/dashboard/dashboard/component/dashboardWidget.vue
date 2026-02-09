<template>
  <a-row :gutter="[24, 24]" :wrap="true">
    <BaseWidgetVers2
      title="Production Engineering"
      :value="machineStore.totalMachine"
      :image="pe"
      :height="150"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="Assembly"
      :value="machineStore.totalMachine"
      :image="al"
      :height="150"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="QA"
      :value="machineStore.totalMachine"
      :height="150"
      :image="qa"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="PC"
      :value="machineStore.totalMachine"
      :height="150"
      :image="pc"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="Purchasing"
      :value="machineStore.totalMachine"
      :height="150"
      :image="purchasing"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="Finance"
      :value="machineStore.totalMachine"
      :height="150"
      :image="finance"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="HRD PGA"
      :value="machineStore.totalMachine"
      :height="150"
      :image="hrd"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="Molding"
      :value="machineStore.totalMachine"
      :height="150"
      :image="molding"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="Plating"
      :value="machineStore.totalMachine"
      :height="150"
      :image="plating"
      :imageStyle="{borderRadius: '20px'}"
    />
    <BaseWidgetVers2
      title="Stamping & Forming"
      :value="machineStore.totalMachine"
      :height="150"
      :image="stamping"
      :imageStyle="{borderRadius: '20px'}"
    />

  </a-row>
</template>

<script setup>
import BaseWidgetVers2 from '@/components/base/BaseWidgetVers2.vue'
import { useMachineStore } from '@/stores/machine'
import pe from '@/assets/images/pe.jpg'
import al from '@/assets/images/assembly.jpg'
import qa from '@/assets/images/qa.jpg'
import pc from '@/assets/images/pc.jpg'
import purchasing from '@/assets/images/purchasing.jpg'
import finance from '@/assets/images/finance.jpg'
import hrd from '@/assets/images/HRGA.jpg'
import molding from '@/assets/images/molding.jpg'
import plating from '@/assets/images/plating.jpg'
import stamping from '@/assets/images/stamping.jpg'
const machineStore = useMachineStore()
</script>

<style scoped></style>
