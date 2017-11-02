// import Vue from 'vue'
import Vuex from 'vuex'
import app from '../storeimp/app'
import api from '../storeimp/api'
import structure from '../storeimp/structure'
import booking from '../storeimp/booking'
import categories from '../storeimp/categories'
import products from '../storeimp/products'
import comparator from '../storeimp/comparator'
import cart from '../storeimp/cart'

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
      comparator,
      booking,
      structure,
      categories,
      products,
      cart
    }
  })
}

export default createStore
