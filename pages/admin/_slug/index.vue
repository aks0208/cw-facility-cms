
<template>
  <div class="py-6">
    <div class="mx-auto pb-4 px-4 sm:pb-4 sm:max-w-7xl sm:px-6 md:px-8 md:pb-6 lg:max-w-full xl:px-12 border-b border-gray-200">
      <Crumbs class="mb-6" />
      <h1 class="text-2xl font-semibold text-gray-900 capitalize">{{capitalize($route.params.slug)}}</h1>
    </div>
    <div class="mx-auto px-4 sm:max-w-7xl sm:px-6 md:px-8 lg:max-w-full xl:px-12 ">
      <div class="py-4 mx-auto ">
        <component :is="capitalize($route.params.slug)"></component>
      </div>
    </div>
  </div>
</template>

<script>


import Sidebar from "../../../components/common/Sidebar";
import Dashboard from "../../../components/common/Dashboard";
import Team from "../../../components/employees/Employees";
import Clients from "../../../components/clients/Clients";
import Activities from "../../../components/activities/Activities";
import Bars3Icon from "../../../components/icons/Bars3Icon";
import Crumbs from "../../../components/common/Crumbs";

export default {
  components: {Crumbs, Sidebar, Dashboard, Team, Clients, Activities, Bars3Icon },
  layout: 'admin',
  plugins: [
    { src: '~/plugins/mixins.js' },
  ],
  name: 'MenuItemPage',
  async validate({params}) {
    switch(params.slug) {
      case 'employees':
        return true;
      case 'clients':
        return true
      case 'activities':
        return true;
      case 'dashboard':
        return true;
    }
  },
  data() {
    return {
      sidebarOpen: false,
      currentMenuItem: {
        component: 'Dashboard',
        route: '/admin/dashboard'
      },
    }
  },
}




</script>
