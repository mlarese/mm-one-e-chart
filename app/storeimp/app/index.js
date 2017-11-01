import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    step: 'ecommerce',
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
  setStep (state, payLoad) {
    state.step = payLoad
  },
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
