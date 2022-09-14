<template>
  <div class="w-full sm:w-full md:w-1/2">
    <form class="space-y-8 divide-y divide-gray-200" autocomplete="off">
      <div class="space-y-8 divide-y divide-gray-200">

        <div class="pt-8">
         
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <InputField :error="errors.name" id="name" label="Name" :is-required="true" v-model="form.name" />
            </div>

            <div class="sm:col-span-3">
              <InputField :error="errors.description" id="description" label="Description" :is-required="true" v-model="form.description" />
            </div>

              <div class="pt-6 sm:col-span-3 sm:pt-5">
                <div role="group" aria-labelledby="label-email">
                  <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                    <div>
                      <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">Steps *</div>
                    </div>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                      <div class="max-w-lg space-y-4">
                        <div v-for="(step, i) in steps" :key="i"  class="relative flex items-start">
                          <div class="flex h-5 items-center">
                            <input :checked="form.steps.length ? form.steps.map(s => s.id).includes(step.id) : false" :value="step.id" :id="step.id" @change="setChecked(step.id)" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500">
                          </div>
                          <div class="ml-3 text-sm">
                            <label :for="step.id" class="font-medium text-gray-700">{{ step.name }}</label>
                            <p class="text-gray-500">{{ step.description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p class="mt-6 text-red-500 text-sm" v-if="errors.steps.length">{{errors.steps}}</p>
              </div>
            
          </div>
        </div>

      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button type="button" @click="$emit('action', form)" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputField from "../common/InputField";
export default {
  name: 'Form',
  components: {InputField},
  props: {
    program: {
      type: Object,
      required: false
    },
    errors: {
      type: Object,
      required: false
    },
    steps: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      form: this.program ? this.program : {
        name: '',
        description:  '',
        steps:  [],
      },
    }
  },

  methods: {
    setChecked(id) {
      if(this.form.steps.map(s => s.id).includes(id))
        this.form.steps.splice(this.form.steps.map(s => s.id).indexOf(id), 1);
      else
        this.form.steps.push({id: id});
    }
  },
}
</script>