import _forEach from 'lodash/forEach'
import _filter from 'lodash/filter'
import {getters as insuranceGetters} from './insurance/getters'
import {ROW_ID_PAY_LATER, ROW_ID_ECOMMERCE, ROW_ID_INSURANCE, ROW_ID_SPECIAL_MARKER} from './rowIdTypes'

export const getters = {
  id: state => state.cart.id,
  cart: state => state.cart,
  items: state => state.cart.items,
  rooms: state => state.cart.rooms,
  currentRoomIndex: state => state.cart.rooms.length-1,
  itemsByRowId: (state, getters) => rowId => _filter(getters.items, i => i.rowId === rowId),
  itemsByProductId: (state, getters) => productId => _filter(getters.items, i => i.id === productId),
  itemIndexByUid: (state, getters) => uid => getters.items.findIndex(i => i.uid === uid),
  itemByUid: (state, getters) => uid => getters.items.find(i => i.uid === uid),
  itemByProductId: (state, getters) => productId => getters.items.find(i => i.id === productId),
  itemByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).find(i => i.id === productId) || {},
  itemIndexByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).findIndex(i => i.id === productId) || -1,
  roomSpecialServices: (state, getters) => roomIndex => _filter(getters.items, it => it.rowId === roomIndex),
  roomsSpecialServices: (state, getters) => _filter(getters.items, it => it.rowId < ROW_ID_SPECIAL_MARKER),
  payLaterItems: (state, getters) => _filter(getters.items, it => it.rowId === ROW_ID_PAY_LATER),
  ecommerceItems: (state, getters) => _filter(getters.items, it => it.rowId === ROW_ID_ECOMMERCE),
  insuranceItem: (state, getters) => getters.items.find(it => it.rowId === ROW_ID_INSURANCE),
  itemFinalPrice: (state, getters) => item => (item.finalPrice === '') ? item.price * 1 : item.finalPrice * 1,
  itemFinalPriceTotal: (state, getters) => item => getters.itemFinalPrice(item) * item.quantity * 1,
  itemPriceFrom: (state, getters) => item => (item.priceFrom === '') ? item.price * 1 : item.priceFrom * 1,
  itemPriceFromTotal: (state, getters) => item => getters.itemPriceFrom(item) * item.quantity * 1,

  ...insuranceGetters,

  totalRoomsPrice: (state, getters) => {
    let total = 0
    _forEach(getters.rooms, r => total += r.price)
    _forEach(getters.roomsSpecialServices, i => total += getters.itemFinalPriceTotal(i) )
    return total
  },
  totalEcommercePrice: (state, getters) => {
    let total = 0
    _forEach(getters.ecommerceItems, i => total += getters.itemFinalPriceTotal(i) )
    return total
  },
  cartTotal: (state, getters) => {
    return getters.totalRoomsPrice + getters.totalEcommercePrice
  }
}
