import {actions as insuranceActions} from './insurance/actions'

export const actions = {
  init ({commit}, {cart, structureId, portalId}) {
    console.log('--- cart.init')
    commit('setCart', cart)
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
