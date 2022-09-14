<template>

  <div class="w-full">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-sm text-gray-700">A list of all programs in CarWash Facility.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <Button @action="$router.push(`${$route.params.slug}/create`)" button-text="Add program" />
      </div>
    </div>
    <Table span-text="Actions" :columns="['ID', 'Name']">
      <template>
        <tr v-if="programs.length"  v-for="(program, i) in programs" :key="i" :class="i % 2 === 0 ? undefined : 'bg-gray-50'">
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ program.id }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  program.name }}</td>
          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <nuxt-link :to="`${program.id}/edit`" :append="true" class="text-cyan-600 hover:text-cyan-900">
              Edit <span class="sr-only">, {{ program.name }}</span>
            </nuxt-link>
            <p @click="deleteProgram(program.id, i)" class="text-cyan-600 hover:text-cyan-900 cursor-pointer">
              Delete <span class="sr-only">, {{ program.name }}</span>
            </p>
          </td>
        </tr>
        <tr v-else>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">No results</td>
        </tr>
      </template>
    </Table>
  </div>

</template>

<script>

import SlideOver from "../common/SlideOver";
import Button from "../common/Button";
import Table from "../common/Table";
export default {
  name: 'Program',
  components: {Table, Button, SlideOver},
  data() {
    return {
      programs: []
    }
  },
  async created() {
    this.programs = await this.$axios.get('/programs').then(res => res.data)
  },
  methods: {
    async deleteProgram(id, i) {
      try {
        await this.$axios.delete(`/programs/${id}`)
        this.programs.splice(i, 1)
      } catch (e) {

      }
    }
  }
}

</script>