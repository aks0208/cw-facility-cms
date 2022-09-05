<template>

  <div class="h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-green-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=600" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
           <input-field id="email" v-model="payload.email" :error="errors.email" label="Email" />
          </div>

          <div>
           <input-field type="password" id="password" v-model="payload.password" :error="errors.password" label="Password"  />
          </div>

          <div>
            <button @click="login()" type="button" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../components/common/InputField";
export default {
  components: {InputField},
  data() {
    return {
      payload: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: this.payload,
        });
        await this.$router.push('/admin')

      } catch (error) {
        error.response.data.errors.map((err) => {
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
