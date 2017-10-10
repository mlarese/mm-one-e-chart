import Vue from 'vue'
import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    isAjax: false,
    error: {},
    hasError: false
  }
}

export const mutations = {
  isAjax (state, payLoad = false) {
    state.isAjax = payLoad
  },
  error (state, payLoad = null) {
    if (payLoad === null) {
      if (state.error !== null) {
        state.error = null
      }
    } else {
      Vue.set(state, 'error', payLoad)
    }
  },
  hasError (state, payLoad = false) {
    state.hasError = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
