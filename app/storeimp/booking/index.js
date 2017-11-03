import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    flowSetup: {
      stepRoomsEnable: false,
      alternativeRoomsEnable: false,
      stepEcommerceEnable: false,
      stepAllianzEnable: false,
      roomsFirst: false
    },
    structureConfig: {
      specialServicesEnabled: false,
      productCatalogOpen: false,
      defaultCategory: 0,
      shops: [],
      partners: {},
      ecommerceHosts: {}
    }
  }
}

export const mutations = {
  setFlowSetup (state, payLoad) {
    state.flowSetup = payLoad
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
