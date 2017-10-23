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
  addProduct (state, {rowId, product, quantity}) {
    state.cart.items.push({rowId, ...product, quantity})
  },
  removeProduct (state, {cartIndex}) {
    state.cart.items.splice(cartIndex, 1)
  },
  addQuantity (state, {cartIndex, quantity = 1}) {
    state.cart.items[cartIndex].quantity += quantity
  },
  subtractQuantity (state, {cartIndex, quantity = 1}) {
    state.cart.items[cartIndex].quantity -= quantity
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
