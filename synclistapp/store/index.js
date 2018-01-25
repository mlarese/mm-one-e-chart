import Vuex from 'vuex'
import app from '../storeimp/app'
import api from '../storeimp/api'
import rooms from '../storeimp/rooms'
import rates from '../storeimp/rates'

const createStore = () => {
  return new Vuex.Store({
    // plugins: [vuexLocal.plugin],
    modules: {
      app,
      api,
      rooms,
      rates
    }
  })
}

export default createStore
