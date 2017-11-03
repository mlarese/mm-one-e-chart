import {actions as insuranceActions} from './insurance/actions'
import {ROW_ID_INSURANCE, ROW_ID_ECOMMERCE, ROW_ID_PAY_LATER} from './rowIdTypes'
import _extend from 'lodash/extend'
import _cloneDeep from 'lodash/cloneDeep'

export const actions = {
  init ({commit, state, getters}, {cart, structureId, portalId}) {
    const oldCart = _cloneDeep(getters.cart)
    const newCart = _extend({}, oldCart, cart)

    commit('setRawCart', cart)
    commit('setCart', newCart)
    commit('setStructureId', structureId)
    commit('setPortalId', portalId)
  },
  quote ({dispatch, commit, state, getters, rootGetters}, ) {
    const url = '/booking/cart/quote/'
    const {adults, child, pax, numNights} = getters.currentRoom
    const userLanguageCode = rootGetters['app/userLanguageCode']

    const options = {
      headers: {
        StructureId: state.structureId,
        PortalId: state.portalId,
        UserLanguageCode: userLanguageCode
      }
    }

    const data = {
      "itemId":1,
      "variants":[
        {"vCatId":0,"vId":1,"vValue":1},{"vCatId":0,"vId":2,"vValue":2}
       ]}
      // {adults, child, pax, numNights}

    return dispatch('api/post',{url, data, options},{root: true})

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
  addProduct ({commit, dispatch, getters, rootGetters}, {product, quantity}) {
    let rowId;

    if(product.type === 'specialservice') {
      rowId = getters.currentRoomIndex
    } else if(product.type === 'insurance') {
      rowId = ROW_ID_INSURANCE
    } else {
      rowId = ROW_ID_ECOMMERCE
    }

    if (product.topayapart * 1 === 1) {
      rowId = ROW_ID_PAY_LATER
    }

    //dispatch('quote')
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
    const url = '/booking/cart/' + getters.id
    const data = getters.cart
    const options = {
      headers: {
        StructureId: state.structureId,
        PortalId: state.portalId
      }
    }
    return dispatch('api/put', {url, data, options}, {root: true})
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
