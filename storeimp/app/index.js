import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    absServer: null,
    locale: {
      thousands: '.',
      decimal: ',',
      locale: 'it'
    }
  }
}

export const mutations = {
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
