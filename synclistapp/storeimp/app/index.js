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
      updates:0,
      sourceRate: null,
      targetRate: null,
      sourceRoom: null,
      syncAvailability: false,
      syncRestrictions: false,
      allRooms: false,
      futureDates: false,
      fromDate: null,
      toDate: null,
      dateRange: false
    }
  }
}

export const mutations = {
  setStructureId (state, payLoad) {
    state.structureId = payLoad
  },
  update (state) {
    if( state.ui.updates>= 2000) {
      state.ui.updates = 0
    } else {
      state.ui.updates++
    }
  },
  setUi (state, payLoad) {
    state.ui = payLoad
  },
  setUiSourceRate (state, payLoad) {
    if(payLoad === '') {
      payLoad = null
    }
    state.ui.sourceRate = payLoad
    state.ui.sourceRoom = null
  },
  setUiSourceRoom (state, payLoad) {
    if(payLoad === '') {
      payLoad = null
    }
    state.ui.sourceRoom = payLoad
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
