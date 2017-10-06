export const actions = {
  addToCart ({commit, getters}, {item, quantity, room}) {
    const index = getters.findIndexByRoomAndProduct(room.reservation_detail_id, item.product_id)

    if (index < 0) {
      commit('add', {item, quantity, room})
    } else {
      commit('incrementQuantity', {index, quantity})
    }
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
