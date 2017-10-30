import {actions as insuranceActions} from './insurance/actions'
import {ROW_ID_INSURANCE, ROW_ID_ECOMMERCE} from './rowIdTypes'
import _extend from 'lodash/extend'
import _cloneDeep from 'lodash/cloneDeep'

export const actions = {
  init ({commit, state, getters}, {cart, structureId, portalId}) {
    console.log('--- cart.init')

    const oldCart = _cloneDeep(getters.cart)
    const newCart = _extend({}, oldCart, cart)

    commit('setCart', newCart)
    commit('setStructureId', structureId)
    commit('setPortalId', portalId)
  },
  removeProduct ({commit, dispatch, getters}, {cartUid}) {
    const cartIndex = getters.itemIndexByUid(cartUid)

    commit('removeProduct', {cartIndex})
    return dispatch('cloneToRemote')
  },
  removeQuantity ({state, commit, dispatch, getters}, {cartUid, quantity = 1}) {
    const cartIndex = getters.itemIndexByUid(cartUid)

    if (cartIndex < 0) return
    const cartItem = getters.items[cartIndex]

    if (cartItem.quantity > quantity) {
      commit('subtractQuantity', {cartIndex, quantity})
    } else {
      commit('removeProduct', {cartIndex})
    }
    dispatch('cloneToRemote')
  },
  addProduct ({commit, dispatch, getters}, {product, quantity}) {
    let rowId;

    if(product.type === 'specialservice') {
      rowId = getters.currentRoomIndex
    } else if(product.type === 'insurance') {
      rowId = ROW_ID_INSURANCE
    } else {
      rowId = ROW_ID_ECOMMERCE
    }

    commit('addProduct', {rowId, product, quantity})
    dispatch('cloneToRemote')
  },
  addQuantity ({commit, dispatch, getters}, {cartUid, quantity}) {
    const cartIndex = getters.itemIndexByUid(cartUid)

    commit('addQuantity', {cartIndex, quantity})
    dispatch('cloneToRemote')
  },
  setQuantity ({commit, dispatch, getters}, {cartUid, quantity}) {
    const cartIndex = getters.itemIndexByUid(cartUid)

    commit('setQuantity', {cartIndex, quantity})
    dispatch('cloneToRemote')
  },
  restoreBackup ({commit}) {
    commit('restoreBackup')
  },
  changeQuantity ({commit, dispatch, getters}, {cartUid, quantity}) {
    const cartIndex = getters.itemIndexByUid(cartUid)
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
