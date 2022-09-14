<template>
  <div class="w-full flex flex-col sm:flex-col">
    <div v-if="$fetchState.pending">Preparing steps...</div>
    <div v-else-if="client" class="w-full">
      <Form :errors="errors" :client="client" />
      <Card :cards="client.cards" />
    </div>
  </div>
</template>

<script>
import Form from "./Form";
import Card from "../common/Card"
export default {
  name: 'EditStep',
  components: {Form, Card},
  data() {
    return {
      client: null,
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
    this.client =  await this.$axios.get(`/clients/${this.$route.params.id}`).then((res) => this.client = res.data)
    console.log(this.client, 'cc')
  },
}
</script>