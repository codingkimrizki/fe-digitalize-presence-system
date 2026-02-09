<template>
  <div>
    <a-divider orientation="left">
      <span class="x-large">Attendance</span>
    </a-divider>
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <DashboardWidget />
      </a-col>
    </a-row>
    <a-row :gutter="[16, 16]" style="margin-top: 25px;" >
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <DashboardWidget2 />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import DashboardWidget from './component/dashboardWidget.vue'
import DashboardWidget2 from './component/dashboardWidget2.vue';
</script>

<style scoped></style>
