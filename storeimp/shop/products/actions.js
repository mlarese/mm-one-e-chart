const root = {root: true}

export const actions = {
  loadGroups ({commit, dispatch, state}) {
    return dispatch('api/get', {url: '/groups'}, root)
      .then(res => {
        commit('setGroupList', res.data)
        if (state.groups.list.length > 0) {
          dispatch('changeGroup', state.groups.list[0].group_id)
        }
        return res
      })
  },
  loadProducts ({commit, dispatch, state, getters}) {
    const {perPage, page} = state
    const category = getters.groupCurrent

    const options = {
      params: {perPage, page, category}
    }
    return dispatch('api/get', {url: '/products', options}, root)
      .then(res => {
        commit('pushProducts', res.data)
        commit('incrementPage')
        return res
      })
  },
  changeGroup ({commit, dispatch}, group) {
    commit('setCurrentGroup', group)
    commit('setPage', 1)
    commit('setList')
    return dispatch('loadProducts')
  },
  commitProduct ({commit}, {item, quantity}) {
    commit('decrementInventory', {item, quantity})
  },
  restoreProduct ({commit}, {item, quantity}) {
    commit('incrementInventory', {item, quantity})
  }
}
