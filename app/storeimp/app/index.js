import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    step: 'ecommerce',
    nextStep: null,
    currentCategory: null,
    userLanguageCode: 'it',
    checkin: '',
    checkout: '',
    childrenData: [],
    adultsCount: 0,
    locale: {
      thousands: '.',
      decimal: ',',
      locale: 'it'
    },
    currentProduct: null
  }
}

export const mutations = {
  setCheckin (state, payLoad) {
    state.checkin = payLoad
  },
  setCheckout (state, payLoad) {
    state.checkout = payLoad
  },
  setChildrenData (state, payLoad) {
    state.childrenData = payLoad
  },
  setAdultsCount (state, payLoad) {
    state.adultsCount = payLoad
  },
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
  },
  setNextStep (state, payLoad) {
    state.nextStep = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
