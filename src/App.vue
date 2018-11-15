<template>
    <div id="app">
        <router-view></router-view>
        <qrtabbar></qrtabbar>
    </div>
</template>

<script>

import QRTabbar from './components/QRTabbar.vue'

export default {
    name: 'app',
    components: {
        'qrtabbar': QRTabbar
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
    /* margin-top: 60px; */
}
</style>