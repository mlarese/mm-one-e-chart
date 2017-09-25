import _filter from 'lodash/filter'

export const state = () => ({
  groups: {
    field: 'group',
    current: '',
    list: []
  },
  record: {},
  list: []
})

export const mutations = {
  record (state, payLoad = {}) {
    state.record = payLoad
  },
  currentGroup (state, payLoad) {
    state.groups.current = payLoad
  },
  list (state, payLoad = []) {
    state.list = payLoad
  },
  groups (state, payLoad = []) {
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
  groupList: state => _filter(state.list, {[state.groups.field]: state.groups.current})
}
