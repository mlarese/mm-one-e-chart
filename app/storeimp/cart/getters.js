import _forEach from 'lodash/forEach'
import _filter from 'lodash/filter'
import {getters as insuranceGetters} from './insurance/getters'
import {ROW_ID_PAY_LATER, ROW_ID_ECOMMERCE, ROW_ID_INSURANCE, ROW_ID_SPECIAL_MARKER, ROW_ID_PAY_LATER_MAX} from './rowIdTypes'

export const getters = {
  id: state => state.cart.id,
  cart: state => state.cart,
  items: state => state.cart.items,
  rooms: state => state.cart.rooms,
  currentRoomIndex: state => state.cart.currentRoom * 1,
  currentRoom: (state, getters) => state.cart.rooms[getters.currentRoomIndex] ,
  itemsByRowId: (state, getters) => rowId => _filter(getters.items, i => i.rowId * 1 === rowId),
  itemsByProductId: (state, getters) => productId => _filter(getters.items, i => i.id === productId),
  itemIndexByUid: (state, getters) => uid => getters.items.findIndex(i => i.uid === uid),
  itemByUid: (state, getters) => uid => getters.items.find(i => i.uid === uid),
  itemByProductId: (state, getters) => productId => getters.items.find(i => i.id === productId),
  itemByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).find(i => i.id === productId) || {},
  itemIndexByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).findIndex(i => i.id === productId) || -1,
  roomSpecialServices: (state, getters) => roomIndex => _filter(getters.items, it => it.rowId*1 === roomIndex),
  roomsSpecialServices: (state, getters) => _filter(getters.items, it => it.rowId*1 < ROW_ID_PAY_LATER),
  payLaterItems: (state, getters) => _filter(getters.items, it => (it.rowId*1 >= ROW_ID_PAY_LATER && it.rowId*1 <= ROW_ID_PAY_LATER_MAX)),
  ecommerceItems: (state, getters) => _filter(getters.items, it => it.rowId*1 === ROW_ID_ECOMMERCE),
  insuranceItem: (state, getters) => getters.items.find(it => it.rowId*1 === ROW_ID_INSURANCE),
  itemFinalPrice: (state, getters) => item => (item.finalPrice === '') ? item.price * 1 : item.finalPrice * 1,
  itemFinalPriceTotal: (state, getters) => item => getters.itemFinalPrice(item) * item.quantity * 1,
  itemPriceFrom: (state, getters) => item => (item.priceFrom === '') ? item.price * 1 : item.priceFrom * 1,
  itemPriceFromTotal: (state, getters) => item => getters.itemPriceFrom(item) * item.quantity * 1,
  extractPhoto: state => item => {
    let currentPhoto = item.photo
    if (currentPhoto && currentPhoto !=='') {
      const aCurrentPhoto = currentPhoto.split('resize.php?url=')
      if (aCurrentPhoto.length > 1) {
        return aCurrentPhoto[1]
      } else {
        return currentPhoto
      }
    } else {
      return item.photo
    }
  },
  ...insuranceGetters,

  totalRoomsPrice: (state, getters) => {
    let total = 0
    _forEach(getters.rooms, r => total += r.finalPrice * 1)
    _forEach(getters.roomsSpecialServices, i => total += getters.itemFinalPriceTotal(i) )
    return total
  },
  totalRoomsPriceFrom: (state, getters) => {
    let total = 0
    _forEach(getters.rooms, r => total += r.price * 1)
    _forEach(getters.roomsSpecialServices, i => total += getters.itemPriceFromTotal(i) )
    return total
  },
  totalEcommercePriceFrom: (state, getters) => {
    let total = 0
    _forEach(getters.ecommerceItems, i => total += getters.itemPriceFromTotal(i) )
    return total
  },
  totalEcommercePrice: (state, getters) => {
    let total = 0
    _forEach(getters.ecommerceItems, i => total += getters.itemFinalPriceTotal(i) )
    return total
  },
  cartTotal: (state, getters) => {
    return getters.totalRoomsPrice + getters.totalEcommercePrice
  },
  cartTotalFull: (state, getters) => {
    return getters.totalRoomsPriceFrom + getters.totalEcommercePriceFrom
  },
  cartTotalDiscount: (state, getters) => {
    return getters.cartTotalFull - getters.cartTotal
  }
}
