<template>
  <div class="w-full flex flex-col sm:flex-col">
    <div v-if="$fetchState.pending">Preparing activity...</div>
    <div v-else>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Step</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                <tr v-if="activity.cardProgram.steps.length"  v-for="(step, i) in activity.cardProgram.steps" :key="i" :class="i % 2 === 0 ? undefined : 'bg-gray-50'">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ step.step.name }} </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  step.status }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  step.price }} KM</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{  step.time/60 }} min</td>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditActivity',
  data() {
    return {
      activity: null,
    }
  },
  async fetch() {
    this.activity =  await this.$axios.get(`/activities/${this.$route.params.id}`).then((res) => res.data)
    console.log(this.activity, 'acc')
  },
}
</script>