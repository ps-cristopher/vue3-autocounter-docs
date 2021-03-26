<template>
  <div class="container mx-auto px-2">
    <div class="text-center mt-4 mb-4 w-full pl-6 pr-6 mr-2 ml-2">
      <img v-if="true" alt="Vue AutoCounter Logo"
      src="../assets/logo.png"
      style="width: 80%;margin-right:10%;margin-left:10%;">
    </div>
    <div class="text-center mt-10 mb-10">
      <p class="text-xl mb-2">
        A lightweight Vue 3 component made with TypeScript to quickly create an animation that
        shows an automatic count of any quantity in any duration, counting up or down.
      </p>
      <a class="link text-xl" href="https://github.com/ps-cristopher/vue3-autocounter" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> View on Github.
      </a>
    </div>
    <div class="text-center mt-10 mb-12">
      <button
        class="w-80 bg-gray-500 hover:bg-green-500 text-white py-4
        px-4 text-xl rounded-lg cursor-pointer"
        @click="$router.push('/docs')"
      >
        <i class="fas fa-book"></i> Docs
      </button>
    </div>
    <p class="animate-bounce mt-10 mb-5 font-bold text-xl text-center">
      Try it <i class="fas fa-arrow-down"></i>
    </p>
    <p class="font-medium text-8xl">
      <Autocounter
        ref="counter"
        :startAmount="Number(startAmount)"
        :endAmount="Number(endAmount)"
        :duration="Number(duration)"
        :prefix="prefix"
        :suffix="suffix"
        :separator="separator"
        :decimalSeparator="decimalSeparator"
        :decimals="Number(decimals)"
        :autoinit="autoinit"
        @finished="onCountFinished()"
      />
    </p>
    <div class="grid grid-cols-2 mb-10 mt-10">
      <div class="text-center">
        <label for="autoinit">
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-green-500"
            checked
            name="autoinit"
            v-model="autoinit"
          >
          <span class="ml-2 text-gray-900 dark:text-white cursor-pointer"
          @click="autoinit = !autoinit">
            Autoinit
          </span>
        </label>
      </div>

      <div class="text-center">
        <label for="showAlert">
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-green-500"
            checked
            name="showAlert"
            v-model="showAlert"
          >
          <span class="ml-2 text-gray-900 dark:text-white cursor-pointer"
          @click="showAlert = !showAlert">
            Alert on finish
          </span>
        </label>
      </div>
    </div>
    <div class="text-center mt-10 mb-10">
      <button
        class="w-1/5 mr-2 bg-gray-500 hover:bg-green-500 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="start()"
      >
        <i class="fas fa-play"></i>
        Start
      </button>
      <button
        class="w-1/5 mr-2 bg-gray-500 hover:bg-green-500 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="pause()"
      >
        <i class="fas fa-pause"></i>
        Pause
      </button>
      <button
        class="w-1/5 mr-2 bg-gray-500 hover:bg-green-500 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="resume()"
      >
        <i class="fas fa-play"></i>
        Resume
      </button>
      <button
        class="w-1/5 bg-gray-500 hover:bg-green-500 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="reset()"
      >
        <i class="fas fa-undo"></i>
        Reset
      </button>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 mb-10 space-y-4">
      <div class="text-center my-4">
        <label class="text-left" for="startAmount">
          Start Amount:
        </label>
        <br>
        <input
          type="number"
          placeholder="e.g. -> 0"
          class="input-form w-4/5"
          id="startAmount"
          name="startAmount"
          v-model="startAmount"
        />
      </div>
      <div class="text-center">
        <label for="endAmount">
          End Amount:
        </label>
        <br>
        <input
          type="number"
          placeholder="e.g. -> 1000"
          class="input-form w-4/5"
          id="endAmount"
          name="endAmount"
          v-model="endAmount"
        />
      </div>
      <div class="text-center">
        <label for="duration">
          Duration (seconds):
        </label>
        <br>
        <input
          type="number"
          placeholder="e.g. -> 3"
          class="input-form  w-4/5"
          id="duration"
          name="duration"
          v-model="duration"
        />
      </div>
      <div class="text-center">
        <label for="prefix">
          Prefix:
        </label>
        <br>
        <input
          type="text"
          placeholder="e.g. -> $"
          class="input-form w-4/5"
          id="prefix"
          name="prefix"
          v-model="prefix"
        />
      </div>
      <div class="text-center my-4">
        <label for="suffix">
          Suffix:
        </label>
        <br>
        <input
          type="text"
          placeholder="e.g. -> USD"
          class="input-form w-4/5"
          id="suffix"
          name="suffix"
          v-model="suffix"
        />
      </div>
      <div class="text-center">
        <label for="separator">
          Separator:
        </label>
        <br>
        <input
          type="text"
          placeholder="e.g. -> ,"
          class="input-form w-4/5"
          id="separator"
          name="separator"
          v-model="separator"
        />
      </div>
      <div class="text-center">
        <label for="decimalSeparator">
          Decimal Separator:
        </label>
        <br>
        <input
          type="text"
          placeholder="e.g. -> ."
          class="input-form w-4/5"
          id="decimalSeparator"
          name="decimalSeparator"
          v-model="decimalSeparator"
        />
      </div>
      <div class="text-center">
        <label for="decimals">
          Decimals:
        </label>
        <br>
        <input
          type="number"
          placeholder="e.g. -> 2"
          class="input-form w-4/5"
          id="decimals"
          name="decimals"
          v-model="decimals"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Autocounter from 'vue3-autocounter';
import NProgress from 'nprogress';

interface Data {
  startAmount: number;
  endAmount: number;
  duration: number;
  prefix: string;
  suffix: string;
  separator: string;
  decimalSeparator: string;
  decimals: number;
  autoinit: boolean;
  showAlert: boolean;
}

export default defineComponent({
  name: 'Demo',
  components: {
    Autocounter,
  },
  data(): Data {
    return {
      startAmount: 0,
      endAmount: 2021,
      duration: 3,
      prefix: '',
      suffix: '',
      separator: '',
      decimalSeparator: '',
      decimals: 0,
      autoinit: false,
      showAlert: false,
    };
  },
  mounted() {
    NProgress.done();
    this.$refs.counter.start();
  },
  methods: {
    pause(): void {
      this.$refs.counter.pause();
    },
    resume(): void {
      this.$refs.counter.resume();
    },
    reset(): void {
      this.$refs.counter.reset();
    },
    start(): void {
      this.$refs.counter.start();
    },
    onCountFinished(): void {
      // eslint-disable-next-line no-alert
      if (this.showAlert) alert('Counting Finished');
    },
  },
});
</script>
