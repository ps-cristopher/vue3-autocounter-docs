<template>
  <div class="main">
    <aside
      class="aside w-1/2 md:w-1/4 lg:w-2/12 2xl:w-52" :class="isShowingSideBar ? 'fixed' : 'hidden'"
    >
      <div class="md:hidden flex justify-end mt-4 pr-4">
        <i
          class="fas fa-times text-right cursor-pointer text-xl
          transition delay-150 duration-300 ease-in-out"
          @click="onLinkClick()"
        />
      </div>
      <ul class="flex flex-col py-4">
        <li>
          <a
            href="/docs#installation"
            :class="routeHash == '#installation' ? 'sidebar-link link-active' : 'sidebar-link'"
            @click="onLinkClick()"
          >
            <span class="inline-flex items-center justify-center h-12 w-12
            text-lg text-gray-400"><i class="bx bx-home"></i></span>
            <span class="text-lg font-medium">Installation</span>
          </a>
        </li>
        <li>
          <a
            href="/docs#usage"
            :class="routeHash == '#usage' ? 'sidebar-link link-active' : 'sidebar-link'"
            @click="onLinkClick()"
          >
            <span class="inline-flex items-center justify-center h-12 w-12
            text-lg text-gray-400"><i class="bx bx-music"></i></span>
            <span class="text-lg font-medium">Usage</span>
          </a>
        </li>
        <li>
          <a
            href="/docs#properties"
            :class="routeHash == '#properties' ? 'sidebar-link link-active' : 'sidebar-link'"
            @click="onLinkClick()"
          >
            <span class="inline-flex items-center justify-center h-12 w-12
            text-lg text-gray-400"><i class="bx bx-drink"></i></span>
            <span class="text-lg font-medium">Properties</span>
          </a>
        </li>
        <li>
          <a
            href="/docs#events"
            :class="routeHash == '#events' ? 'sidebar-link link-active' : 'sidebar-link'"
            @click="onLinkClick()"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg
            text-gray-400"><i class="bx bx-shopping-bag"></i></span>
            <span class="text-lg font-medium">Events</span>
          </a>
        </li>
        <li>
          <a
            href="/docs#methods"
            :class="routeHash == '#methods' ? 'sidebar-link link-active' : 'sidebar-link'"
            @click="onLinkClick()"
          >
            <span class="inline-flex items-center justify-center h-12 w-12
            text-lg text-gray-400"><i class="bx bx-chat"></i></span>
            <span class="text-lg font-medium">Methods</span>
          </a>
        </li>
      </ul>
    </aside>
    <div
      @click="onLinkClick()"
      class=" bg-gray-900 bg-opacity-80 h-full w-full fixed top-0 z-40 md:hidden"
      :class="isShowingSideBar ? 'fixed' : 'hidden'"
    />
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NProgress from 'nprogress';

export default defineComponent({
  name: 'Sidebar',
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value;
    },
    routeHash() {
      return this.currentRoute.hash ? this.currentRoute.hash : null;
    },
    isShowingSideBar() {
      return this.$store.state.isShowingSideBar;
    },
  },
  methods: {
    onLinkClick() {
      NProgress.done();
      if (this.isShowingSideBar) this.$store.dispatch('toggleSideBar');
    },
  },
});
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply
  flex flex-row items-center
  h-10 text-xl transform hover:translate-x-2
  transition-transform ease-in duration-200
  text-gray-900 hover:text-green-500
  dark:text-white dark:hover:text-green-500;
}

.link-active {
  @apply
  translate-x-2 text-green-500
  border-b-0 border-l-4
  bg-opacity-25 bg-green-400
  dark:text-green-500;
}

.main {
  @apply
  min-h-screen flex flex-row border-gray-400
  h-full border-t-2 border-b-2 dark:border-green-400
  dark:border-opacity-10;
}

.aside {
  @apply
  z-50 h-screen md:h-auto bg-white md:flex flex-col border-r border-gray-400
  dark:border-green-400 dark:border-opacity-10
  dark:bg-gray-900 overflow-hidden
  md:static top-0;
}
</style>
