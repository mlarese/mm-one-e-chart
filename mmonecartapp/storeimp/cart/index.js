import {actions} from './actions'
import {getters} from './getters'
import {mutations as insuranceMutations} from './insurance/mutations'
import _cloneDeep from 'lodash/cloneDeep'
import _filter from 'lodash/filter'
import {generateUUID} from '../../assets/uidhlp'

const cartBackup = state => {
  state.backupCart = _cloneDeep(state.cart)
}

export const state = () => {
  return {
    bookingConditionsLink: '',
    structureId: 0,
    portalId: 0,
    backupCart: {},
    rawCart: {},
    cartChanges: 0,
    inited: false,
    insuranceConfig:{
      price_cancel_deposit:0,
      price_all_deposit:0,
      price_cancel_deposit_url:"",
      price_all_deposit_url:"",
      price_all_deposit_pid:"",
      price_cancel_deposit_pid:"",
      price_cancel:0,
      price_all:8.74,
      price_cancel_url:"",
      price_all_url:"",
      price_cancel_pid:"",
      price_all_pid:""
    },
    cart: {
      id: 0,
      items: [],
      rooms: [],
      coupon: {value: 0, label: '' , type: '', code: ''},
      insuranceResult:{
        type: '',
        amount: '',
        premium: 0,
        contract: ''
      },
      insurance: {
        type: '',
        amount: '',
        premium: 0,
        contract: ''
      }
    }
  }
}

export const mutations = {
  setCoupon (state, {value, type, label, code}) {
    state.cart.coupon = {value, type, label, code}
  },
  setBookingConditionsLink (state, payLoad) {
    state.bookingConditionsLink = payLoad
  },
  setInited (state, payLoad = true) {
    state.inited = payLoad
  },
  newCartChange (state) {
    state.cartChanges++
  },
  addRoom (state, payLoad) {
    cartBackup(state)
    state.cart.rooms.push(payLoad)
  },
  removeRoom (state, roomIndex) {
    cartBackup(state)
    let items = _filter(state.cart.items, item => item.rowId !== roomIndex)

    state.cart.rooms.splice(roomIndex, 1)
    state.cart.items = items
  },
  setRooms (state, payLoad) {
    cartBackup(state)
    state.cart.rooms = payLoad
  },
  setCart (state, payLoad) {
    cartBackup(state)
    state.cart = payLoad
  },
  setRawCart (state, payLoad) {
    state.rawCart = payLoad
  },
  setPortalId (state, payLoad) {
    state.portalId = payLoad
  },
  setStructureId (state, payLoad) {
    state.structureId = payLoad
  },
  addProduct (state, {rowId, product, quantity}) {
    cartBackup(state)
    const uid = generateUUID()
    state.cart.items.push({uid, rowId, ...product, quantity})
  },
  removeProduct (state, {cartIndex}) {
    if (cartIndex >= 0) {
      cartBackup(state)
      state.cart.items.splice(cartIndex, 1)
    }
  },
  setQuantity (state, {cartIndex, quantity}) {
    cartBackup(state)
    state.cart.items[cartIndex].quantity = quantity
  },
  addQuantity (state, {cartIndex, quantity = 1}) {
    cartBackup(state)
    state.cart.items[cartIndex].quantity += quantity
  },
  subtractQuantity (state, {cartIndex, quantity = 1}) {
    cartBackup(state)
    state.cart.items[cartIndex].quantity -= quantity
  },
  restoreBackup (state) {
    state.cart = _cloneDeep(state.backupCart)
  },
  ...insuranceMutations
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
