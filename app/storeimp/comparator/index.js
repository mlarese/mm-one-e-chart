import {actions} from './actions'
import {getters} from './getters'
import _isArray from 'lodash/isArray'
import _keyBy from 'lodash/keyBy'

export const state = () => {
  return {
    test: true,
    comparationResult: 'best',
    comparatorCurrentStatus: 'progress',
    currency: '€',
    progressPercent: 10,
    bestPrice: 0,
    boBestPrice: 0,
    singleIncrement:0,
    structureId:0,
    adults: 0,
    children: [],
    checkin: '',
    checkout: '',
    boardId:0,
    channels: {
      6: {name:'bookingcom', id: 6, price: 0},
      5: {name: 'expedia', id: 5, price: 0}
    }
  }
}

export const mutations = {
  setTest (state, payLoad){
    state.test = payLoad
  },
  setCheckin (state, payLoad){
    state.checkin = payLoad
  },
  setCheckout (state, payLoad){
    state.checkout = payLoad
  },
  setBoardId (state, payLoad){
    state.boardId = payLoad
  },
  setChildren (state, payLoad) {
    state.children = payLoad
  },
  setAdults (state, payLoad) {
    state.adults = payLoad
  },
  setStructureId (state, payLoad) {
    state.structureId = payLoad
  },
  setBoardingId (state, payLoad) {
    state.boardingId = payLoad
  },
  setRoomId (state, payLoad) {
    state.roomId = payLoad
  },
  setCurrency (state, payLoad) {
    state.currency = payLoad
  },
  setComparationResult (state, payLoad) {
    state.comparationResult = payLoad
  },
  setComparatorCurrentStatus (state, payLoad) {
    state.comparatorCurrentStatus = payLoad
  },
  setProgressPercent (state, payLoad) {
    state.progressPercent = payLoad
  },
  setSingleIncrement (state, payLoad) {
    state.singleIncrement = payLoad
  },
  incrementProgressPercent (state, increment = -1) {
    if (increment === -1) {
      increment = state.singleIncrement
    }
    if (state.progressPercent + increment >= 100) {
      state.progressPercent = 100
    } else {
      state.progressPercent += increment
    }
  },
  setBestPrice (state, payLoad) {
    state.bestPrice = payLoad *1
  },
  setBoBestPrice (state, payLoad) {
    state.boBestPrice = payLoad * 1
  },
  setChannels (state, payLoad) {
    if (_isArray(payLoad)) {
      payLoad = _keyBy(payLoad, 'id')
    }
    state.channels = payLoad
  },
  setChannelPrice (state, {id, channelPrice}) {
    state.channels[id].price = channelPrice
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
