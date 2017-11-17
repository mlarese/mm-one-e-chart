import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    comparationResult: 'best',
    comparatorCurrentStatus: 'progress',
    currency: '€',
    progressPercent: 10,
    bestPrice: 0,
    boBestPrice: 0,
    singleIncrement:0,
    storeId:0,
    boardingId:0,
    roomId:0,
    channels: {
      6: {name:'bookingcom', id: 6, price: 0},
      5: {name: 'expedia', id: 5, price: 0}
    }
  }
}

export const mutations = {
  setStoreId (state, payLoad) {
    state.storeId = payLoad
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
