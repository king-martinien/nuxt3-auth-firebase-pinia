<template>
  <div class="min-h-screen lg:h-screen flex flex-col">
    <div class="flex items-center justify-center flex-1">
      <slot></slot>
    </div>
    <div class="border-t border-zinc-200 py-6 lg:py-8">
      <div class="container flex flex-col-reverse lg:flex-row gap-3 items-center justify-between">
        <div>&copy; 2024 - Coded by <a href="https://www.github.com/king-martinien" target="_blank"
                                       class="font-bold hover:text-blue-500 text-blue-600">King Martinien</a> 🇨🇲
        </div>
        <div class="flex items-center gap-4">
          Follow me on
          <div class="flex items-center gap-3">
            <a href="https://www.github.com/king-martinien" target="_blank">
              <IconGithub/>
            </a>
            <a href="" target="_blank">
              <IconXTwitter/>
            </a>
            <a href="" target="_blank">
              <IconLinkedIn/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>