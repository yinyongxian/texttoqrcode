<template>
  <div class="qrcode">
    <p>{{ this.$store.state.qrtext }}</p>
    <vue-qr :text="this.$store.state.message" :size="200"></vue-qr>
  </div>
</template>

<script>

import VueQr from 'vue-qr'

export default {
  name: 'QRCode',
  components:{
    VueQr
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
