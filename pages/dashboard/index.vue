<script setup lang="ts">
const {currentUser} = storeToRefs(useAuthStore());
</script>

<template>
  <h1 class="text-3xl font-medium">Dashboard</h1>
  {{ currentUser }}
</template>

