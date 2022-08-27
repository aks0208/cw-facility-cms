<template>
  <button @click="$emit('action')" :class="isPrimary ? 'text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500' :'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md">
    {{buttonText}}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    isPrimary: {
      type: Boolean,
      default: true
    }
  }
}
</script>