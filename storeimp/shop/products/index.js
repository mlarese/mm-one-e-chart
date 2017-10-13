import {actions} from './actions'
import {getters} from './getters'
/**
 * @typedef {Object} ProductItem
 *  @property {string} productType
 *  @property {number} groupId
 *  @property {number} inventory
 *  @property {number} productPrice
 *  @property {string} productName
 *  @property {number} productId
 */

const oState = {
  groups: {
    field: 'group',
    list: [],
    current: '',
    id: 'groups'
  },
  perPage: 20,
  page: 1,
  list: []
}

export const state = () => oState
export const mutations = {
  setPage (state, page) {
    state.page = page
  },
  incrementPage (state) {
    state.page++
  },
  setCurrentGroup (state, payLoad) {
    state.groups.current = payLoad
  },
  pushProducts (state, payLoad = []) {
    state.list = state.list = [...state.list, ...payLoad]
  },
  setList (state, payLoad = []) {
    state.list = payLoad
  },
  pushToList (state, payLoad) {
    state.list.push(payLoad)
  },
  setGroupList (state, payLoad = []) {
    state.groups.list = payLoad
  },
  incrementInventory (state, {item, quantity}) {
    state.list
      .find(product => product.id === item.id)
      .inventory += quantity
  },
  decrementInventory (state, {item, quantity}) {
    state.list
      .find(product => product.id === item.id)
      .inventory -= quantity
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
