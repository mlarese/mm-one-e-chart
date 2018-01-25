export const state = () => {
  return {
    list: []
  }
}

export const mutations = {
  setList(state, payload) {
    state.list = payload
  }
}

export const actions = {
  init({commit, dispatch}, {rooms = null}) {
    if (rooms) {
      commit('setList', rooms)
    }
  },
  load ({commit, dispatch}) {
    return dispatch('api/get', {url: '/rooms'}, {root: true})
      .then(res => commit('setList', res.data))
  }
}

export const getters = {
  noVirtuals: state => state.list.filter(r => r.room_virtual * 1 === 0)
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
