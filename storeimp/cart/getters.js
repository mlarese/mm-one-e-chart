import _filter from 'lodash/filter'
import {getters as insuranceGetters} from './insurance/getters'

export const getters = {
  id: state => state.cart.id,
  cart: state => state.cart,
  items: state => state.cart.items,
  itemsByRowId: (state, getters) => rowId => _filter(getters.items, i => i.rowId === rowId),
  itemsByProductId: (state, getters) => productId => _filter(getters.items, i => i.id === productId),
  itemByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).find(i => i.id === productId) || {},
  itemIndexByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).findIndex(i => i.id === productId) || -1,
  ...insuranceGetters
}
