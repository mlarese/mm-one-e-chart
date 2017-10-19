const root = {root: true}

export const actions = {
  init ({commit, dispatch}, {absServer}) {
    commit('setAbsServer', absServer)
  },
  loadFlowSetup ({commit, dispatch, getters}) {
    console.log('--- booking.loadFlowSetup')
    const url = '/booking/flowSetup'

    return dispatch('api/get', {url, options: {baseURL: getters.absServer}}, root)
      .then(res => {
        commit('setFlowSetup', res.data)
      })
  },
  loadStructureConfig ({commit, dispatch, getters}) {
    console.log('--- booking.loadStructureConfig')
    const url = '/booking/config'
    return dispatch('api/get', {url, options: {baseURL: getters.absServer}}, root)
      .then(res => {
        commit('setStructureConfig', res.data)
      })
  }
}
