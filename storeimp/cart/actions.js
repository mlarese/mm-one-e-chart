export const actions = {
  init ({commit}, cart) {
    console.log('--- cart.init')
    commit('setCart', cart)
  },
  removeProduct ({commit, dispatch}, {cartIndex}) {
    if (cartIndex < 0) return
    commit('removeProduct', {cartIndex})
  },
  removeQuantity ({state, commit, dispatch, getters}, {cartIndex, quantity = 1}) {
    if (cartIndex < 0) return
    const cartItem = getters.items[cartIndex]

    if (cartItem.quantity > quantity) {
      commit('subtractQuantity', {cartIndex, quantity})
    } else {
      commit('removeProduct', {cartIndex})
    }
  },

  addProduct ({commit, dispatch}, {rowId, product, quantity}) {
    commit('addProduct', {rowId, product, quantity})
  },
  addQuantity ({commit, dispatch, getters}, {cartIndex, quantity}) {
    commit('addQuantity', {cartIndex, quantity})
  }
}
