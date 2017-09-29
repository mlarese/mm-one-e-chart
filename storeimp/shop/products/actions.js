import _get from 'lodash/get'

const root = {root: true}

export const actions = {
  loadGroups ({commit, dispatch, state}) {
    return dispatch('api/get', '/groups', root)
      .then(res => {
        let data = _get(res, 'data.data', res.data)
        commit('setGroupList', data)
        if (state.groups.list.length > 0) {
          commit('setCurrentGroup', state.groups.list[0])
        }
      })
  },
  loadProducts ({commit, dispatch}) {
    return dispatch('api/get', '/products', root)
      .then(res => {
        let data = _get(res, 'data.data', res.data)
        commit('setList', data)
      })
  },
  changeGroup ({commit}, group) {
    commit('setCurrentGroup', group)
  },
  commitProduct ({commit}, {item, quantity}) {
    commit('decrementInventory', {item, quantity})
  },
  restoreProduct ({commit}, {item, quantity}) {
    commit('incrementInventory', {item, quantity})
  }
}
