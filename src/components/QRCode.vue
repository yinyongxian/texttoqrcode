<template>
  <div class="qrcode">
    <p>{{ this.$store.state.qrtext }}</p>
  </div>
</template>

<script>

export default {
  name: 'QRCode',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
