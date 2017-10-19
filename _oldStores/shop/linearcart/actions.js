const root = {root: true}

export const actions = {
  saveCart ({dispatch, commit, getters}) {
    const url = '/cart'
    const data = getters.cart
    return dispatch('api/post', {url, data}, root)
  },
  resetCart ({dispatch, commit}) {
    commit('setCart')
  },
  loadCart ({dispatch, commit}, cart) {
    return dispatch('api/get', {url: '/cart'}, root)
      .then(res => commit('setCart', res.data))
  },
  addToCart ({commit, getters, dispatch}, cartItem) {
    const {quantity, rowId, productId} = cartItem
    const index = getters.findIndexByRowAndProduct(rowId, productId)
    if (index < 0) {
      commit('add', cartItem)
    } else {
      commit('incrementQuantity', {index, quantity})
    }

    return dispatch('saveCart')
  },
  removeFromCart ({commit, getters, state}, {rowId, productId, quantity = 0}) {
    const index = getters.findIndexByRoomAndProduct(rowId, productId)

    if (index >= 0) {
      const row = state.list[index]

      if (row.quantity - quantity === 0 || quantity === 0) {
        commit('remove', index)
      } else {
        commit('decrementQuantity', {index, quantity})
      }
    }
  }
}
