const root = {root: true}

export const actions = {
  loadFlowSetup ({commit, dispatch}) {
    const url = '/booking/flowSetup'
    return dispatch('api/get', {url}, root)
      .then(res => {
        commit('setFlowSetup', res.data)
      })
  },
  loadStructureConfig ({commit, dispatch}) {
    const url = '/booking/config'
    return dispatch('api/get', {url}, root)
      .then(res => {
        commit('setStructureConfig', res.data)
      })
  }
}
