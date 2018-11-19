import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '尹永贤'
  },
  mutations: {
    updateMessage (state, message) {
      state.message = message
    }
  }
})

export default store
