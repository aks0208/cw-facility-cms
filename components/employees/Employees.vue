<template>

  <div class="w-full">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-sm text-gray-700">A list of all the employees in CarWash Facility including their name and email.</p>
      </div>
    </div>
    <Table :columns="['name', 'email']">
      <tr v-if="employees.length"  v-for="(employee, i) in employees" :key="i" :class="i % 2 === 0 ? undefined : 'bg-gray-50'">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ employee.first_name }} {{ employee.last_name }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  employee.email }}</td>
      </tr>
      <tr v-else>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">No results</td>
      </tr>
    </Table>
  </div>

</template>

<script>

import SlideOver from "../common/SlideOver";
import Button from "../common/Button";
import Table from "../common/Table";
export default {
  name: 'Employees',
  components: {Table, Button, SlideOver},
  data() {
    return {
      employees: []
    }
  },
  async fetch() {
    this.employees = await this.$axios.get('/employees').then(res => res.data)
  },

}

</script>