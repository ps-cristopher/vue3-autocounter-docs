<template>
  <Header></Header>
  <main class="main dark:text-white">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-haml';
import 'prismjs/components/prism-shell-session';

console.log(Prism);

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  mounted() {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode === 'true') {
      this.$store.dispatch('setDarkMode', isDarkMode);
    }
  },
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  min-height: 85vh;
}

.link {
  @apply font-bold mr-5 hover:text-green-300 cursor-pointer
  border-b border-transparent hover:border-green-500;
}

.link-active {
  @apply font-bold mr-5 cursor-pointer text-green-500 border-green-500
  border-b border-transparent;
}

/* TRANSITIONS */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.input-form {
  @apply border border-gray-300 p-2 my-2 rounded-md
  focus:outline-none focus:ring-2 ring-blue-200 text-gray-900;
}

.title {
  @apply
  text-4xl font-bold
  pl-2 pb-2
  border-b-4 border-green-500;
}

pre {
  @apply
  bg-gray-800 pb-0 pt-0 !important;
}

p {
  @apply
  my-4;
}

</style>
