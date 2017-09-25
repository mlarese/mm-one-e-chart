import _filter from 'lodash/filter'

/**
 * record = {
 *  id
 *  title
 *  description
 *  quantity
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
  }
}

export const actions = {
  changeGroup ({commit}, group) {
    commit('currentGroup', group)
  }
}

export const getters = {
  list: state => state.list,
  currentGroupList: state => _filter(state.list, {[state.groups.field]: state.groups.current})
  groupsList: state => state.groups.list
}
