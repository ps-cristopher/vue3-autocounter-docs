<template>
  <div class="main px-1">
    <transition name="fade">
      <div
        v-if="isShowingAlert"
        class="motion-safe:animate-spin bg-green-500 border
        border-green-400 text-green-900 px-4 py-3 mt-2 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Yeah! </strong>
        <span class="block sm:inline">Count finished.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="isShowingAlert = false">
          <svg class="fill-current h-6 w-6 text-green-900" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </transition>
    <div class="grid text-center my-4 mx-auto w-full justify-items-center">
      <img loading="lazy" v-if="true" alt="Vue3 AutoCounter Logo"
      src="../assets/logo.png" width="1000">
    </div>
    <div class="text-center mt-10 mb-10 grid justify-items-center">
      <p class="text-xl mb-2 lg:w-1/2">
        A lightweight Vue 3 component made with TypeScript, you can use it to create an animation
        that shows an automatic count for any quantity with a specified duration,
        it can be used for counting up and down.
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
      <vue3-autocounter
        ref="counter"
        :startAmount="startAmount"
        :endAmount="endAmount"
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
    <div class="mt-10 mb-5 grid grid-cols-2 sm:grid-cols-4 justify-items-center">
      <button
        class="w-3/4 mr-2 bg-gray-500 hover:bg-green-500 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="start()"
      >
        <i class="fas fa-play"></i>
        Start
      </button>
      <button
        class="w-3/4 mr-2 bg-gray-500 hover:bg-green-500 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="pause()"
      >
        <i class="fas fa-pause"></i>
        Pause
      </button>
      <button
        class="w-3/4 mr-2 bg-gray-500 hover:bg-green-500 sm:mt-0 mt-2 text-white py-2
        px-2 text-md rounded-lg cursor-pointer"
        @click="resume()"
      >
        <i class="fas fa-play"></i>
        Resume
      </button>
      <button
        class="w-3/4 bg-gray-500 hover:bg-green-500 sm:mt-0 mt-2 text-white py-2
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

    <div class="mx-6 text-left">
      <code-snippet :content="vue3Tag"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
  isShowingAlert: boolean;
}

export default defineComponent({
  name: 'Demo',
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
      isShowingAlert: false,
    };
  },
  mounted() {
    NProgress.done();
    this.$refs.counter.start();
  },
  computed: {
    vue3Tag() {
      return `
<vue3-autocounter ref="counter" :startAmount="${this.startAmount}" :endAmount="${this.endAmount}" :duration="${this.duration}" prefix="${this.prefix}" suffix="${this.suffix}" separator="${this.separator}" decimalSeparator="${this.decimalSeparator}" :decimals="${this.decimals}" :autoinit="${this.autoinit}" ${this.showAlert ? '@finished="alert(`Counting finished!`)"' : ''}/>
      `;
    },
  },
  watch: {
    startAmount() {
      if (!this.startAmount) this.startAmount = 0;
      this.startAmount = Number(this.startAmount);
    },
    endAmount() {
      if (!this.endAmount) this.endAmount = 0;
      this.endAmount = Number(this.endAmount);
    },
    duration() {
      if (this.duration < 0) this.duration = 0;
      this.duration = Number(this.duration);
    },
    decimals() {
      if (this.decimals < 0) this.decimals = 0;
      this.decimals = parseInt(this.decimals, 10);
    },
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
      this.isShowingAlert = false;
      this.$refs.counter.start();
    },
    onCountFinished(): void {
      if (this.showAlert) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.isShowingAlert = true;
      }
    },
  },
});
</script>
