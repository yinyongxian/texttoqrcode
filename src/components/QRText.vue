<template>
  <div class="qrtext">
    <textarea placeholder="请输入二维码内容"></textarea>
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

* {
  margin: 0px;
  padding: 0px;
}

textarea {
  /* border: none; */
  width: 100%;
  height: 1500px;
}
</style>
