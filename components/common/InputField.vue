<template>
  <div>
    <label v-if="label" :for="id" :class="labelColor" class="block text-sm font-medium text-gray-700"> {{ label }}
      <span v-if="isRequired">*</span>
    </label>
    <div class="mt-1">
      <input :type="type" :id="id" v-model="value" autocomplete="off" :placeholder="placeholder" class="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    id: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      required: true,
    },
    labelColor: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>

