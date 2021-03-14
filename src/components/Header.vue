<template>
  <header class="text-gray-100 bg-gray-900 body-font shadow w-full">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="link">About</a>
        <a class="link">Products</a>
        <a class="link">Investor</a>
      </nav>
      <a
        class="flex order-first
        lg:order-none lg:w-1/5
        title-font font-medium
        items-center lg:items-center
        lg:justify-center mb-4 md:mb-0"
      >
      <img src="https://pazly.dev/logo.png" style="height: 40px; margin-top: 10px; margin-bottom: 10px;" alt="logo">
      <span class="ml-3 text-xl">pazly.dev</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <a href="https://www.buymeacoffee.com/pazlydev" class="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
        Donate
      </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style lang="postcss">
.link {
  @apply mr-5 hover:text-gray-900 cursor-pointer
  border-b border-transparent hover:border-indigo-600;
}
</style>
