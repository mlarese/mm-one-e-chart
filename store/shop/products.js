import _filter from 'lodash/filter'

/**
 * record = {
 *  id
 *  title
 *  description
 *  inventory
 *  image
 *  group
 *  price
 * }
 */

export const state = () => ({
  groups: {
    field: 'group',
    list: [],
    current: ''
  },
  list: []
})

export const mutations = {
  currentGroup (state, payLoad) {
    state.groups.current = payLoad
  },
  list (state, payLoad = []) {
    state.list = payLoad
  },
  groupList (state, payLoad = []) {
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

export const actions = {
  changeGroup ({commit}, group) {
    commit('currentGroup', group)
  },
  addToCart ({commit}, {item, quantity}) {
    commit('decrementInventory', {item, quantity})
  },
  removeFromCart ({commit}, {item, quantity}) {
    commit('incrementInventory', {item, quantity})
  }
}

export const getters = {
  list: state => state.list,
  currentGroupList: state => _filter(state.list, {[state.groups.field]: state.groups.current}),
  groupsList: state => state.groups.list
}
