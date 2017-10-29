import {actions as insuranceActions} from './insurance/actions'
import _extend from 'lodash/extend'
import _cloneDeep from 'lodash/cloneDeep'

export const actions = {
  init ({commit, state, getters}, {cart, structureId, portalId}) {
    console.log('--- cart.init')

    const oldCart = _cloneDeep(getters.cart)
    const newCart = _extend({}, oldCart, cart)

    console.dir(newCart)
    commit('setCart', newCart)
    commit('setStructureId', structureId)
    commit('setPortalId', portalId)
  },
  removeProduct ({commit, dispatch}, {cartIndex}) {
    if (cartIndex < 0) return
    commit('removeProduct', {cartIndex})
    return dispatch('cloneToRemote')
  },
  removeQuantity ({state, commit, dispatch, getters}, {cartIndex, quantity = 1}) {
    if (cartIndex < 0) return
    const cartItem = getters.items[cartIndex]

    if (cartItem.quantity > quantity) {
      commit('subtractQuantity', {cartIndex, quantity})
    } else {
      commit('removeProduct', {cartIndex})
    }
    dispatch('cloneToRemote')
  },
  addProduct ({commit, dispatch}, {rowId, product, quantity}) {
    commit('addProduct', {rowId, product, quantity})
    dispatch('cloneToRemote')
  },
  addQuantity ({commit, dispatch, getters}, {cartIndex, quantity}) {
    commit('addQuantity', {cartIndex, quantity})
    dispatch('cloneToRemote')
  },
  setQuantity ({commit, dispatch, getters}, {cartIndex, quantity}) {
    commit('setQuantity', {cartIndex, quantity})
    dispatch('cloneToRemote')
  },
  restoreBackup ({commit}) {
    commit('restoreBackup')
  },
  changeQuantity ({commit, dispatch}, {cartIndex, quantity}) {
    if (quantity === 0) {
      return dispatch('removeProduct', {cartIndex})
    } else {
      return dispatch('setQuantity', {cartIndex, quantity})
    }
  },
  cloneToRemote ({dispatch, commit, getters, state}) {
    const url = '/booking/cart'
    const data = getters.cart
    const options = {
      headers: {
        CartId: getters.id,
        StructureId: state.structureId,
        PortalId: state.portalId
      }
    }
    return dispatch('api/post', {url, data, options}, {root: true})
      .then(res => {
        return res
      })
      .catch(err => {
        commit('restoreBackup')
        return err
      })
  },
  ...insuranceActions
}
