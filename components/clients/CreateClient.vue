<template>
  <div class="w-full flex flex-col sm:flex-col md:flex-row">
    <Form :errors="errors" @action="create($event)" />
  </div>
</template>

<script>
import Form from "./Form";
import Card from "../common/Card"
export default {
  name: 'CreateClient',
  components: {Form, Card},
  data() {
    return {
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
  methods: {
    async create(form) {
      try {
        await this.$axios.post('/clients', form)
        await this.$router.go(-1)
      } catch (e) {
        e.response.data.errors.map((err) => {
          Object.keys(this.errors).map((obj) => {
            if (err.field === obj) {
              this.errors[obj] = err.message.replaceAll('_', ' ');
            }
          });
        });
      }
    }
  }
}
</script>