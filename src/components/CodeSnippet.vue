<template>
  <div class="text-right mx-2 mt-0 pt-0" v-if="copyOption">
    <span
      @click="copySnippet()"
      class="cursor-pointer hover:text-green-500
      hover:border-green-500 text-sm border-b
      border-gray-800 dark:border-white dark:hover:border-green-500"
    >
      {{copyMessage}}
      <i class="fas fa-copy cursor-pointer bg"></i>
    </span>
  </div>
  <pre><code :class="type" id="code-snippet">{{content}}</code></pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import prism from 'prismjs';
import clipboard from 'clipboard-js';
import 'prismjs/components/prism-haml';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-shell-session';

interface Data {
  copyMessage: string;
}

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
    copyOption: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'language-haml',
    },
  },
  name: 'CodeSnippet',
  data(): Data {
    return {
      copyMessage: 'Copy',
    };
  },
  mounted() {
    prism.highlightAll();
  },
  watch: {
    async content() {
      await this.$nextTick();
      prism.highlightAll();
    },
  },
  methods: {
    async copySnippet() {
      clipboard.copy(this.content);

      this.copyMessage = 'Copied!';
      setTimeout(() => {
        this.copyMessage = 'Copy';
      }, 2000);
    },
  },
});
</script>
