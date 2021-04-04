<template>
  <Sidebar>
    <div class="px-4 py-4">
      <section id="installation" class="flex flex-col w-full text-left">
        <p>
          A lightweight Vue 3 component made with TypeScript, you can use it to
          create an animation that shows an automatic count and set any
          quantity as well the count duration, it can be used for counting up
          and down.
        </p>
        <h1 class="title">Installation</h1>
        <p>
          You can easily install it with NPM.
        </p>
        <pre><code class="language-sh-session">{{`
npm install vue3-autocounter
        `}}</code></pre>

      </section>

      <section id="usage" class="flex flex-col w-full text-left mt-4">
        <h1 class="title">Usage</h1>
        <p>
          You can easily install it with NPM.
        </p>
        <pre><code class="language-sh-session">{{`
npm install vue3-autocounter
        `}}</code></pre>

      </section>
    </div>
  </Sidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NProgress from 'nprogress';
import Sidebar from '@/components/Sidebar.vue';
import Prism from 'prismjs';

export default defineComponent({
  name: 'Docs',
  components: {
    Sidebar,
  },
  mounted() {
    Prism.highlightAll();
    NProgress.done();
  },
});
</script>
