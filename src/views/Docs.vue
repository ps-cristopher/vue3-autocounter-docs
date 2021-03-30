<template>
  <Sidebar>
    <div class="flex flex-col w-full text-left px-4 py-4">
      <p class="my-4">
        A lightweight Vue 3 component made with TypeScript, you can use it to
        create an animation that shows an automatic count, you can set any
        quantity as well the count duration, it can be used for counting up
        and down.
      </p>
      <h1 class="title">Installation</h1>
      <pre class="code my-2">
        <code>
          npm install vue3-autocounter
        </code>
      </pre>
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

<style lang="postcss">
.title {
  @apply
  text-4xl font-bold
  pl-2 pb-2
  border-b-4 border-green-500;
}

.code {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
}
</style>
