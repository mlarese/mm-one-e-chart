import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    cart: {
      id: 0,
      items: []
    }
  }
}

export const mutations = {
  setCart (state, payLoad) {
    state.cart = payLoad
  },
  add (state, {rowId, product, quantity}) {

  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
