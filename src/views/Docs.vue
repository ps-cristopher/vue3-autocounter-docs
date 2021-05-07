<template>
  <Sidebar>
    <div class="py-4 w-full px-8 md:w-3/4 lg:w-10/12 2xl:w-10/12 mx-auto">
      <section id="installation" class="flex flex-col w-full text-left">
        <p>
          A lightweight Vue 3 component made with TypeScript, you can use it to
          create an animation that shows an automatic count for any quantity with
          a specified duration, it can be used for counting up and down.
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
        class="flex flex-col w-full text-left mt-8
        overflow-x-auto sm:overflow-x-hidden overflow-y-hidden"
      >
        <h1 class="title">Properties</h1>
        <table class="table mt-4">
          <thead>
            <th class="th rounded-tl-md">
              Name
            </th>
            <th class="th">
              Type
            </th>
            <th class="th rounded-r-md lg:rounded-r-none">
              Default
            </th>
            <th class="th hidden rounded-tr-md lg:block">
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
                The counting start amount can be an integer or decimal number.
                If you need to count down just set the bigger amount to this property.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> The counting start amount can be
                an integer or decimal number. If you need to count down just set
                the bigger amount to this property.
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
                The counting end amount can be an integer or decimal number.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> The counting end amount can be
                an integer or decimal number.
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
                This the counting duration in seconds,
                it must be an integer or decimal positive.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> This the counting duration in seconds,
                it must be an integer or decimal positive.
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
                A boolean to define if the counting should be auto-inited
                when the component is mounted. Set <code>true</code> if you want to auto-init
                the counting.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> A boolean to define if the counting should
                be auto-inited when the component is mounted. Set <code>true</code>
                if you want to auto-init the counting.
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
                Define a prefix to be shown with the counting animation.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> Define a prefix to be shown
                with the counting animation.
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
                Define a suffix to be shown
                with the counting animation.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> Define a suffix to be shown
                with the counting animation.
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
                Define a thousand separator for the counting amount.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> Define a thousand separator for the counting amount.
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
                Define a decimal separator for the counting amount.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> Define a decimal separator for the counting amount.
              </td>
            </tr>
            <tr class="border-b-2 border-r-2 border-green-600">
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
                Define the number of decimals to be shown with the counting amount.
              </td>
            </tr>
            <tr>
              <td class="td lg:hidden text-justify" colspan="3">
                <strong>Description:</strong> Define the number of decimals to
                be shown with the counting amount.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        id="events"
        class="flex flex-col w-full text-left mt-8
        overflow-x-auto sm:overflow-x-hidden overflow-y-hidden"
      >
        <h1 class="title">Events</h1>
        <table class="table mt-4">
          <thead>
            <th class="th rounded-tl-md">
              Name
            </th>
            <th class="th rounded-tr-md">
              Description
            </th>
          </thead>
          <tbody class=" border-b-2 border-r-2 border-green-600">
            <tr>
              <td class="td">
                <code>@finished</code>
              </td>
              <td class="td">
                This event is emitted when the counting finishes.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        id="methods"
        class="flex flex-col w-full text-left mt-8
        overflow-x-auto sm:overflow-x-hidden overflow-y-hidden"
      >
        <h1 class="title">Methods</h1>
        <p>
          If you want to access the component methods you can use a ref
          property in the <code>vue3-autocounter</code> tag, just
          reference the component and execute its methods when you need it.
        </p>

      <code-snippet :content="`
<template>
  ${vueTag}
  <button @click='start()'>Start counting</button>
</template>
        `"></code-snippet>

<code-snippet type="language-js" :content="`
...
methods: {
  start() {
    this.$refs.counter.start();
  }
},
...
        `"></code-snippet>

        <p>
          This are the methods you can use.
        </p>

        <table class="table mt-4">
          <thead>
            <th class="th rounded-tl-md">
              Name
            </th>
            <th class="th rounded-tr-md">
              Description
            </th>
          </thead>
          <tbody class=" border-b-2 border-r-2 border-green-600">
            <tr>
              <td class="td">
                <code>start()</code>
              </td>
              <td class="td">
                Start the counting. If the <code>autoinit</code> property
                is setting <code>true</code> you don't need to call this
                method to init the counting.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>pause()</code>
              </td>
              <td class="td">
                You can pause the counting by calling this method.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>resume()</code>
              </td>
              <td class="td">
                If you pause the counting, you can resume it by calling this method.
              </td>
            </tr>
            <tr>
              <td class="td">
                <code>reset()</code>
              </td>
              <td class="td">
                Reset the counting calling this method, you can calling
                whenever you need it during the animation or after it.
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
