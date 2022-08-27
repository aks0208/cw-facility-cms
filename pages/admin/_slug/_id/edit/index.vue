<template>
  <div class="py-6">
    <div class="mx-auto px-4 pb-4 sm:pb-4 sm:max-w-7xl sm:px-6 md:px-8 md:pb-6 lg:max-w-full xl:px-12 border-b border-gray-200 ">
      <Crumbs class="mb-6" />
      <h1 class="text-2xl font-semibold text-gray-900 capitalize">{{$route.params.slug}}</h1>
    </div>
    <div class="mx-auto px-4 sm:max-w-7xl sm:px-6 md:px-8 lg:max-w-full xl:px-12 ">
      <!-- Replace with your content -->
      <div class="py-4 mx-auto ">
        <component :is="`Edit${components.find(c => c.plural === capitalize($route.params.slug)).singular}`"></component>
      </div>
      <!-- /End replace -->
    </div>
  </div>
</template>

<script>
import Crumbs from "../../../../../components/common/Crumbs";
import EditClient from "../../../../../components/clients/EditClient";
export default {
  components: {Crumbs, EditClient},
  plugins: [
    { src: '~/plugins/mixins.js', },
  ],
  layout: 'admin',
  name: 'EditPage',
  data() {
    return {
      _vm: this,
      components: [
        {plural: 'Activities', singular: 'Activity'},
        {plural: 'Teams', singular: 'Team'},
        {plural: 'Clients', singular: 'Client'},
      ]
    }
  }
}
</script>