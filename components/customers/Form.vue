<template>
  <div class="w-full sm:w-full md:w-1/2">
    <form class="space-y-8 divide-y divide-gray-200" autocomplete="off">
      <div class="space-y-8 divide-y divide-gray-200">

        <div class="pt-8">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p class="mt-1 text-sm text-gray-500">Please remind the client that he/she must provide the correct information.</p>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <InputField :error="errors.first_name" id="first-name" label="First name" :is-required="true" v-model="form.first_name" />
            </div>

            <div class="sm:col-span-3">
              <InputField :error="errors.first_name" id="last-name" label="Last name" :is-required="true" v-model="form.last_name" />
            </div>

            <div class="sm:col-span-3">
              <InputField :error="errors.last_name" id="phone-number" label="Phone number" :is-required="true" type="number" v-model="form.phone_number" />
            </div>

            <div class="sm:col-span-3">
              <InputField :error="errors.email" id="email" label="Email address" :is-required="true" v-model="form.email" />
            </div>

            <div class="sm:col-span-6">
              <InputField :error="errors.address" id="street-address" label="Street address" v-model="form.address" />
            </div>

            <div class="sm:col-span-3">
              <InputField :error="errors.city" id="city" label="City" v-model="form.city" />
            </div>

            <div class="sm:col-span-3">
              <InputField :error="errors.zip_code" id="zip-code" label="ZIP/Postal code" v-model="form.zip_code" />
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
    client: {
      type: Object,
      required: false
    },
    errors: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      form: this.client ? this.client : {
        first_name: '',
        last_name:  '',
        email:  '',
        phone_number:  '',
        city:  '',
        zip_code: '',
        address:  '',
      },
    }
  },
  created() {
    console.log(this.form, 'ff')
  }
}
</script>