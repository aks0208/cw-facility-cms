<template>

  <div class="w-full">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-sm text-gray-700">A list of all the clients in CarWash Facility including their name, phone number, card and credit.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <Button @action="$router.push(`${$route.params.slug}/create`)" button-text="Add client" />
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Card ID</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone number</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Credit</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody class="bg-white">
              <tr v-if="clients.length"  v-for="(client, i) in clients" :key="i" :class="i % 2 === 0 ? undefined : 'bg-gray-50'">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ client.name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ Math.random().toString().slice(2,11) + client.card.id }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ client.phone_number }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ client.card.credit }}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <nuxt-link :to="`${client.id}/edit`" :append="true" class="text-cyan-600 hover:text-cyan-900">
                    Edit <span class="sr-only">, {{ client.name }}</span>
                  </nuxt-link>
                </td>
              </tr>
              <tr v-else>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">No results</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <SlideOver @closeSlideOver="sliderOpened = false" :slider-over-opened="sliderOpened" />
  </div>

</template>

<script>

import SlideOver from "../common/SlideOver";
import Button from "../common/Button";
export default {
  name: 'Clients',
  components: {Button, SlideOver},
  data() {
    return {
      sliderOpened: false,
      clients: [
        {id: 1, name: 'Foo Bar', card: {id: 1, credit: 10}, phone_number: '+38761123456'},
        {id: 2, name: 'John Doe', card: {id: 2, credit: 0}, phone_number: '+38761123457'},
        {id: 3, name: 'Bar Doe', card: {id: 3, credit: 3}, phone_number: '+38761123467'}
      ]
    }
  }
}

</script>