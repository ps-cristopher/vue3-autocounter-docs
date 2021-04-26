<template>
  <div class="container mx-auto px-3">
    <h1 class="font-extrabold text-center text-6xl mt-10">
      <i class="fas fa-exclamation-triangle"></i> 404 Not Found
    </h1>
    <p class="font-medium text-2xl my-4">
      Page not found.
    </p>
    <a class="link text-2xl ml-4" href="/">
      <i class="fas fa-home"></i> Home
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NProgress from 'nprogress';

export default defineComponent({
  name: 'NotFound',
  mounted() {
    NProgress.done();
  },
});
</script>
