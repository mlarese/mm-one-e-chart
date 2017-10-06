import _groupBy from 'lodash/groupBy'
import _filter from 'lodash/filter'
import _reduce from 'lodash/reduce'
import _keys from 'lodash/keys'

export const getters = {
  cart: state => state.list,
  roomsCart: state => _groupBy(state.list, 'roomId'),
  filterByProduct: state => productId => _filter(state.list, {productId}),
  findByRoomAndProduct: (state, getters) => (roomId, productId) => (
    getters.roomsCart[roomId] ? getters.roomsCart[roomId].find(item => item.productId === productId) : null
  ),
  findIndexByRoomAndProduct: (state) => (roomId, productId) => (
    state.list.findIndex(item => item.productId === productId && item.roomId === roomId)
  ),
  totalCartPrice: (state, getters) => _reduce(state.list, (total, row) => total + (row.quantity || 0 * row.item.price || 0), 0),
  totalCartQuantity: (state, getters) => _reduce(state.list, (total, row) => total + (row.quantity || 0), 0),
  totalRoomsQuantity: (state, getters) => _keys(getters.roomsCart).length,
  totalRoomsPrice: (state, getters) => _reduce(getters.roomsCart, (total, row) => total + (row[0].room.reservation_detail_price || 0), 0),
  granTotal: (state, getters) => (getters.totalCartPrice || 0 + getters.totalRoomsPrice || 0)
}
