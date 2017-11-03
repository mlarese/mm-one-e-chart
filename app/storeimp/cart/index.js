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
    structureId: 0,
    portalId: 0,
    backupCart: {},
    rawCart: {},
    cart: {
      id: 0,
      items: [],
      rooms: [],
      insurance: {
        hasInsurance: false,
        insuranceType: null,
        insure: 0,
        totals: {
          protection: 0,
          protectionPlus: 0
        }
      }
    }
  }
}

export const mutations = {
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
