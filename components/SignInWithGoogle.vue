<script setup lang="ts">
const handleLoginWithGoogle = async () => {
  await useAuthStore().loginWithGoogle();
};
</script>

<template>
  <div class="flex items-center gap-3">
    <hr class="flex-1 text-zinc-300">
    or
    <hr class="flex-1 text-zinc-300">
  </div>
  <div class="mt-5">
    <button @click="handleLoginWithGoogle" type="button"
            class="btn btn-block btn-outline hover:bg-transparent hover:text-black border-zinc-400">
      <IconGoogle/>
      <span>Sign in with Google</span>
    </button>
  </div>
</template>