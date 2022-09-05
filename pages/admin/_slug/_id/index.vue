<template>
<div></div>
</template>

<script>
export default {
  name: 'EditId',
  created() {
    if(! Number(this.$route.params.id)) this.$router.back()
    else this.$router.push('edit')
  }
}
</script>