<template>
  <div class="w-full flex flex-col sm:flex-col md:flex-row">
    <Form />
    <Card />
  </div>
</template>

<script>
import Form from "./Form";
import Card from "../common/Card"
export default {
  name: 'EditClient',
  components: {Form, Card}
}
</script>