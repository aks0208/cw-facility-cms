<template>

  <div class="w-full">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-sm text-gray-700">A list of all activities in CarWash Facility.</p>
      </div>
    </div>
    <Table span-text="Show" :columns="['Name', 'Card holder number', 'Client', 'Program']">
      <tr v-if="activities.length"  v-for="(activity, i) in activities" :key="i" :class="i % 2 === 0 ? undefined : 'bg-gray-50'">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ activity.name }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  activity.cardProgram.card.holder_number }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ activity.cardProgram.card.customer.customer.first_name }} {{activity.cardProgram.card.customer.customer.last_name}}</td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ activity.cardProgram.program.name }}</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <nuxt-link :to="`${activity.id}/edit`" :append="true" class="text-cyan-600 hover:text-cyan-900">
            Show <span class="sr-only">, {{ activity.name }}</span>
          </nuxt-link>
        </td>
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
  name: 'Activities',
  components: {Table, Button, SlideOver},
  data() {
    return {
      activities: []
    }
  },
  async fetch() {
    this.activities = await this.$axios.get('/activities').then(res => res.data)
  },

}

</script>