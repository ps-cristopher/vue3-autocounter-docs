<template>
  <Sidebar>
    <div class="py-4 w-full px-8 md:w-5/6 2xl:w-10/12">
      <section id="installation" class="flex flex-col w-full text-left">
        <p>
          A lightweight Vue 3 component made with TypeScript, you can use it to
          create an animation that shows an automatic count for any
          quantity as well count duration, it can be used for counting up
          and down.
        </p>
        <h1 class="title">Installation</h1>
        <p>
          You can install it easily with NPM.
        </p>
        <code-snippet type="language-sh-session" content="
npm install vue3-autocounter
        "></code-snippet>
      </section>

      <section id="usage" class="flex flex-col w-full text-left mt-4">
        <h1 class="title">Usage</h1>
        <p>
          Add the <code>vue3-autocounter</code> to your main.js for a global import:
        </p>

                <code-snippet type="language-js" content="
import { createApp } from 'vue';
import Vue3Autocounter from 'vue3-autocounter';
import App from './App.vue';

createApp(App)
.component('vue3-autocounter', Vue3Autocounter)
.mount('#app');
        "></code-snippet>

        <p>
          If you prefer yo can import it directly in your Single File Component:
        </p>

        <code-snippet type="language-js" content="
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
  name: 'Demo',
  components: {
    'vue3-autocounter': Vue3autocounter
  }
});
        "></code-snippet>

        <p>
          Finally you can use it on your template:
        </p>

      <code-snippet :content="`
<template>
  ${vueTag}
</template>
        `"></code-snippet>
      </section>

      <section
        id="properties"
        class="flex flex-col w-full text-left mt-4
        overflow-x-auto sm:overflow-x-hidden overflow-y-hidden"
      >
        <h1 class="title">Properties</h1>
        <table class="table mt-4">
          <thead>
            <th class="th rounded-tl-lg">
              Name
            </th>
            <th class="th">
              Type
            </th>
            <th class="th rounded-r-lg lg:rounded-r-none">
              Default
            </th>
            <th class="th hidden rounded-tr-lg lg:block">
              Description
            </th>
          </thead>
          <tbody class=" border-b-2 border-r-2 border-green-600">
            <tr>
              <td class="td">
                <code>startAmount</code>
              </td>
              <td class="td">
                <code>Number</code>
              </td>
              <td class="td text-center">
                <code>0</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Velit, error? Quaerat pariatur magni similique velit
                temporibus. Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>endAmount</code>
              </td>
              <td class="td">
                <code>Number</code>
              </td>
              <td class="td text-center">
                <code>0</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>duration</code>
              </td>
              <td class="td">
                <code>Number</code>
              </td>
              <td class="td text-center">
                <code>3</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>autoinit</code>
              </td>
              <td class="td">
                <code>Boolean</code>
              </td>
              <td class="td text-center">
                <code>true</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>prefix</code>
              </td>
              <td class="td">
                <code>String</code>
              </td>
              <td class="td text-center">
                <code>''</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>suffix</code>
              </td>
              <td class="td">
                <code>String</code>
              </td>
              <td class="td text-center">
                <code>''</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>separator</code>
              </td>
              <td class="td">
                <code>String</code>
              </td>
              <td class="td text-center">
                <code>','</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>decimalSeparator</code>
              </td>
              <td class="td">
                <code>String</code>
              </td>
              <td class="td text-center">
                <code>'.'</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
            <tr>
              <td class="td border-b">
                <code>decimals</code>
              </td>
              <td class="td border-b-8">
                <code>Number</code>
              </td>
              <td class="td text-center">
                <code>0</code>
              </td>
              <td class="td hidden lg:table-cell text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
                Velit, error? Quaerat pariatur magni similique velit temporibus.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        id="events"
        class="flex flex-col w-full text-left mt-4
        overflow-x-auto sm:overflow-x-hidden overflow-y-hidden"
      >
        <h1 class="title">Events</h1>
        <table class="table mt-4">
          <thead>
            <th class="th rounded-tl-lg">
              Name
            </th>
            <th class="th hidden rounded-tr-lg lg:block">
              Description
            </th>
          </thead>
          <tbody class=" border-b-2 border-r-2 border-green-600">
            <tr>
              <td class="td">
                <code>startAmount</code>
              </td>
              <td class="td">
                <code>Number</code>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </Sidebar>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import { defineComponent } from 'vue';
import NProgress from 'nprogress';
import Sidebar from '@/layout/Sidebar.vue';

export default defineComponent({
  name: 'Docs',
  components: {
    Sidebar,
  },
  mounted() {
    NProgress.done();
  },
  data() {
    return {
      vueTag: "<vue3-autocounter ref='counter' :startAmount='0' :endAmount='2021' :duration='3' prefix='$' suffix='USD' separator=',' decimalSeparator='.' :decimals='2' :autoinit='true' @finished='alert(`Counting finished!`)'/>",
    };
  },
});
</script>

<style lang="postcss" scoped>
.table {
  @apply
  border-collapse
}

.th {
  @apply
   text-white
    py-4 px-8 text-center bg-gray-800
}

.td {
  @apply
  border border-green-600
  py-2 px-8
}
</style>
