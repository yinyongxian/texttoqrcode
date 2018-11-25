<template>
  <div class="qrtext">
    <textarea v-model="message" placeholder="请输入二维码内容"></textarea>
  </div>
</template>

<script>
export default {
  name: 'QRText',
  computed: {
    message: {
      get () {
        return this.$store.state.qrtext
      },
      set (value) {
        this.$store.commit('updateQRText', value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

#qrtext {
  height: 100%;
  position: relative;
}

textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;s
    overflow: auto;
    word-break: break-all;
}
</style>
