import _forEach from 'lodash/forEach'
import _filter from 'lodash/filter'
import {getters as insuranceGetters} from './insurance/getters'
import {ROW_ID_PAY_LATER, ROW_ID_ECOMMERCE, ROW_ID_INSURANCE, ROW_ID_SPECIAL_MARKER, ROW_ID_PAY_LATER_MAX} from './rowIdTypes'

export const getters = {
  id: state => state.cart.id,
  bookingConditionsLink: state => state.bookingConditionsLink,
  cart: state => state.cart,
  inited: state => state.inited,
  hasCoupon: (state, getters) => getters.couponValue >0,
  isToPayApart: state => product => (product.topayapart * 1 === 1),
  couponAmount: (state, getters) => {
    if (getters.couponValue === 0) {
      return 0
    }
    if (getters.couponType === 'p') {
      return getters.totalRoomsAndEcommerce * getters.couponValue / 100
    } else {
      return getters.couponValue
    }
  },
  isPercentCoupon: (state, getters) => getters.couponType === 'p',
  coupon: state => state.cart.coupon,
  couponValue: (state, getters) => getters.coupon.value,
  couponType: (state, getters) => getters.coupon.type,
  couponLabel: (state, getters) => getters.coupon.label,
  couponCode: (state, getters) => getters.coupon.code,
  cartChanges: state => state.cartChanges,
  items: state => state.cart.items,
  rooms: state => state.cart.rooms,
  currentRoomIndex: state => (state.cart.currentRoom * 1 - 1),
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
  payLaterItemRoom: (state, getters) => item => {
    const idx = item.rowId - ROW_ID_PAY_LATER
    return getters.rooms[idx]
  },
  roomIndexFromItem: (state, getters) => item => {
    if (getters.isToPayApart(item)) {
      return item.rowId - ROW_ID_PAY_LATER
    } else {
      return item.rowId
    }
  },
  ecommerceItems: (state, getters) => _filter(getters.items, it => it.rowId*1 === ROW_ID_ECOMMERCE),
  insuranceItem: (state, getters) => getters.items.find(it => it.rowId*1 === ROW_ID_INSURANCE),
  itemFinalPrice: (state, getters) => item => {
    if(item.finalPrice === '') {
      return item.price * 1
      // console.log('---- using price ', item.price)
    } else {
      return item.finalPrice * 1
      // console.log('---- using finalPrice ', item.finalPrice)
    }
  },
  itemFinalPriceTotal: (state, getters) => item => {
    let res = getters.itemFinalPrice(item) * item.quantity * 1
    return res
    // console.log('---- itemFinalPriceTotal', res)
  },
  itemPriceFrom: (state, getters) => item => {
    if(item.priceFrom !== '' && item.discount !== '') {
      return item.priceFrom * 1
    }  {
      return item.price * 1
    }
  },
  itemPriceFromTotal: (state, getters) => item => {
    let price = getters.itemPriceFrom(item)
    let quantity = item.quantity * 1
    let total =  price * quantity

    // console.log('-- itemPriceFromTotal', price, quantity)
    return total
  },
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
    _forEach(getters.roomsSpecialServices, item => {
      total += getters.itemFinalPriceTotal(item)
    })
    return total
  },
  totalRoomsPriceFrom: (state, getters) => {
    let total = 0
    _forEach(getters.rooms, r => total += r.price * 1)
    _forEach(getters.roomsSpecialServices, i => {
      let value = getters.itemPriceFromTotal(i);
      // console.log('------', value, total)
      total += value
    })
    return total
  },
  totalEcommercePriceFrom: (state, getters) => {
    let total = 0
    _forEach(getters.ecommerceItems, i => total += getters.itemPriceFromTotal(i) )
    return total
  },
  totalEcommercePriceNoCoupon: (state, getters) => {
    let total = 0
    _forEach(getters.ecommerceItems, i => total += getters.itemFinalPriceTotal(i) )
    return total
  },
  totalEcommercePrice: (state, getters) => getters.totalEcommercePriceNoCoupon,
  totalRoomsAndEcommerce: (state, getters) => {
    return getters.totalRoomsPrice + getters.totalEcommercePrice
  },
  cartTotal: (state, getters) => {
    return getters.totalRoomsAndEcommerce - getters.couponAmount
  },
  cartTotalFull: (state, getters) => {
    return getters.totalRoomsPriceFrom + getters.totalEcommercePriceFrom
  },
  cartTotalDiscount: (state, getters) => {
    return getters.cartTotalFull - getters.cartTotal
  }
}
