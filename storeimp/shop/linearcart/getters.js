import _groupBy from 'lodash/groupBy'
import _filter from 'lodash/filter'
import _reduce from 'lodash/reduce'
import _keys from 'lodash/keys'
import _map from 'lodash/map'
import _sumBy from 'lodash/sumBy'

export const getters = {
  cart: state => state.list,
  roomsCart: state => _groupBy(state.list, 'roomId'),
  productsCart: state => _groupBy(state.list, 'productId') || [],
  filterByProduct: state => productId => _filter(state.list, {productId}),
  findByRoomAndProduct: (state, getters) => (roomId, productId) => (
    getters.roomsCart[roomId] ? getters.roomsCart[roomId].find(item => item.productId === productId) : null
  ),
  findIndexByRoomAndProduct: (state) => (roomId, productId) => (
    state.list.findIndex(item => item.productId === productId && item.roomId === roomId)
  ),
  totalCartPrice: (state, getters) => _reduce(state.list, (total, row) => total + (row.quantity * row.productPrice), 0),
  totalCartQuantity: (state, getters) => _reduce(state.list, (total, row) => total + (row.quantity || 0), 0),
  totalRoomsQuantity: (state, getters) => _keys(getters.roomsCart).length,
  totalRoomsPrice: (state, getters) => _reduce(getters.roomsCart, (total, row) => total + (row[0].roomPrice || 0), 0),
  granTotal: (state, getters) => (getters.totalCartPrice || 0 + getters.totalRoomsPrice || 0),
  totalQuantityByProduct: (state, getters) =>
    _reduce(
      _map(getters.productsCart, (row, key) => ({product_id: key, quantity: _sumBy(row, 'quantity') || 0})),
      (result, {product_id, quantity}) => {
        (result[product_id] = result[product_id] || 0 + quantity || 0)
        return result
      }, {}
    )
}
