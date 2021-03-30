<template>
  <div class="min-h-screen flex flex-row bg-white dark:bg-gray-900
  h-full border-t-2 border-b-2 border-green-400 border-opacity-10">
  <div class="hidden md:flex flex-col w-56 border-r border-green-400 border-opacity-10
  dark:bg-gray-900 overflow-hidden">
    <!-- <div class="flex items-center justify-center h-20 shadow-md">
      <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
    </div> -->
    <ul class="flex flex-col py-4">
      <li>
        <a href="#" class="sidebar-link">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-home"></i></span>
          <span class="text-lg font-medium">Installation</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebar-link">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-music"></i></span>
          <span class="text-lg font-medium">Usage</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebar-link">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-drink"></i></span>
          <span class="text-lg font-medium">Properties</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebar-link">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg
          text-gray-400"><i class="bx bx-shopping-bag"></i></span>
          <span class="text-lg font-medium">Events</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebar-link">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-chat"></i></span>
          <span class="text-lg font-medium">Methods</span>
        </a>
      </li>
    </ul>
  </div>
  <slot/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
});
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply
  flex flex-row items-center
  h-10 text-xl transform hover:translate-x-2
  transition-transform ease-in duration-200
  text-gray-900 hover:text-green-500
  dark:text-white dark:hover:text-green-500;
}

.link-active {
  @apply
  translate-x-2 text-green-500
  border-b-0 border-l-4
  bg-opacity-25 bg-green-400
  dark:text-green-500;
}
</style>
