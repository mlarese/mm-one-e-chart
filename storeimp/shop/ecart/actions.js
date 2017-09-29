export const actions = {
  addToCart ({commit}, {item, quantity}) {
    commit('addToList', {item, quantity})
  },
  removeFromCart ({commit, state}, item) {
    const index = state.list.findIndex(product => product.id === item.id)
    commit('removeFromList', index)
  },
  incrementQuantity ({state, commit}, {item, quantity}) {
    const index = state.list.findIndex(product => product.id === item.id)
    commit('incrementQuantity', {index, quantity})
  },
  decrementQuantity ({state, commit}, {item, quantity}) {
    const index = state.list.findIndex(product => product.id === item.id)

    commit('decrementQuantity', {index, quantity})
    let record = state.list[index]
    if (record.quantity <= 0) {
      commit('removeFromList', index)
    }
  }
}
