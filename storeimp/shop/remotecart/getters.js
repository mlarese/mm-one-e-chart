// import _filter from 'lodash/filter'

export const getters = {
  cartByRoom: state => state.list,
  getRoomCart: state => rowId => state.roomsCart.find(item => item.rowId === rowId),
  getReservationCartItem: state => product => state.reservationCart.find(item => item.id === product.id),
  getRoomCartItem: (state, getters) => (product, rowId) => getters.getRoomCart(rowId).find(item => item.id === product.id)
}
