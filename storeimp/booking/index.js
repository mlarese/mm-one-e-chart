import {actions} from './actions'

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
      partnerId: {},
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
  state
}
