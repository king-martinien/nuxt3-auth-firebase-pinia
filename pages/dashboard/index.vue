<script setup lang="ts">
const authStore = useAuthStore();
const {currentUser} = storeToRefs(authStore);

const handleLogout = async () => {
  await authStore.logout();
};

onMounted(async () => {
  await authStore.getCurrentUser();
});
</script>

<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <div v-if="currentUser" class="text-center">
        <h1 class="text-3xl font-medium">Dashboard</h1>
        <p class="mb-5">Welcome, {{ currentUser?.email }}</p>
        <button class="btn btn-error" @click="handleLogout">
          <IconLogout/>
          <span>Log out</span>
        </button>
      </div>
      <div v-else>
        <span class="loading loading-bars text-primary"></span>
      </div>
    </div>
  </div>
</template>

