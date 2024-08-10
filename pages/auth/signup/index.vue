<script setup lang="ts">
import type {SignupCredentials} from "~/model/types/SignupCredentials";

definePageMeta({
  layout: 'auth-layout'
});

const isPasswordVisible = ref(false);
const authStore = useAuthStore();

const handleTogglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const handleSubmit = async (data: SignupCredentials) => {
  await authStore.signup(data);
};
</script>

<template>
  <div class="max-w-sm w-[90%] px-4 lg:px-0">
    <h1 class="mb-1 text-3xl font-bold text-center">Create an account</h1>
    <p class="mb-5 text-center">Welcome, create an account to get started.</p>

    <FormKitMessages/>
    <FormKit type="form" :actions="false" @submit="handleSubmit"
             :config="{validationVisibility:'submit'}" #default="{state}" :incomplete-message="false">
      <FormKit type="text" id="username" name="username" placeholder="Enter your username"
               validation="required|length:3,20" prefix-icon="user"></FormKit>
      <FormKit type="email" id="email" name="email" placeholder="Enter your email address"
               validation="required|email" prefix-icon="email"></FormKit>
      <FormKit :type="isPasswordVisible ? 'text':'password'" id="password" name="password"
               placeholder="Create a password" validation="required|length:8" prefix-icon="password"
               :suffix-icon="isPasswordVisible ?'eye':'eyeClosed'"
               @suffix-icon-click="handleTogglePasswordVisibility"></FormKit>

      <button class="btn btn-primary mt-3 text-white w-full">
        <span v-if="!state.loading">Get Started</span>
        <span v-else class="loading loading-bars"></span>
      </button>
      <p class="text-center mt-5">Already have an account ?
        <NuxtLink to="login" class="text-blue-500 font-semibold hover:underline hover:text-blue-600">Log in</NuxtLink>
      </p>
    </FormKit>
  </div>
</template>