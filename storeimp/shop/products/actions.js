const root = {root: true}

export const actions = {
  loadGroups ({commit, dispatch, state}) {
    return dispatch('api/get', {url: '/groups'}, root)
      .then(res => {
        commit('setGroupList', res.data)
        if (state.groups.list.length > 0) {
          commit('setCurrentGroup', state.groups.list[0].group_id)
        }
      })
  },
  loadProducts ({commit, dispatch, state}) {
    const {perPage, page} = state
    const options = {
      params: {perPage, page}
    }
    console.log(state)
    return dispatch('api/get', {url: '/products', options}, root)
      .then(res => commit('setList', res.data))
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
