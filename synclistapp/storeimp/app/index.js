import {actions} from './actions'
import {getters} from './getters'
import _extend from 'lodash/extend'

export const state = () => {
  return {
    version: '1.0.1',
    structureId: null,
    onlyMultiRate: false,
    roomsAndRates: [],
    ui: {
      sourceRate: null,
      targetRate: null,
      sourceRoom: null,
      syncAvailability: false,
      syncRestrictions: false,
      allRooms: false,
      futureDates: false,
      fromDate: null,
      toDate: null
    }
  }
}

export const mutations = {
  setStructureId (state, payLoad) {
    state.structureId = payLoad
  },
  setUi (state, payLoad) {
    state.ui = payLoad
  },
  mergeUi (state, payLoad) {
    state.ui = _extend(state.ui, payLoad)
  },
  setOnlyMultiRate(state, payLoad) {
    state.onlyMultiRate = payLoad
  },
  setRoomsAndRates(state, payLoad) {
    state.roomsAndRates = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
