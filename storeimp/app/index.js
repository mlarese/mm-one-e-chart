import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    absServer: null,
    currentCategory: null,
    locale: {
      thousands: '.',
      decimal: ',',
      locale: 'it'
    }
  }
}

export const mutations = {
  setCurrentCategory (state, payLoad) {
    console.log('setCurrentCategory Payload', payLoad)
    state.currentCategory = payLoad
  },
  setLocale (state, payLoad) {
    state.locale = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
