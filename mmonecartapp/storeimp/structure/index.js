import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    inited: false,
    structureConfig: {
      structureId: 0,
      portalId: 0
    }
  }
}

export const mutations = {
  setInited (state, payLoad = true) {
    state.inited = payLoad
  },
  setStructureConfig (state, payLoad) {
    state.structureConfig = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
