/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from 'vue';
import Vue3Autocounter from 'vue3-autocounter';
import App from './App.vue';
import router from './router';
import store from './store';
import CodeSnippet from './components/CodeSnippet.vue';

createApp(App)
  .use(store)
  .use(router)
  .component('code-snippet', CodeSnippet)
  .component('vue3-autocounter', Vue3Autocounter)
  .mount('#app');
