<template>

  <div class="w-full">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-sm text-gray-700">A list of all the customers in CarWash Facility including their name, phone number, card and credit.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <Button @action="$router.push(`${$route.params.slug}/create`)" button-text="Add customer" />
      </div>
    </div>
    <Table :columns="['Name', 'Card holder number', 'Phone number']">
      <tr v-if="customers.length"  v-for="(client, i) in customers" :key="i" :class="i % 2 === 0 ? undefined : 'bg-gray-50'">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ client.first_name }} {{client.last_name}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  client.cards.map(c => c.card.holder_number).toString() }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ client.phone_number }}</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <nuxt-link :to="`${client.id}/edit`" :append="true" class="text-cyan-600 hover:text-cyan-900">
            Edit <span class="sr-only">, {{ client.first_name }}</span>
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
  name: 'Customers',
  components: {Table, Button, SlideOver},
  data() {
    return {
      customers: []
    }
  },
  async created() {
    this.customers = await this.$axios.get('/customers').then(res => res.data)
  }
}

</script>