import _filter from 'lodash/filter'
import {getters as insuranceGetters} from './insurance/getters'
import {ROW_ID_PAY_LATER, ROW_ID_ECOMMERCE, ROW_ID_INSURANCE} from './rowIdTypes'

export const getters = {
  id: state => state.cart.id,
  cart: state => state.cart,
  items: state => state.cart.items,
  rooms: state => state.cart.rooms,
  itemsByRowId: (state, getters) => rowId => _filter(getters.items, i => i.rowId === rowId),
  itemsByProductId: (state, getters) => productId => _filter(getters.items, i => i.id === productId),
  itemByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).find(i => i.id === productId) || {},
  itemIndexByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).findIndex(i => i.id === productId) || -1,
  roomSpecialServices: (state, getters) => roomIndex => _filter(getters.items, it => it.rowId === roomIndex),
  payLaterItems: (state, getters) => _filter(getters.items, it => it.rowId === ROW_ID_PAY_LATER),
  ecommerceItems: (state, getters) => _filter(getters.items, it => it.rowId === ROW_ID_ECOMMERCE),
  insuranceItem: (state, getters) => getters.items.find(it => it.rowId === ROW_ID_INSURANCE),
  ...insuranceGetters
}
