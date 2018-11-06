import Vue from 'vue'
import App from './App.vue'

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
