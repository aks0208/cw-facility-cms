<template>
  <div class="w-full flex flex-col sm:flex-col">
    <div v-if="$fetchState.pending">Preparing programs...</div>
    <div v-else-if="program" class="w-full">
      <Form :errors="errors" :program="program" :steps="steps" @action="update($event)" />
    </div>
  </div>
</template>

<script>
import Form from "./Form";
export default {
  name: 'EditProgram',
  components: {Form},
  data() {
    return {
      program: null,
      steps: [],
      errors: {
        name: '',
        description: '',
        steps: [],
      }
    }
  },
  async fetch() {
    this.program =  await this.$axios.get(`/programs/${this.$route.params.id}`).then((res) => this.program = res.data)
    this.steps = await this.$axios.get(`/steps/`).then((res) => this.steps = res.data)
  },
  methods: {
    async update(payload) {
      try {
        await this.$axios.put(`/programs/${this.$route.params.id}`, payload).then(() => this.program = payload)
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