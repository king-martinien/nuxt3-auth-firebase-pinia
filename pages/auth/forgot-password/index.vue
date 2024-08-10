<script setup lang="ts">
definePageMeta({
  layout: 'auth-layout'
});

const handleSubmit = async (data: { email: string }) => {
  console.log(data.email);
};
</script>

<template>
  <div class="max-w-sm w-[90%] px-4 lg:px-0">
    <h1 class="mb-1 text-3xl font-bold text-center">Reset password</h1>
    <p class="mb-5 text-center">Enter the email associated with your account and we'll send you instructions to
      reset your password.</p>

    <FormKitMessages/>
    <FormKit type="form" :actions="false" @submit="handleSubmit"
             :config="{validationVisibility:'submit'}" #default="{state}" :incomplete-message="false">
      <FormKit type="email" id="email" name="email" placeholder="Enter your email address"
               validation="required|email" prefix-icon="email"></FormKit>
      <button class="btn btn-primary text-white w-full">
        <span v-if="!state.loading">Send instructions</span>
        <span v-else class="loading loading-bars"></span>
      </button>
      <p class="text-center">
        <NuxtLink to="login" class="inline-flex gap-1 mt-6 text-primary text-center">
          <span>Back to login</span>
          <IconLink class="w-5 h-5"/>
        </NuxtLink>
      </p>
    </FormKit>
  </div>
</template>