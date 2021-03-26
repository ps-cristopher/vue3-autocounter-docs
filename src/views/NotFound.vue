<template>
  <div class="container mx-auto px-3">
    <h1 class="font-extrabold text-xl text-center text-8xl mt-10">
      <i class="fas fa-exclamation-triangle"></i> 404 Not Found
    </h1>
    <p class="font-medium text-2xl my-4">
      Page not found.
    </p>
    <a class="link text-2xl" href="/">
      <i class="fas fa-home"></i> Go to home
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
