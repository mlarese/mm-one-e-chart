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
  quote ({dispatch, commit, state, getters, rootGetters}, {product}) {
    const url = '/booking/cart/quote/'
    const {adults, child, pax, numNights} = getters.currentRoom
    const userLanguageCode = rootGetters['app/userLanguageCode']
    const currentCategory = rootGetters['app/currentCategory']

    const options = {
      headers: {
        StructureId: state.structureId,
        PortalId: state.portalId,
        UserLanguageCode: userLanguageCode
      }
    }

    //vId 1 , notti
    //vId 2 , pax
    //vId 3 , adults
    //vId 4 , children
    
    const data = {
      'itemId':product.id,
      'variants':[
        {'vCatId': currentCategory,'vId': 1,'vValue': numNights},
        {'vCatId': currentCategory,'vId': 2,'vValue': pax},
        {'vCatId': currentCategory,'vId': 3,'vValue': adults},
        {'vCatId': currentCategory,'vId': 4,'vValue': child}
       ]
    }

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

    const isSpecialService = (product.type === 'specialservice')
    if (isSpecialService) {
      rowId = getters.currentRoomIndex
    } else if(product.type === 'insurance') {
      rowId = ROW_ID_INSURANCE
    } else {
      rowId = ROW_ID_ECOMMERCE
    }

    if (product.topayapart * 1 === 1) {
      rowId = ROW_ID_PAY_LATER
    }

    if (!isSpecialService && false) {
      commit('addProduct', {rowId, product, quantity})
      dispatch('cloneToRemote')
      return
    }

    dispatch('quote', {product})
      .then(res => {
        product.price = res.data * 1
        commit('addProduct', {rowId, product, quantity})
        dispatch('cloneToRemote')
      })
      .catch(err => {
        console.dir(err)
      })
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
