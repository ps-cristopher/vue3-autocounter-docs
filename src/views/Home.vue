<template>
  <div class="home bg-white dark:bg-gray-800">
    <transition name="fade">
      <img v-if="true" alt="Vue logo" src="../assets/logo.png" width="500">
    </transition>
    <transition name="fade">
      <div class="hello">
        <h1>Welcome gdfgdfgdfg</h1>
        <p>
          For a guide and recipes on how to configure / customize this project,<br>
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
      </div>
    </transition>
    <transition name="fade">
      <h1>
        <Autocounter
          ref="counter"
          :startAmount="500"
          :endAmount="10000"
          :duration="10000"
          :autoinit="false"
        />
      </h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Autocounter from 'vue3-autocounter'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Autocounter,
  },
  mounted() {
    this.$refs.counter.start();
  },
});
</script>
