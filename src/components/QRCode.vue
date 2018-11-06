<template>
  <div class="qrcode">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'QRCode',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
