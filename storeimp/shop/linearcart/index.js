import {actions} from './actions'
import {getters} from './getters'

/**
 * @typedef room {
 *    @type reservation_detail_id
 *    @type reservation_detail_code
 *    @type reservation_detail_name
 *    @type reservation_detail_price
 *    @type reservation_detail_room_id
 *    @type reservation_detail_room_board
 * }
 */
export const state = () => ({
  type: 'linearcart',
  list: []
})

export const mutations = {
  remove (state, index) {
    state.list.splice(index, 1)
  },
  incrementQuantity (state, {index, quantity}) {
    state.list[index].quantity += quantity
  },
  decrementQuantity (state, {index, quantity}) {
    state.list[index].quantity -= quantity
  },
  add (state, {item, quantity, room}) {
    const row = {
      item,
      quantity,
      room,
      roomId: room.reservation_detail_id,
      productId: item.product_id,
      roomPrice: room.reservation_detail_price,
      productPrice: item.product_price
    }

    state.list.push(row)
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
