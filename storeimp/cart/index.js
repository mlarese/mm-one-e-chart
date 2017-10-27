import {actions} from './actions'
import {getters} from './getters'
import _cloneDeep from 'lodash/cloneDeep'

const cartBackup = state => {
  state.backupCart = _cloneDeep(state.cart)
}

export const state = () => {
  return {
    structureId: 0,
    portalId: 0,
    backupCart: {},
    cart: {
      id: 0,
      items: [],
      insurance: {
        hasInsurance: false,
        totalPax: 0,
        guests: [],
        insuranceType: null,
        total: 0
      }
    }
  }
}

export const mutations = {
  setCart (state, payLoad) {
    cartBackup(state)
    state.cart = payLoad
  },
  setPortalId (state, payLoad) {
    state.portalId = payLoad
  },
  setStructureId (state, payLoad) {
    state.structureId = payLoad
  },
  addProduct (state, {rowId, product, quantity}) {
    cartBackup(state)
    state.cart.items.push({rowId, ...product, quantity})
  },
  removeProduct (state, {cartIndex}) {
    if (cartIndex >= 0) {
      cartBackup(state)
      state.cart.items.splice(cartIndex, 1)
    }
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
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
