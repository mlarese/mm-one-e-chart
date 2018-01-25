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
  init({commit, dispatch}, {rates = null}) {
    if (rates) {
      commit('setList', rates)
    }
  },
  load ({commit, dispatch}) {
    return dispatch('api/get', {url: '/rates'}, {root: true})
      .then(res => commit('setList', res.data))
  }
}

export const getters = {
  activeRates: state => state.list.filter(r => r.multirate_status * 1 === 1)
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
