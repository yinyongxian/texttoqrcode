import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import QRText from '../components/QRText.vue'
import QRCode from '../components/QRCode.vue'

const routes = [
    { path: '/qrtext', component: QRText },
    { path: '/qrcode', component: QRCode },
    { path: '*', redirect: '/qrtext' }
  ]

  const router = new VueRouter({
    routes
  })

  export default router