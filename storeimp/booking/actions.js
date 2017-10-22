import _forEach from 'lodash/forEach'
const root = {root: true}
const getOptions = ({structureId, portalId, userLanguageCode}) => ({
  headers: {
    StructureId: structureId,
    PortalId: portalId,
    UserLanguageCode: userLanguageCode
  }
})

export const actions = {
  init ({commit, dispatch}, {absServer}) {
    commit('setAbsServer', absServer)
  },
  addEcommerceServers ({dispatch, state}) {
    console.log('--- booking.addEcommerceServers')
    if (state.structureConfig.ecommerceHosts) {
      _forEach(state.structureConfig.ecommerceHosts, (url, key) => {
        dispatch('api/addServer', {url, key}, {root: true})
      })
    }
  },
  loadFlowSetup ({commit, dispatch, getters, rootState}, {structureId, portalId, userLanguageCode}) {
    console.log('--- booking.loadFlowSetup')
    const url = '/booking/flowSetup'
    const options = getOptions({structureId, portalId, userLanguageCode})

    return dispatch('api/get', {url, options}, root)
      .then(res => {
        commit('setFlowSetup', res.data)
      })
  },
  loadStructureConfig ({commit, dispatch, getters}, {structureId, portalId, userLanguageCode}) {
    console.log('--- booking.loadStructureConfig')
    const url = '/booking/config'
    const options = getOptions({structureId, portalId, userLanguageCode})

    return dispatch('api/get', {url, options}, root)
      .then(res => {
        commit('setStructureConfig', res.data)
        dispatch('addEcommerceServers')
      })
  }
}
