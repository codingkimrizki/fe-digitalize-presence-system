<template>
  <div>
    <a-divider orientation="left">
      <span class="x-large">Attendance Report</span>
    </a-divider>
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <AttendanceReportList />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import AttendanceReportList from './component/AttendanceReportList.vue';


</script>

<style scoped></style>
