<template>
  <div>
    <div class="relative z-40 md:hidden" >
      <transition  as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <div v-show="sidebarOpened"  class="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </transition>

      <div  class="fixed inset-0 flex z-40">
        <transition as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div v-show="sidebarOpened" class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <transition as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div @click="sidebarOpened = false" class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpened = false">
                  <span class="sr-only">Close sidebar</span>
                  <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </transition>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
                <p class="font-semibold text-cyan-600 ml-4">CarWash Facility</p>
              </div>
              <nav class="mt-5 px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                  <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <ProfileItem />
            </div>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14"></div>
      </div>
    </div>
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=600" alt="Workflow" />
            <p class="font-semibold text-cyan-600 ml-4">CarWash Facility</p>
          </div>
          <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
            <nuxt-link :to="item.href" @click="navigation.find(nav => nav.current).current = false; item.current = true;" v-for="item in navigation" :key="item.name" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
              <component :is="`${item.icon}Icon`" :is-outline="item.icon === 'Home'" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
              {{ item.name }}
            </nuxt-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <ProfileItem />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ProfileItem from "./ProfileItem";
import XMarkIcon from "../icons/XMarkIcon";
import HomeIcon from "../icons/HomeIcon";
import ChartBarIcon from "../icons/CharBarIcon"
import UsersIcon from "../icons/UsersIcon"
import IdentificationIcon from "../icons/IdentificationIcon"

export default {
  name: 'Sidebar',
  components: {XMarkIcon, ProfileItem, HomeIcon, ChartBarIcon, UsersIcon, IdentificationIcon},
  props: {
    sidebarOpened: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    sidebarOpened: {
      deep: true,
      immediate: true,
      handler(val) {
        console.log(val)
      }
    }
  },
  data() {
    return {
      navigation: [
        { name: 'Dashboard', href: '/admin/dashboard', icon: 'Home', component: 'Dashboard' },
        { name: 'Employees', href: '/admin/employees', icon: 'Users',  component: 'Employees' },
        { name: 'Clients', href: '/admin/clients', icon: 'Identification', component: 'Clients' },
        { name: 'Activities', href: '/admin/activities', icon: 'ChartBar', component: 'Activities' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

a {
  &.nuxt-link-active {
    @apply bg-gray-100 text-gray-900


  }
  svg {
    @apply text-gray-600 hover:bg-gray-50 hover:text-gray-900
  }

}

</style>
