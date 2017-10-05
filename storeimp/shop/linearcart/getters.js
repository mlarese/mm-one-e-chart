import _groupBy from 'lodash/groupBy'
import _filter from 'lodash/filter'
import _reduce from 'lodash/reduce'

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
  totalCartPrice: (state, getters) => _reduce(state.list, (total, row) => total + row.quantity * row.item.price, 0),
  totalCartQuantity: (state, getters) => _reduce(state.list, (total, row) => total + row.quantity, 0)
}
