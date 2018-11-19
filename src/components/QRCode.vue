<template>
  <div class="qrcode">
    <h1>{{ 尹永贤 }}</h1>
    <vue-qr :bgSrc='src' :logoSrc="src2" :text="this.$store.state.qrtext" :size="200"></vue-qr>
  </div>
</template>

<script>

import VueQr from 'vue-qr'

export default {
  name: 'QRCode',
  props: {
    msg: String
  },
  components:{
    VueQr
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
