<template>
  <div>
    <a-divider orientation="left">
      <span class="x-large">Employee Management</span>
    </a-divider>
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <MemberManagementWidget />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <MemberManagementList />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
  import MemberManagementWidget from './component/MemberManagementWidget.vue';
  import MemberManagementList from './component/MemberManagementList.vue';
</script>

<style scoped></style>
