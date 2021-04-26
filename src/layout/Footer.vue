<template>
  <footer>
    <div class="flex items-center justify-center text-gray-100
    bg-gray-900 body-font shadow w-full pt-2">
      Made with ❤️ by
      <a href="https://links.cristopherps.com" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/logoCPS.png" alt="Logo Cristopher PS"
      style="width: 7rem;" class="ml-2"></a>
    </div>
    <div class="flex items-center justify-center text-gray-100
    bg-gray-900 body-font shadow w-full pb-2 mt-0 pt-2">
      <a class="link" href="https://github.com/ps-cristopher/vue3-autocounter" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> View on Github
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>
