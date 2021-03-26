<template>
  <Sidebar>
    <div class="flex flex-col w-full">
      <h1>This is an about pagedgdfgdfgdfgdfgdfgdfgdf</h1>
    </div>
  </Sidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NProgress from 'nprogress';
import Sidebar from '@/components/Sidebar.vue';

export default defineComponent({
  name: 'Docs',
  components: {
    Sidebar,
  },
  mounted() {
    NProgress.done();
  },
});
</script>
