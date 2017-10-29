import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    currentCategory: null,
    userLanguageCode: 'it',
    locale: {
      thousands: '.',
      decimal: ',',
      locale: 'it'
    },
    currentProduct: null
  }
}

export const mutations = {
  setCurrentCategory (state, payLoad) {
    state.currentCategory = payLoad
  },
  setLocale (state, payLoad) {
    state.locale = payLoad
  },
  setUserLanguageCode (state, payLoad) {
    state.userLanguageCode = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
