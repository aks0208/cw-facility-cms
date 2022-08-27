<template>
  <div class="w-full h-screen">
    <Sidebar :sidebar-opened="sidebarOpen" />

    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
        <button type="button" @click="sidebarOpen = true" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <nuxt />
      </main>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/common/Sidebar";
import Bars3Icon from "../components/icons/Bars3Icon";
export default {
  components: {Bars3Icon, Sidebar},
  data() {
    return {
      sidebarOpen: false
    }
  }
}
</script>