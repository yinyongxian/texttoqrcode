<template>
  <div class="qrtext">
    <h1>{{ msg }}</h1>
    <textarea rows="20" cols="20"></textarea>
  </div>
</template>

<script>
export default {
  name: 'QRText',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
