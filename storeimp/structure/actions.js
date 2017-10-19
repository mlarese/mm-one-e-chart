import {instance} from '../api/axios'

export const actions = {
  init ({commit}, structureConfig) {
    console.log('-- structure.init')

    const {structureId, portalId, userLanguageCode} = structureConfig
    commit('setStructureConfig', structureConfig)
    commit('setInited')

    instance.defaults.headers.common['StructureId'] = structureId
    instance.defaults.headers.common['PortalId'] = portalId
    instance.defaults.headers.common['UserLanguageCode'] = userLanguageCode

    return Promise.resolve({})
  }
}
