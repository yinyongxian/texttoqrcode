<template>
    <div id="app">
        <QRText msg="QRText" />
        <QRCode msg="QRCode" />
        <mt-tabbar :selected.sync="selected" fixed>
            <mt-tab-item id="外卖">
                <img slot="icon" src="./assets/qrtext.png">
              文本
            </mt-tab-item>
              <mt-tab-item id="订单">
                <img slot="icon" src="./assets/qrcode.png">
              二维码
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import QRText from './components/QRText.vue'
import QRCode from './components/QRCode.vue'

export default {
    name: 'app',
    components: {
        QRText,
        QRCode
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>