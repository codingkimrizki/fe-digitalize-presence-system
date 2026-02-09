<template>
  <div>
    <a-divider orientation="left">
      <span class="x-large">Attendance List</span>
    </a-divider>
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <AttendanceWidget />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <AttendanceList />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import AttendanceList from './component/AttendanceList.vue';
import AttendanceWidget from './component/AttendanceWidget.vue';
</script>

<style scoped></style>
