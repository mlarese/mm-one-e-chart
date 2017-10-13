import {actions} from './actions'
import {getters} from './getters'
/**
 * @typedef {Object} CartItem
 *  @property  {number} inventory
 *  @property  {number} quantity
 *  @property  {number} productId
 *  @property  {string} productType
 *  @property  {number} productPrice
 *  @property  {string} productName
 *  @property  {number} rowId
 *  @property  {number} roomId
 *  @property  {number} roomPrice
 *  @property  {string} roomDescription
 */
export const state = () => ({
  type: 'linearcart',
  list: []
})

export const mutations = {
  setCart (state, cart = []) {
    state.list = cart
  },
  remove (state, index) {
    state.list.splice(index, 1)
  },
  incrementQuantity (state, {index, quantity}) {
    state.list[index].quantity += quantity
  },
  decrementQuantity (state, {index, quantity}) {
    state.list[index].quantity -= quantity
  },
  /**
   *
   * @param state
   * @param cartItem CartItem
   */
  add (state, cartItem) {
    state.list.push(cartItem)
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
