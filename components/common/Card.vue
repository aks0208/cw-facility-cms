<template>
  <div class="mx-0 w-full sm:w-full sm:mx-0 md:mx-12 md:w-1/2">

    <div class="pt-8">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Card</h3>
      </div>

    </div>
    <div class="card w-full sm:w-full md:w-10/12">
      <div>
        <h1>Ajla Bazdar</h1>
        <h2>ID: 92I34092</h2>
      </div>
      <div class="flex flex-row justify-between items-end">
        <h2 class="w-1/2">Credit: 123 KM</h2>
        <div class="flex flex-col w-full items-end">
          <InputField class="w-1/3 mb-4" id="credit" label="Add credit" label-color="text-white" :is-required="true" v-model="card" />
          <Button class="w-1/3 flex justify-end" button-text="Save" />
        </div>
      </div>


    </div>
  </div>



</template>

<script>
import InputField from "./InputField";
import Button from "./Button";
export default {
  components: {Button, InputField},
  data() {
    return {
      card: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: linear-gradient(90deg, rgba(8,145,178,1) 0%, rgba(94,234,212,1) 100%);
  height: 290px;
  padding: 24px;
  margin-top: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #fff;
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
    color: #fff;
  }
}
</style>
