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
  list: []
})

export const mutations = {
  incrementQuantity (state, {index, quantity}) {
    state.list[index].quantity += quantity
  },
  decrementQuantity (state, {index, quantity}) {
    state.list[index].productQuantity -= quantity
  },
  add (state, {item, quantity, room}) {
    const row = {
      item,
      quantity,
      room,
      roomId: room.reservation_detail_id,
      productId: item.product_id
    }

    state.list.push(row)
  }
}
