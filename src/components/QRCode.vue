<template>
  <div class="qrcode">
    
    <!-- 调试时显示二维码对应的内容 -->
    <!-- <p>{{ this.$store.state.qrtext }}</p> -->

    <!-- 二维码 -->
    <img :src="dataurl" :alt="this.$store.state.qrtext">
  </div>
</template>

<script>

import QRCode from 'qrcode'

export default {
  name: 'QRCode',
  data(){
    return {
      dataurl:''
    }
  },
  methods:{
    setImage(){
      QRCode.toDataURL(this.$store.state.qrtext)
        .then(url => {
          console.log(this.$store.state.qrtext)
          this.dataurl = url;
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted:function() {
    this.setImage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

</style>
