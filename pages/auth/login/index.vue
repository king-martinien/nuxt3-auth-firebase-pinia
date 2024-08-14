<script setup lang="ts">
import type {LoginCredentials} from "~/model/types/LoginCredentials";

definePageMeta({
  layout: 'auth-layout'
});

const isPasswordVisible = ref(false);
const authStore = useAuthStore();

const handleTogglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const handleSubmit = async (data: LoginCredentials) => {
  await authStore.login(data);
};
</script>

<template>
  <div class="max-w-sm w-[90%] px-4 lg:px-0">
    <h1 class="mb-1 text-3xl font-bold text-center">Welcome Back!</h1>
    <p class="mb-5 text-center">Enter your email and password to continue.</p>

    <FormKitMessages/>
    <FormKit type="form" :actions="false" @submit="handleSubmit"
             :config="{validationVisibility:'submit'}" #default="{state}" :incomplete-message="false">
      <FormKit type="email" id="email" name="email" placeholder="martinienfokoue@gmail.com"
               validation="required|email" prefix-icon="email"></FormKit>
      <FormKit :type="isPasswordVisible ? 'text':'password'" id="password" name="password"
               placeholder="Enter your password"
               validation="required" prefix-icon="password" :suffix-icon="isPasswordVisible ?'eye':'eyeClosed'"
               @suffix-icon-click="handleTogglePasswordVisibility"></FormKit>
      <p class="text-end mb-4 mt-3">
        <NuxtLink class="text-blue-500 text-sm font-semibold hover:underline hover:text-blue-600" to="forgot-password">
          Forgot password ?
        </NuxtLink>
      </p>
      <button class="btn btn-primary text-white w-full">
        <span v-if="!state.loading">Log in</span>
        <span v-else class="loading loading-bars"></span>
      </button>
      <p class="text-center mt-5">Don't you have an account ?
        <NuxtLink to="signup" class="text-blue-500 font-semibold hover:underline hover:text-blue-600">Signup</NuxtLink>
      </p>
    </FormKit>
  </div>
</template>