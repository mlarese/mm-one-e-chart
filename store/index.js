// import Vue from 'vue'
import Vuex from 'vuex'
import app from '../storeimp/app'
import api from '../storeimp/api'
import shop from '../storeimp/shop'
import tests from '../storeimp/tests'
// import VuexPersistence from 'vuex-persist'
// import VueLocalStorage from 'vue-localstorage'
// import lz from 'lz-string'

// Vue.use(VueLocalStorage)

// const vuexLocal = new VuexPersistence({
//   storage: window.sessionStorage,
//   restoreState: (key, storage) => JSON.parse(lz.decompressFromUTF16(storage[key]) || '{}'),
//   saveState: (key, state, storage) => {
//     storage[key] = lz.compressToUTF16(JSON.stringify(state))
//   },
//   modules: ['shop'],
//   key: 'booking-cart'
// })

const createStore = () => {
  return new Vuex.Store({
    // plugins: [vuexLocal.plugin],
    modules: {
      app,
      api,
      shop,
      tests
    }
  })
}

export default createStore
