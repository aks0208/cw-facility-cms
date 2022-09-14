<template>
  <div class="w-full flex flex-col sm:flex-col">
    <div v-if="$fetchState.pending">Preparing customers...</div>
    <div v-else-if="customer" class="w-full">
      <Form :errors="errors" :customer="customer" />
      <Card :cards="customer.cards" />
    </div>
  </div>
</template>

<script>
import Form from "./Form";
import Card from "../common/Card"
export default {
  name: 'EditCustomer',
  components: {Form, Card},
  data() {
    return {
      customer: null,
      errors: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        zip_code: ''
      }
    }
  },
  async fetch() {
    this.customer =  await this.$axios.get(`/customers/${this.$route.params.id}`).then((res) => this.customer = res.data)
  },
}
</script>