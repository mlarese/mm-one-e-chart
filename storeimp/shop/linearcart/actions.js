export const actions = {
  addToCart ({commit, getters}, {item, quantity, room}) {
    const index = getters.findIndexByRoomAndProduct(room.reservation_detail_id, item.product_id)

    if (index < 0) {
      commit('add', {item, quantity, room})
    } else {
      commit('incrementQuantity', {index, quantity})
    }
  }
}
