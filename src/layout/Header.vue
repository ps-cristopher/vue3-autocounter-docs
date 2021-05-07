<template>
  <header
    class="text-gray-100 bg-gray-900 body-font shadow w-full
    z-40 fixed top-0 md:static md:top-auto text-sm md:text-base"
  >
    <div class="flex w-full px-4 py-2 items-center">
      <nav class="flex w-2/5 items-center justify-start text-base md:ml-auto">
        <a
          class="mr-2"
          href="/"
        >
          <img
            src="../assets/favicon.png"
            alt="logo"
            width="80"
            loading="lazy"
          />
        </a>
        <a class="link hidden text-md md:inline-flex" href="https://twitter.com/ps_cristopher" rel="noopener noreferrer" target="_blank">
          @ps_cristopher <i class="fab fa-twitter ml-2"></i>
        </a>
      </nav>
      <div class="flex w-3/5 justify-end items-center ml-6 lg:ml-0">
        <a
          class="bg-transparent hover:bg-gray-900 text-white ml-3 py-2
          px-3 rounded-lg cursor-pointer"
          @click="toggleDarkMode()"
        >
          <i class="fas fa-moon text-yellow-200" v-if="isDarkMode"></i>
          <i class="fas fa-sun text-yellow-300" v-else></i>
        </a>
        <a
          href="https://www.creadores.fans/ps_cristopher"
          class="bg-pink-700 hover:bg-pink-900 text-white ml-3 py-2 px-3 rounded-lg"
          target="_blank" rel="noopener noreferrer"
        >
          <i class="fas fa-heart"></i> Support
        </a>
        <a
          class="bg-blue-500 hover:bg-blue-900 text-white ml-3 py-2 px-3 rounded-lg cursor-pointer"
          @click="share()"
        >
          <i class="fab fa-twitter"></i> Share
        </a>
      </div>
    </div>
    <nav class="flex px-2 pb-5 pt-1 w-full justify-end text-sm md:text-base">
      <!-- Hamburguer buttom-->
      <div class="w-1/3 text-left pl-10" v-show="currentRoute.name == 'Docs'">
        <i
          class="fas fa-bars text-xl cursor-pointer md:hidden"
          @click="toggleSideBar()"
        />
      </div>
      <div class="w-2/3 text-right">
        <router-link to="/" :class="isSameOfCurrentRoute('Demo') ? 'link-active' : 'link'">
          <i class="fas fa-laptop"></i> Demo
        </router-link>
        <router-link to="/docs#installation"
        :class="isSameOfCurrentRoute('Docs') ? 'link-active' : 'link'">
          <i class="fas fa-book"></i> Docs
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NProgress from 'nprogress';

export default defineComponent({
  name: 'Header',
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
    currentRoute() {
      return this.$router.currentRoute.value;
    },
  },
  methods: {
    share(): void {
      window.open('https://twitter.com/intent/tweet?text=📣 Check out this Vue 3 component to quickly create an animation that'
      + ' shows an automatic count for any quantity with a specified duration, it can be used for counting up and down.'
      + '&size=large'
      + '&url=https://vue3-autocounter.cristopherps.com'
      + '&hashtags=vue3,webcomponent,ModoFuego🔥'
      + '&via=ps_cristopher', '_blank', 'width=500,height=300,scrollbars=NO,location=NO,titlebar=NO');
    },
    isSameOfCurrentRoute(routeName: string): boolean {
      return this.currentRoute.name === routeName;
    },
    toggleDarkMode(): void {
      NProgress.start();
      NProgress.set(0.8);
      this.$store.dispatch('setDarkMode', !this.isDarkMode);
      // window.location.reload();
      NProgress.done();
    },
    toggleSideBar(): void {
      this.$store.dispatch('toggleSideBar');
    },
  },
});
</script>
