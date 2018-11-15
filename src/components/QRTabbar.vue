<template>
  <div class="page-tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="文本" @click.native="goTo('/qrtext')">
        <img slot="icon" src="../assets/100x100.png">
        文本
      </mt-tab-item>
      <mt-tab-item id="二维码" @click.native="goTo('/qrcode')">
        <img slot="icon" src="../assets/100x100.png">
        二维码
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '文本'
    };
  },
  methods: {
    goTo: function(path) {
      this.$router.replace(path)
    }
  }  
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
