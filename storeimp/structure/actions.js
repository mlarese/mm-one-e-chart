import axios from 'axios'

export const actions = {
  init ({commit}, structureConfig) {
    console.log('-- structure.init')

    const {structureId, portalId, userLanguageCode} = structureConfig
    commit('setStructureConfig', structureConfig)
    commit('setInited')

    axios.defaults.headers.common['StructureId'] = structureId
    axios.defaults.headers.common['PortalId'] = portalId
    axios.defaults.headers.common['UserLanguageCode'] = userLanguageCode

    return Promise.resolve({})
  }
}
