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
    competitors: {
      bookingcom: 0,
      tripadvisor: 0,
      expedia: 0
    }
  }
}

export const mutations = {
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
    if (state.progressPercent + increment > 100) {
      state.progressPercent = 100
    } else {
      state.progressPercent += increment
    }
  },
  setBestPrice (state, payLoad) {
    state.bestPrice = payLoad
  },
  setBoBestPrice (state, payLoad) {
    state.boBestPrice = payLoad
  },
  setCompetitors (state, payLoad) {
    state.competitors = payLoad
  },
  setCompetitorPrice (state, {competitor, competitorPrice}) {
    state.competitors[competitor] = competitorPrice
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
