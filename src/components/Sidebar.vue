<template>
  <div class="min-h-screen flex flex-row bg-white dark:bg-gray-900
  h-full border-t-2 border-b-2">
  <div class="hidden sm:flex flex-col w-56 bg-white border-r-2
  dark:bg-gray-900 overflow-hidden">
    <!-- <div class="flex items-center justify-center h-20 shadow-md">
      <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
    </div> -->
    <ul class="flex flex-col py-4">
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Installantion</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">Music</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-drink"></i></span>
          <span class="text-sm font-medium">Drink</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2
        transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg
          text-gray-400"><i class="bx bx-shopping-bag"></i></span>
          <span class="text-sm font-medium">Shopping</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-chat"></i></span>
          <span class="text-sm font-medium">Chat</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12
          text-lg text-gray-400"><i class="bx bx-user"></i></span>
          <span class="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12
          w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
          <span class="text-sm font-medium">Notifications</span>
          <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3
          py-px text-red-500">5</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform
        hover:translate-x-2 transition-transform ease-in duration-200
        text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center
          h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
          <span class="text-sm font-medium">Logout</span>
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
