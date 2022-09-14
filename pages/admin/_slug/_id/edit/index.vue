<template>
  <div class="py-6">
    <div class="mx-auto px-4 pb-4 sm:pb-4 sm:max-w-7xl sm:px-6 md:px-8 md:pb-6 lg:max-w-full xl:px-12 border-b border-gray-200 ">
      <Crumbs class="mb-6" />
      <h1 class="text-2xl font-semibold text-gray-900 capitalize">{{$route.params.slug}}</h1>
    </div>
    <div class="mx-auto px-4 sm:max-w-7xl sm:px-6 md:px-8 lg:max-w-full xl:px-12 ">
      <div class="py-4 mx-auto ">
        <component :is="`Edit${components.find(c => c.plural === capitalize($route.params.slug)).singular}`"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Crumbs from "../../../../../components/common/Crumbs";
import EditCustomer from "../../../../../components/customers/EditCustomer";
import EditProgram from "../../../../../components/programs/EditProgram";
import EditStep from "../../../../../components/steps/EditStep";
import EditActivity from "../../../../../components/activities/EditActivity";
export default {
  components: {Crumbs, EditCustomer, EditActivity, EditProgram, EditStep},
  plugins: [
    { src: '~/plugins/mixins.js', },
  ],
  layout: 'admin',
  name: 'EditPage',
  validate({ params }) {
    const regexNum =   /^\d+$/gi;
    const regexUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexNum.test(params.id) || regexUuid.test(params.id)
  },
  data() {
    return {
      _vm: this,
      components: [
        {plural: 'Activities', singular: 'Activity'},
        {plural: 'Employees', singular: 'Employee'},
        {plural: 'Customers', singular: 'Customer'},
        {plural: 'Programs', singular: 'Program'},
        {plural: 'Steps', singular: 'Step'},
      ]
    }
  }
}
</script>